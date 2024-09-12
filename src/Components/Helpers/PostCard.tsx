import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

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
  margin-left: 20px;

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

const PostMedia = styled.div`
  width: 230px;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

interface PostCardProps {
  postTitle: string;
  createdDate: string;
  description: string;
  firstName: string;
  url: string;
  urlType: string;
  onMediaClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({
  postTitle,
  createdDate,
  description,
  firstName,
  url,
  urlType,
  onMediaClick,
}) => {
  const renderMedia = () => {
    switch (urlType) {
      case "image":
        return <img src={url} alt={postTitle} className="object-cover w-full h-auto" onClick={onMediaClick} />;
      case "video":
        return (
          <ReactPlayer
            url={url}
            className="object-cover w-full h-full"
            width="100%"
            height="100%"
            controls
            onClick={onMediaClick}
          />
        );
      case "audio":
        return (
          <audio controls className="w-full" onClick={onMediaClick}>
            <source src={url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <PostMedia onClick={onMediaClick}>
        {renderMedia()}
      </PostMedia>
      <PostInfo>
        <h3>{postTitle}</h3>
        <p className="author">By {firstName}</p>
        <p className="description">{description}</p>
        <p className="date">{new Date(createdDate).toDateString()}</p>
      </PostInfo>
    </Card>
  );
};

export default PostCard;
