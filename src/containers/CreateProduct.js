import React, { Component } from 'react';

import firebase from '../firebase';

class CreateProduct extends Component {
  handleFileInput = async (e) => {
    const uploadedImage = e.target.files[0];
    const storageRef = firebase.storage().ref();

    const imageRef = storageRef.child(uploadedImage.name); 

    try {
      const snapshot = await imageRef.put(uploadedImage);
      const url = await snapshot.ref.getDownloadURL();

      console.log(url);
    }
    catch(err) {
      console.log(err);
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <label>Upload Image</label>
        <input type='file' accept='image/*' onChange={this.handleFileInput} />
        <hr/>
        <label>Product Name</label>
        <input type='text' name='name' />
        <hr/>
        <label>Product Price</label>
        <input 
          type='number' 
          min='0.00' 
          step='0.50' 
          max='3000' 
          name='price' 
          onChange={this.handleChange} 
          placeholder='price'
        />
        <hr/>
        <label>Category</label>
        <select name="category" id="">
          <option value="">Tops</option>
          <option value="">Bottoms</option>
          <option value="">Accessories</option>
        </select>
        <hr/>
        <label>Description</label>
        <textarea name="" id="" cols="30" rows="10" placeholder="Write product description here"></textarea>
        <hr/>
        <label>Stock</label>
        <p>Does your product have sizes?</p>
        <label className="switch">
          <input type='checkbox' />
          <span className="slider round"></span>
        </label>
        <input type='number' placeholder="stock amount" />
      </div>
    );
  }
}

export default CreateProduct;