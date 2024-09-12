import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../Header/Navbar";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Modal from "../../../Helpers/postModal";
import BackButton from "../../../Helpers/BackButton";
import EditModal from "../../../Helpers/EditModal";

const PostPage = styled.div`
  margin-top: 150px !important;
`;

const BackButtonStyle=styled.div`
position: absolute;
top: 90px;
left: 30px;
`

interface Post {
  id: number;
  files: string;
  postTitle: string;
  createdDate: string;
  description: string;
  userId: string;
  firstName: string;
  urlType: "image" | "video" | "audio";
  URL: string;
}

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
}

const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded-lg max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4">{post.postTitle}</h2>
        <div className="mb-6">
          {post.urlType === "image" && (
            <img src={post.url} alt={post.postTitle} className="w-full h-auto" />
          )}
          {post.urlType === "video" && (
            <ReactPlayer url={post.url} controls width="100%" />
          )}
          {post.urlType === "audio" && (
            <audio controls className="w-full">
              <source src={post.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        <p>{post.description}</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const PostForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
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
              className="object-cover w-full h-full rounded-md"
              width="100%"
              height="100%"
              controls
            />
          </div>
        );

      case "audio":
        return (
          <div onClick={() => handleMediaClick(post)}>
            <audio
              controls
              className={`w-full cursor-pointer ${hoveredPostId === post.id ? "scale-125 transition-transform" : ""}`}
              onMouseEnter={() => setHoveredPostId(post.id)}
              onMouseLeave={() => setHoveredPostId(null)}
            >
              <source src={post.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
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
      console.log(updatedPost)
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
    <>
      <Navbar pageName="Post Page" />
     
      <PostPage>
      <BackButtonStyle>
      <BackButton/>
      </BackButtonStyle>
        <div className="mx-24 my-11">
          <h1 className="text-3xl font-semibold mb-6">Your Recent Posts</h1>

          <button
            onClick={handleAddPostClick}
            className="bg-slate-500 text-white px-4 py-2 rounded mb-4"
          >
            Add Post
          </button>
          {userPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {userPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative max-w-xs md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  draggable
                  onDragStart={() => handleDragStart(post.id)}
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDrop(event, post.id)}
                >
                  <a href="#" className="block w-full h-auto">
                    <div className="w-full h-48 md:h-60 lg:h-44 overflow-hidden">
                      {renderMedia(post)}
                    </div>
                  </a>
                  <div className="p-4 pb-16">
                    <a href="#">
                      <h5 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.postTitle.toUpperCase()}
                      </h5>
                    </a>
                    <p className="mt-2 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
                      Date: {post.createdDate}
                    </p>
                    <p className="mt-2 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
                      {post.description}
                    </p>
                    <button
                      onClick={() => handleEditButton(post)}
                      className="absolute bottom-4 right-28 bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      className="absolute bottom-4 right-4 px-4 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600"
                      onClick={handlePublishButton}
                    >
                      Publish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No posts available.</p>
          )}

        </div>
      </PostPage>

      <Modal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handlePostSubmit} />
      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        post={selectedPost}
        onSave={handleSave}
      />
      <MediaModal
        isOpen={mediaModalOpen}
        onClose={handleMediaModalClose}
        post={selectedPost}
      />
    </>
  );
};

export default PostForm;
