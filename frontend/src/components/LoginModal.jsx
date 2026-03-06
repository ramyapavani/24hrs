// src/components/LoginModal.jsx
import React, { useState } from 'react';

const LoginModal = ({ show, onClose, onLogin, theme }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  if (!show) return null;

  const handleAction = () => {
    if (formData.name && formData.email) {
      onLogin({ name: formData.name, email: formData.email });
      onClose();
    } else {
      alert("Please enter both Name and Email");
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 5000 }}>
      <div style={{ background: 'white', padding: '40px', width: '380px', borderRadius: '15px', border: `4px solid ${theme.primary}`, textAlign: 'center' }}>
        <h2 style={{ color: theme.dark, marginBottom: '25px', fontFamily: 'sans-serif' }}>SIGN IN</h2>
        
        <input 
          type="text" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: `1px solid ${theme.primary}`, outline: 'none' }} 
        />
        
        <input 
          type="email" 
          placeholder="Email Address" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          style={{ width: '100%', padding: '12px', marginBottom: '25px', borderRadius: '8px', border: `1px solid ${theme.primary}`, outline: 'none' }} 
        />
        
        <button 
          onClick={handleAction} 
          style={{ width: '100%', padding: '15px', background: theme.dark, color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}
        >
          LOGIN / SIGNUP
        </button>
        
        <button onClick={onClose} style={{ marginTop: '15px', background: 'none', border: 'none', color: theme.primary, cursor: 'pointer' }}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;