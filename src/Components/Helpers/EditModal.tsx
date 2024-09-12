import React, { useState, useEffect } from 'react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post | null;
  onSave: (updatedPost: Post) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, post, onSave }) => {
  const [editedPost, setEditedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (post) {
      setEditedPost(post);
    }
  }, [post]);

  if (!isOpen || !editedPost) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedPost((prevPost) => prevPost ? { ...prevPost, [name]: value } : null);
  };

  const handleSave = () => {
    if (editedPost) {
      onSave(editedPost);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="postTitle"
            value={editedPost.postTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={editedPost.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">URL</label>
          <input
            type="text"
            name="URL"
            value={editedPost.url}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
