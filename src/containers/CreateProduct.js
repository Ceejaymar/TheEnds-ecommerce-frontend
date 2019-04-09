import React, { Component } from 'react';

import firebase from '../firebase';
import './createProduct.css';

class CreateProduct extends Component {
  state = {
    name: '',
    price: 0,
    category: '',
    description: '',
    url: '',
    stock: ''
  }

  handleFileInput = async (e) => {
    const uploadedImage = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`/productImages/ + ${uploadedImage.name}`); 

    try {
      const snapshot = await imageRef.put(uploadedImage);
      const url = await snapshot.ref.getDownloadURL();

      this.setState({ url });
    }
    catch(err) {
      console.log(err);
    }
  }

  handleChange = (e) => {
    console.dir(e.target);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log('the state', this.state);

    return (
      <div className="create-product">
        <label>Upload Image</label>
        <input type='file' accept='image/*' onChange={this.handleFileInput} />
        <hr/>
        <label>Product Name</label>
        <input 
          type='text' 
          name='name' 
          placeholder='Enter Product name' 
          onChange={this.handleChange}   
        />
        <hr/>
        <label>Product Price</label>
        <input 
          type='number' 
          min='0.00' 
          step='0.50' 
          max='3000' 
          name='price' 
          placeholder='price'
          onChange={this.handleChange} 
        />
        <hr/>
        <label>Category</label>
        <select name="category" onChange={this.handleChange}>
          <option value="" selected disabled hidden>Choose here</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="Accessories">Accessories</option>
        </select>
        <hr/>
        <label>Description</label>
        <textarea 
          name="description" 
          cols="30" 
          rows="10" 
          placeholder="Write product description here"
          onChange={this.handleChange}
        ></textarea>
        <hr/>
        <label>Stock</label>
        <p>Does your product have sizes?</p>
        {/* <label className="switch">
          <input type='checkbox' />
          <span className="slider round"></span>
        </label>
        <input type='number' placeholder="stock amount" /> */}
      </div>
    );
  }
}

export default CreateProduct;