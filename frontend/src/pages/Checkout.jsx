import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, user, setOrders, setCart, theme }) => {
  const navigate = useNavigate();

  // Requirement Fix 2: Changed item.offerPrice to item.offer and added quantity multiplier
  const total = cart.reduce((sum, item) => sum + (item.offer * (item.qty || 1)), 0);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    address: '',
    paymentMethod: 'Cash on Delivery'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: total,
      date: new Date().toLocaleDateString(),
      status: "Processing"
    };
    setOrders(prev => [newOrder, ...prev]);
    setCart([]); 
    navigate('/thankyou');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: `1px solid ${theme.primary}44`, // Requirement Fix 3: Highlighted border
    outlineColor: theme.primary,
    background: 'white'
  };

  return (
    <div style={{ padding: '50px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: theme.primary, borderBottom: `2px solid ${theme.light}`, paddingBottom: '10px' }}>
        Checkout Details
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginTop: '30px' }}>
        {/* Left Side: Shipping Form */}
        <form onSubmit={handleSubmit} style={{ 
          background: 'white', 
          padding: '25px', 
          borderRadius: '15px', 
          border: `1px solid ${theme.light}`, // Requirement Fix 3: Border highlighter
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ marginBottom: '20px', color: theme.dark }}>Shipping Information</h3>
          <input 
            required 
            placeholder="Full Name" 
            style={inputStyle} 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <textarea 
            required 
            placeholder="Complete Delivery Address" 
            style={{ ...inputStyle, height: '100px', fontFamily: 'inherit' }}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
          <select 
            style={inputStyle}
            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
          >
            <option>Cash on Delivery</option>
            <option>Credit Card (Lavender Pay)</option>
            <option>UPI / Net Banking</option>
          </select>
          <button 
            type="submit" 
            style={{ 
              width: '100%', 
              background: theme.primary, 
              color: 'white', 
              padding: '15px', 
              border: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            PROCEED TO PAY ₹{total.toLocaleString()}
          </button>
        </form>

        {/* Right Side: Order Summary */}
        <div style={{ 
          background: 'white', 
          padding: '20px', 
          borderRadius: '15px', 
          border: `2px solid ${theme.primary}22`, // Requirement Fix 3: Border highlighter
          alignSelf: 'start'
        }}>
          <h3 style={{ color: theme.dark, borderBottom: `1px solid ${theme.light}`, paddingBottom: '10px' }}>Order Summary</h3>
          <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '15px' }}>
            {cart.map(item => (
              <div key={item.cartId} style={{ 
                display: 'flex', 
                gap: '15px', 
                marginBottom: '15px', 
                fontSize: '14px',
                alignItems: 'center' 
              }}>
                {/* Requirement Fix 1: Corrected image property */}
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px', border: `1px solid ${theme.light}` }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '500' }}>{item.name}</div>
                  <div style={{ color: '#666' }}>Qty: {item.qty || 1}</div>
                </div>
                <span style={{ fontWeight: 'bold' }}>₹{(item.offer * (item.qty || 1)).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <hr style={{ border: 'none', borderTop: `1px solid ${theme.light}`, margin: '15px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', color: theme.primary }}>
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;