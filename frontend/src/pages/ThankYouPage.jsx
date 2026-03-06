import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = ({ theme }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Requirement 6: Redirect to products after 4 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ 
      padding: '100px 20px', 
      textAlign: 'center', 
      background: theme.light, 
      minHeight: '100vh' 
    }}>
      <div style={{ 
        background: 'white', 
        padding: '50px', 
        borderRadius: '20px', 
        display: 'inline-block',
        boxShadow: `0 10px 30px ${theme.primary}22` 
      }}>
        <h1 style={{ color: theme.primary, fontSize: '40px' }}>🎉 Thank You!</h1>
        <p style={{ fontSize: '18px', color: theme.dark }}>
          Your order has been placed successfully.
        </p>
        <p style={{ color: '#666' }}>Redirecting you back to shop more lavender goodness...</p>
        <div style={{ marginTop: '20px', fontSize: '50px' }}>💜🛍️</div>
      </div>
    </div>
  );
};

export default ThankYouPage;