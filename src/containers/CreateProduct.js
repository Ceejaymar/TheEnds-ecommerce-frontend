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

  render() {
    return (
      <div>
        <input type='file' accept='image/*' onChange={this.handleFileInput} />
        <label>Upload Image</label>
      </div>
    );
  }
}

export default CreateProduct;