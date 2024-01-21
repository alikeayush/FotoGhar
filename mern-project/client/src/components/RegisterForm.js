// RegisterForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'; // Import the CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/register', {
        username,
        password,
      });

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  return (
    <div className="container"> {/* Apply the CSS styles */}
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
