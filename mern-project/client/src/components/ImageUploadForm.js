// client/src/components/ImageUploadForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', title);
      formData.append('description', description);

      const response = await axios.post('http://localhost:5001/api/upload-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error('Image upload error:', error.message);
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="button" onClick={handleImageUpload}>
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploadForm;

