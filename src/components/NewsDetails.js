import React from 'react';
import '../css/NewsDetails.css';

const NewsDetails = ({ selectedTopic }) => {
  let postToDisplay = selectedTopic;

  if (!postToDisplay || !postToDisplay.title || !postToDisplay.description || !postToDisplay.link) {
    return <div>No posts available</div>;
  }

  return (
    <div id="newsDetails">
      <div id="postTitle">
        <h2>{selectedTopic.title}</h2>
      </div>
      <div id="newsItem">
        <p dangerouslySetInnerHTML={{ __html: postToDisplay.description }} />
      </div>
      <div id="link">
        <a href={postToDisplay.link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsDetails;
