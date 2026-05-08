import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ForgotPassward.css';


const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Simulate checking if email exists
        if (email.includes('@')) {
            setMessage('Verification code sent to ' + email);
            setStep(2);
        } else {
            alert('Please enter a valid email address');
        }
    };

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 3) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        if (enteredOtp.length === 4) {
            setMessage('OTP Verified! You can now reset your password.');
            setStep(3);
        } else {
            alert('Please enter the 4-digit code');
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        alert('Password reset successful!');
        navigate('/');
    };

    return (
        <div className="forgot-password-container glass-card">
            {step === 1 && (
                <>
                    <h1>Forgot Password</h1>
                    <p>Enter your email address and we'll send you a code to reset your password.</p>
                    <form onSubmit={handleEmailSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Send Code</button>
                    </form>
                </>
            )}

            {step === 2 && (
                <>
                    <h1>Verify OTP</h1>
                    <p className="success-message">{message}</p>
                    <p>Please enter the 4-digit code sent to your email.</p>
                    <form onSubmit={handleVerifyOtp}>
                        <div className="otp-inputs">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    className="otp-input"
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    required
                                />
                            ))}
                        </div>
                        <button type="submit">Verify Code</button>
                    </form>
                </>
            )}

            {step === 3 && (
                <>
                    <h1>Reset Password</h1>
                    <p>Enter your new password below.</p>
                    <form onSubmit={handleResetPassword}>
                        <input type="password" placeholder="New Password" required />
                        <input type="password" placeholder="Confirm New Password" required />
                        <button type="submit">Update Password</button>
                    </form>
                </>
            )}

            <Link to="/" className="back-to-login">Back to Login</Link>
        </div>
    );
};

export default ForgotPassword;
