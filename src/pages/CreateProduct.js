import React, { useState } from 'react';
import axios from 'axios';

import firebase from '../firebase';
import urlLink from '../config/url';
import useInputStateHook from '../hooks/useInputStateHook';
import './createProduct.css';

const initialStock = {
  small: 0,
  medium: 0,
  large: 0,
  xlarge: 0,
  oneSize: 0,
};

function CreateProduct() {
  const [name, setName] = useInputStateHook('');
  const [price, setPrice] = useInputStateHook('');
  const [description, setDescription] = useInputStateHook('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(initialStock);
  const [url, setUrl] = useState('');
  const categories = ['tops', 'bottoms', 'swimwear', 'accessories', 'plants'];

  async function handleFileInput(e) {
    const uploadedImage = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`/productImages/ + ${uploadedImage.name}`);

    try {
      const snapshot = await imageRef.put(uploadedImage);
      const fbUrl = await snapshot.ref.getDownloadURL();

      setUrl(fbUrl);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  function handleStockChange(e) {
    const newStock = { ...stock };

    newStock[e.target.name] = Number(e.target.value);
    setStock(newStock);
  }

  async function handleProductSubmit() {
    try {
      await axios.post(`${urlLink}/product/`, {
        store_id: 1, // TODO: This needs to be the current logged in user's store id.
        name,
        price,
        category,
        description,
        url,
        stock: JSON.stringify(stock),
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  const uploadedImage = url ? <img width="200" height="100" src={url} alt="uploaded product" /> : 'no image uploaded yet';

  return (
    <div className="create-product">
      <label htmlFor="file">
        Upload Image
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={handleFileInput}
        />
      </label>
      {uploadedImage}
      <hr />
      <label htmlFor="name">
        Product Name
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Product name"
          onChange={setName}
        />
      </label>
      <hr />
      <label htmlFor="price">
        Product Price
        <input
          id="price"
          type="number"
          min="0.00"
          step="0.50"
          max="3000"
          name="price"
          placeholder="price"
          onChange={setPrice}
        />
      </label>
      <hr />
      <label htmlFor="category">
        Category
        <select
          name="category"
          defaultValue="default"
          onChange={(e) => {
            setStock(initialStock);
            setCategory(e.target.value);
          }}
        >
          <option value="default" disabled>Choose category</option>
          {categories.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
      <hr />
      <label htmlFor="desc">
        Description
        <textarea
          id="desc"
          name="description"
          cols="30"
          rows="10"
          placeholder="Write product description here"
          onChange={setDescription}
        />
      </label>
      <hr />
      { category === 'tops'
        || category === 'bottoms'
        || category === 'swimwear' ? (
          <label htmlFor="stock">
            Stock
            {Object.keys(stock).map((size) => <input id="stock" key={size} name={size} type="number" onChange={handleStockChange} placeholder={size} />)}
          </label>
        ) : (
          <label htmlFor="stock">
            Stock
            <input id="stock" name="oneSize" type="number" onChange={handleStockChange} placeholder="stock amount" />
          </label>
        )}
      <hr />
      <button type="submit" onClick={handleProductSubmit}>Add product to store</button>
    </div>
  );
}

export default CreateProduct;
