import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Login.css'

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className='Container glass-card'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Enter Username" required />
                <input type="password" placeholder="Enter Password" required />
                
                <div className="login-options">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>

                <button type="submit">Login</button>
            </form>

            <p>
                Don't have an account? <Link to="/register">Signup</Link>
            </p>
        </div>
    )
}

export default Login