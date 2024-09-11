import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../Header/Navbar";
import Modal from "../../../Helpers/postModal";

interface Post {
  id: number;
  postTitle: string;
  createdDate: string;
  description: string;
  userId: string;
  firstName: string;
}

const PostForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [sortOrder, setSortOrder] = useState("none");
  const userId = localStorage.getItem("user_id");
  const userName = localStorage.getItem("firstName");

  const handleAddPostClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePostSubmit = async (values: {
    postTitle: string;
    createdDate: string;
    description: string;
  }) => {
    const firstName = localStorage.getItem("firstName");

    const postData = {
      ...values,
      firstName,
      userId,
    };

    try {
      await axios.post("http://localhost:8001/userpost", postData);
      Swal.fire({
        title: "Success!",
        text: "Post published successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      fetchUserPosts();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to publish the post. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const fetchUserPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8001/userpost");
      const filteredPosts = response.data.filter(
        (post: Post) => post.firstName === userName
      );
      setUserPosts(filteredPosts);
    } catch (error) {
      console.error("Failed to fetch user posts", error);
    }
  };

  const sortPosts = (order: "asc" | "desc") => {
    const sortedPosts = [...userPosts].sort((a, b) => {
      const dateA = new Date(a.createdDate).getTime();
      const dateB = new Date(b.createdDate).getTime();
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
    setUserPosts(sortedPosts);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "AtoZ") {
      sortPosts("asc");
    } else if (value === "ZtoA") {
      sortPosts("desc");
    }
    setSortOrder(value);
  };

  useEffect(() => {
    if (userId) {
      fetchUserPosts();
    }
  }, [userId]);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-semibold mb-6">Your Recent Posts</h1>

      <button
        onClick={handleAddPostClick}
        className="bg-slate-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Post
      </button>

      <select name="Filters" value={sortOrder} onChange={handleSortChange}>
        <option value="none">Sort by Date</option>
        <option value="AtoZ">A &rarr; Z</option>
        <option value="ZtoA">Z &rarr; A</option>
      </select>

      {userPosts.length > 0 ? (
        <div className="space-y-4">
          {userPosts.map((post) => (
            <div key={post.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{post.postTitle}</h2>
              <p className="text-gray-600">Date: {post.createdDate}</p>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts available for this user.</p>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handlePostSubmit}
      />
    </div>
  );
};

export default PostForm;
