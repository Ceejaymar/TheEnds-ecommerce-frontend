import React from 'react';
import { Link } from 'react-router-dom';

const StoreCard = ({ storeInfo }) => {
  const { id, name, images: { card } } = storeInfo;
  console.log(storeInfo);

  return (
    <Link to={`/store/${id}`} style={{ width: '15%' }}>
      <div>
        <img style={{ width: '100%' }} src={card} alt="store" />
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default StoreCard;
