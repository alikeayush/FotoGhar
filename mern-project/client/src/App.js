// client/src/App.js

import React from 'react';
import RegisterForm from './components/RegisterForm';
import ImageUploadForm from './components/ImageUploadForm';
import './index.css'; // Import the CSS file

function App() {
  return (
    <div>
      <h1>MERN Project</h1>
      <RegisterForm />
      <ImageUploadForm />
    </div>
  );
}

export default App;
