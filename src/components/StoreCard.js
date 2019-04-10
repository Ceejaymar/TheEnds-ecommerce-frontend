import React from 'react';
import { Link } from 'react-router-dom';

const StoreCard = ({ storeInfo}) => {
  const { id, name, images : { card } } = storeInfo;

  return (
    <Link to={`/store/${id}`}>  
      <div style={{ "width": "50%" }}>
        <h2>{ name }</h2>
        <img style={{ "width": "50%" }} src={card} alt="store pictures"/>
      </div>
    </Link>
  );
};

export default StoreCard;