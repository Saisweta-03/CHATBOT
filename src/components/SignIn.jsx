import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
import {useAuth} from "../context/AuthContext"

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login} = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required!');
      return;
    }
    const payload = {
      email,
      password
    }
    try {
      const response = await axios.post("http://localhost:8001/signin",payload)
      if (response?.status === 200) {
        login({email, password})
        alert('Login Successful!');
        navigate('/');
      } else {
        alert('Invalid Email or Password');
      }
    } catch (error) {
      alert("Failed to signin")
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Sign In</button>

      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
