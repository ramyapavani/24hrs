import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, setCart, theme }) => {
  const navigate = useNavigate();

  // Calculation Fix: Ensures no NaN appears
  const totalAmount = cart.reduce((acc, item) => acc + (item.offer * (item.qty || 1)), 0);

  const updateQty = (cartId, delta) => {
    setCart(cart.map(item => 
      item.cartId === cartId ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) } : item
    ));
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: theme.primary, marginBottom: '30px' }}>Shopping Bag</h2>
      
      {cart.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.cartId} style={{ 
              display: 'flex', alignItems: 'center', gap: '20px', background: 'white',
              padding: '20px', borderRadius: '15px', marginBottom: '15px',
              // Requirement 1: Border applied to EACH product item
              border: `1px solid ${theme.light}`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '10px' }} />
              
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, color: theme.dark }}>{item.name}</h4>
                <p style={{ margin: '5px 0', color: theme.primary, fontWeight: 'bold' }}>₹{item.offer.toLocaleString()}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginRight: '20px' }}>
                <button onClick={() => updateQty(item.cartId, -1)} style={qtyBtnStyle}>-</button>
                <span style={{fontWeight: 'bold'}}>{item.qty || 1}</span>
                <button onClick={() => updateQty(item.cartId, 1)} style={qtyBtnStyle}>+</button>
              </div>

              <button 
                onClick={() => setCart(cart.filter(i => i.cartId !== item.cartId))} 
                style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontWeight: 'bold' }}
              >Remove</button>
            </div>
          ))}

          {/* Requirement 2: Total and Button side-by-side */}
          <div style={{ 
            marginTop: '30px', 
            padding: '20px 30px', 
            background: 'white', 
            borderRadius: '15px', 
            border: `1px solid ${theme.light}`,
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            boxShadow: '0 4px 12px rgba(107, 79, 163, 0.1)'
          }}>
            <h3 style={{ margin: 0 }}>Total Amount: <span style={{ color: theme.primary }}>₹{totalAmount.toLocaleString()}</span></h3>
            <button 
              onClick={() => navigate('/checkout')}
              style={{ 
                padding: '15px 35px', 
                background: theme.primary, 
                color: 'white', 
                border: 'none', 
                borderRadius: '10px', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              PROCEED TO BUY NOW
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const qtyBtnStyle = { width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };

export default CartPage;