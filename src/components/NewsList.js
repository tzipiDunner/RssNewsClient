import React from 'react';
import '../css/NewsList.css';

const NewsList = ({ news, onTopicSelect }) => {
  return (
    <div id="newsList">
      <h2>Topics</h2>
      {news.map((item) => (
        <div key={item.guid} onClick={() => onTopicSelect(item)}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default NewsList;