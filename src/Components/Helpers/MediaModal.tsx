import React from 'react';
import ReactPlayer from 'react-player';
import Close from '../../assets/cancel.png'

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
        <div className='ml-[679px] mb-[-35px] w-12' onClick={onClose}>
        <img src={Close} alt=''/>
        </div>
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
        {/* <button
          className="mt-4 ml-72 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default MediaModal;
