import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../Header/Navbar";
import Modal from "../../../Helpers/postModal";
import styled from "styled-components";



const PostPage=styled.div`
  margin-top: 150px !important;
`
interface Post {
  id: number;
  files: string;
  postTitle: string;
  createdDate: string;
  description: string;
  userId: string;
  firstName: string;
}

const PostForm: React.FC = () => {
//   const { route } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [draggedPostId, setDraggedPostId] = useState<number | null>(null);
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
    files: string;
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

  const handleDragStart = (postId: number) => {
    setDraggedPostId(postId);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, dropPostId: number) => {
    event.preventDefault();

    if (draggedPostId !== null) {
      const draggedPostIndex = userPosts.findIndex(post => post.id === draggedPostId);
      const dropPostIndex = userPosts.findIndex(post => post.id === dropPostId);

      const updatedPosts = [...userPosts];
      const [draggedPost] = updatedPosts.splice(draggedPostIndex, 1);
      updatedPosts.splice(dropPostIndex, 0, draggedPost);

      setUserPosts(updatedPosts);
      setDraggedPostId(null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
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

  const handlePublishButton = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to publish this post?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, publish it!",
      cancelButtonText: "No, cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post("http://localhost:8001/userprivatePost");
          console.log(response);

          Swal.fire("Published!", "Your post has been published.", "success");
          fetchUserPosts();
        } catch (error) {
          console.log("There is an error in the API", error);
          Swal.fire("Error", "There was an issue publishing the post.", "error");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your post was not published.", "error");
      }
    });
  };

  useEffect(() => {
    if (userId) {
      fetchUserPosts();
    }
  }, [userId]);

  return (
   <>
    <Navbar pageName="Post Page" />
      
     <PostPage>
     <div className="mx-24 my-11">
        <h1 className="text-3xl font-semibold mb-6">Your Recent Posts</h1>

        <button
          onClick={handleAddPostClick}
          className="bg-slate-500 text-white px-4 py-2 rounded mb-4"
        >
          Add Post
        </button>

        <select
          name="Filters"
          value={sortOrder}
          onChange={handleSortChange}
          className="mb-4 px-2 py-1 border rounded"
        >
          <option value="none">Sort by Date</option>
          <option value="AtoZ">A &rarr; Z</option>
          <option value="ZtoA">Z &rarr; A</option>
        </select>

        {userPosts.length > 0 ? (
          <div className="space-y-4">
            {userPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center border p-4 rounded shadow"
                draggable
                onDragStart={() => handleDragStart(post.id)}
                onDragOver={handleDragOver}
                onDrop={(event) => handleDrop(event, post.id)}
              >
                <div className="flex-1 mr-4">
                  <div className="w-[230px] h-auto">
                    <img
                      src={post.files}
                      alt={post.description}
                      className="object-cover w-full h-auto rounded-md"
                    />
                  </div>
                </div>

                <div className="w-1/3 mr-96">
                  <h2 className="text-xl font-semibold">{post.postTitle}</h2>
                  <p className="text-gray-600">Date: {post.createdDate}</p>
                  <p>{post.description}</p>
                </div>
                <div className="mr-14">
                  <button
                    type="button"
                    onClick={handlePublishButton}
                    className="focus:outline-none text-white border-r-indigo-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  >
                    Publish
                  </button>
                </div>
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
     </PostPage>
   </>
  );
};

export default PostForm;
