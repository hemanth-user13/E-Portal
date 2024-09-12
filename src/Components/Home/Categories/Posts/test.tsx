import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../Header/Navbar";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Modal from "../../../Helpers/postModal";
import EditModal from "../../../Helpers/EditModal"; 

const PostPage = styled.div`
  margin-top: 150px !important;
`;

const PostForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);  // State for edit modal
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [draggedPostId, setDraggedPostId] = useState<number | null>(null);
  const [hoveredPostId, setHoveredPostId] = useState<number | null>(null);
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
      handleModalClose();
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

  const handleMediaClick = (post: Post) => {
    setSelectedPost(post);
    setMediaModalOpen(true);
  };

  const handleMediaModalClose = () => {
    setMediaModalOpen(false);
    setSelectedPost(null);
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
          const response = await axios.post(
            "http://localhost:8001/userprivatePost"
          );
          console.log(response);

          Swal.fire("Published!", "Your post has been published.", "success");
          fetchUserPosts();
        } catch (error) {
          console.log("There is an error in the API", error);
          Swal.fire(
            "Error",
            "There was an issue publishing the post.",
            "error"
          );
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

  const renderMedia = (post: Post) => {
    switch (post.urlType) {
      case "image":
        return (
          <img
            src={post.url}
            alt={post.postTitle}
            className={`object-cover w-[350px] h-auto rounded-md cursor-pointer`}
            onMouseEnter={() => setHoveredPostId(post.id)}
            onMouseLeave={() => setHoveredPostId(null)}
            onClick={() => handleMediaClick(post)}
          />
        );
      case "video":
        return (
          <div
            onClick={() => handleMediaClick(post)}
            className={`w-[320px] h-[200px] cursor-pointer`}
            onMouseEnter={() => setHoveredPostId(post.id)}
            onMouseLeave={() => setHoveredPostId(null)}
          >
            <ReactPlayer
              url={post.url}
              width="100%"
              height="100%"
              controls
              light
            />
          </div>
        );
      default:
        return null;
    }
  };

  const handleEditButton = (post: Post) => {
    setSelectedPost(post);
    setEditModalOpen(true);
  };

  const handleSave = async (updatedPost: Post) => {
    try {
      await axios.put(`http://localhost:8001/userpost/${updatedPost.id}`, updatedPost);
      Swal.fire({
        title: "Success!",
        text: "Post updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      fetchUserPosts();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to update the post. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <PostPage>
      <Navbar />
      <button onClick={handleAddPostClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Post
      </button>
      <div className="flex flex-wrap mt-4">
        {userPosts.map((post) => (
          <div
            key={post.id}
            className="border p-4 m-2 rounded shadow-lg w-[350px] relative"
            draggable
            onDragStart={() => handleDragStart(post.id)}
            onDrop={(e) => handleDrop(e, post.id)}
            onDragOver={handleDragOver}
          >
            {renderMedia(post)}
            <button
              onClick={() => handleEditButton(post)}
              className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handlePostSubmit} />
      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        post={selectedPost}
        onSave={handleSave}
      />
      <Modal
        isOpen={mediaModalOpen}
        onClose={handleMediaModalClose}
        post={selectedPost}
      />
    </PostPage>
  );
};

export default PostForm;
