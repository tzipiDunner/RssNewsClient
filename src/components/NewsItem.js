import React from 'react';
import NewsDetails from './NewsDetails';
import '../css/NewsItem.css';


const NewsItem = ({ item }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  const handleItemClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <button onClick={handleItemClick}>
      <h3>{item.title}</h3>
      {showDetails && <NewsDetails item={item} />}
    </button>
  );
};

export default NewsItem;
