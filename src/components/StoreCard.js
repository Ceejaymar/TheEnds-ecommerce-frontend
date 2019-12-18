import React from 'react';
import { Link } from 'react-router-dom';

const StoreCard = ({ storeInfo }) => {
  const { id, name, images: { card } } = storeInfo;

  return (
    <Link to={`/store/${id}`} className="Store-card">
      <div className="Store-card__content">
        <img className="Store-card__img" src={card} alt="store" />
      </div>
      <h2 className="Store-card__name">{name}</h2>
    </Link>
  );
};

export default StoreCard;
