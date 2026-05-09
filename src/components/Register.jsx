import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css' // Reusing Login styles for consistency

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='Container glass-card'>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  )
}

export default Register
