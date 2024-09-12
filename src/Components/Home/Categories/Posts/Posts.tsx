import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@reduxjs/toolkit/query";
import { fetchUserpostData } from "./PostSlice";
import PostCard from "../../../Helpers/PostCard";
import MediaModal from "../../../Helpers/MediaModal";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: posts, loading, error } = useSelector((state: RootState) => state.posts);

  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    dispatch(fetchUserpostData());
  }, [dispatch]);

  const handleMediaClick = (post: Post) => {
    setSelectedPost(post);
    setMediaModalOpen(true);
  };

  const handleMediaModalClose = () => {
    setMediaModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="px-5 w-full flex justify-center items-center mt-64">
      <div className="w-full md:w-3/4 lg:w-2/3 bg-gray-300 p-4">
        <p className="text-xl md:text-2xl lg:text-3xl">Post section</p>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="flex flex-col gap-4 mt-11">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              postTitle={post.postTitle}
              createdDate={post.createdDate}
              description={post.description}
              firstName={post.firstName}
              url={post.url}
              urlType={post.urlType}
              onMediaClick={() => handleMediaClick(post)}
            />
          ))}
        </div>
      </div>

      {mediaModalOpen && (
        <MediaModal
          isOpen={mediaModalOpen}
          onClose={handleMediaModalClose}
          post={selectedPost}
        />
      )}
    </div>
  );
};

export default Posts;
