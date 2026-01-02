import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  if (!formData) {
    navigate('/');
    return null;
  }

  return (
    <div className="success-container">
      <h1>Registration Successful!</h1>
      <div className="success-message">
        <p>Thank you for registering. Here are your details:</p>
      </div>

      <div className="details-card">
        <h2>Personal Information</h2>
        <div className="details-grid">
          <div className="detail-item">
            <strong>First Name:</strong> {formData.firstName}
          </div>
          <div className="detail-item">
            <strong>Last Name:</strong> {formData.lastName}
          </div>
          <div className="detail-item">
            <strong>Username:</strong> {formData.username}
          </div>
          <div className="detail-item">
            <strong>Email:</strong> {formData.email}
          </div>
          <div className="detail-item">
            <strong>Phone:</strong> {formData.countryCode} {formData.phone}
          </div>
          <div className="detail-item">
            <strong>Country:</strong> {formData.country}
          </div>
          <div className="detail-item">
            <strong>City:</strong> {formData.city}
          </div>
          <div className="detail-item">
            <strong>PAN:</strong> {formData.pan.toUpperCase()}
          </div>
          <div className="detail-item">
            <strong>Aadhaar:</strong> {formData.aadhaar}
          </div>
        </div>
      </div>

      <button
        className="back-btn"
        onClick={() => navigate('/')}
      >
        Register Another Person
      </button>
    </div>
  );
};

export default Success;
