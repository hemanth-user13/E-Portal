import React from 'react';
import { PostProps } from '../Home/Categories/Posts/type';
import styled from 'styled-components';

// Styled-components for the card and its contents
const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const PostInfo = styled.div`
  flex: 1;
  margin-right: 20px;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 5px;
    font-size: 0.875rem;
  }

  .author {
    color: #6b7280; 
  }

  .description {
    color: #374151; 
    margin-top: 8px;
  }

  .date {
    color: #9ca3af; 
    margin-top: 10px;
    font-size: 0.75rem;
  }
`;

const PostImage = styled.img`
  width: 230px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const PostCard: React.FC<PostProps> = ({
  postTitle,
  createdDate,
  description,
  firstName,
  files,
}) => {
  return (
    <Card>
      {/* Left side for post info */}
      <PostInfo>
        <h3>{postTitle}</h3>
        <p className="author">By {firstName}</p>
        <p className="description">{description}</p>
        <p className="date">{new Date(createdDate).toDateString()}</p>
      </PostInfo>

      {/* Right side for image */}
      <PostImage src={files} alt={description} />
    </Card>
  );
};

export default PostCard;
