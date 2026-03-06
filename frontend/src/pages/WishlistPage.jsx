import React from 'react';

const WishlistPage = ({ wishlist, onAction, theme }) => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ color: theme.primary, marginBottom: '30px' }}>My Wishlist</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
        {wishlist.length === 0 ? (
          <p>Your wishlist is currently empty.</p>
        ) : (
          wishlist.map(product => (
            <div key={product.id} style={{ 
              background: 'white', padding: '20px', borderRadius: '15px',
              // Requirement 1: Individual border for each product
              border: `1px solid ${theme.light}`,
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
            }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' }} />
              <h4 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{product.name}</h4>
              <p style={{ color: theme.primary, fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>₹{product.offer.toLocaleString()}</p>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => onAction('cart', product)}
                  style={{ flex: 2, padding: '12px', background: theme.primary, color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
                >Add to Bag</button>
                <button 
                  onClick={() => onAction('wishlist', product)}
                  style={{ flex: 1, padding: '12px', border: `1.5px solid ${theme.primary}44`, background: 'white', color: theme.primary, borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                >Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishlistPage;