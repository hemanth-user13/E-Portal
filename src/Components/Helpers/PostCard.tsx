import React from 'react';
import { PostProps } from '../Home/Categories/Posts/type';



const PostCard: React.FC<PostProps> = ({ postTitle, createdDate, description, firstName }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-11">
      <div className="mb-2">
        <h3 className="text-xl font-semibold">{postTitle}</h3>
        <p className="text-sm text-gray-500">By {firstName}</p>
      </div>
      <p className="text-sm text-gray-700">{description}</p>
      <p className="text-xs text-gray-400 mt-2">{new Date(createdDate).toDateString()}</p>
    </div>
  );
};

export default PostCard;
