// Signup.js

import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Signup.css"; // Import the CSS file
import {Link} from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
 const [userName,setUserName]=useState('')
 const [email,setEmail]=useState('')
 const [name,setName]=useState('')
 const [password,setPassword]=useState('')


  const [submitted, setSubmitted] = useState(false);



  const handlePost = () => {
    axios.post('http://localhost:5000/register', { userName,password,email,name})
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
         setUserName('');
         setPassword('');
         setEmail('');
         setName('');
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }
  // Redirect to another page after successful submission
  if (submitted) {
    return <Navigate to="/success" />;
  }

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e)=>setUserName(e.target.value)}
          value={userName}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          required
        />

        <Link to='/'><button type="button" onClick={handlePost}>
         sign up
         </button></Link>
      </form>
    </div>
  );
};

export default Signup;
