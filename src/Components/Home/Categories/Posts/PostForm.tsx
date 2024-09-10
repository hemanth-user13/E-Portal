import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert
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
  const [userPosts, setUserPosts] = useState<Post[]>([]); // State for storing user's posts
  const userId = localStorage.getItem("user_id"); // Get the userId from localStorage
  const userName = localStorage.getItem("firstName");

  // Function to handle opening the modal
  const handleAddPostClick = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Function to handle post submission
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
      fetchUserPosts(); // Re-fetch posts after publishing a new post
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to publish the post. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Function to fetch all posts and filter by userId
  const fetchUserPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8001/userpost"); // Fetch all posts
      const filteredPosts = response.data.filter(
        (post: Post) => post.firstName === userName
      ); // Filter posts by userId
      setUserPosts(filteredPosts); // Set filtered posts to state
    } catch (error) {
      console.error("Failed to fetch user posts", error);
    }
  };

  // Fetch user's posts when the component mounts
  useEffect(() => {
    if (userId) {
      fetchUserPosts(); // Only fetch posts if userId exists in localStorage
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

      {/* Display User's Posts */}
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

      {/* Reusable Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handlePostSubmit}
      />
    </div>
  );
};

export default PostForm;
