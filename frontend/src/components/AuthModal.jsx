import React from 'react';

const AuthModal = ({ onClose, setUser, theme }) => {
  const handleJoin = () => {
    setUser({ name: "Minnu", email: "minnu@example.com", joined: "2024-03-05" });
    onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3000 }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '15px', width: '350px', textAlign: 'center', border: `2px solid ${theme.primary}` }}>
        <h2 style={{ color: theme.primary }}>Login / Signup</h2>
        <p style={{ color: '#666' }}>Please login to continue shopping</p>
        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Password" type="password" style={inputStyle} />
        <button onClick={handleJoin} style={{ width: '100%', background: theme.primary, color: 'white', padding: '12px', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
          JOIN NOW
        </button>
        <p onClick={onClose} style={{ marginTop: '15px', cursor: 'pointer', fontSize: '12px', color: theme.primary }}>Cancel</p>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd', boxSizing: 'border-box' };

export default AuthModal;