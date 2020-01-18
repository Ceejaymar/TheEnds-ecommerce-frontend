import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StoreCard = ({ storeInfo }) => {
  const { id, name, images: { card } } = storeInfo;

  return (
    <Link to={`/store/${id}`} className="Store-card">
      <img className="Store-card__img" src={card} alt="store" />
      {/* <h2 className="Store-card__name">{name}</h2> */}
    </Link>
  );
};

StoreCard.propTypes = {
  storeInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.shape({
      card: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default StoreCard;
