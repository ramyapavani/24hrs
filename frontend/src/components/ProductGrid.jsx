import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ searchTerm, category, onAction, theme, products = [], wishlist = [] }) => {
  const navigate = useNavigate();

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', padding: '40px' }}>
      {filtered.map(p => {
        const isWishlisted = wishlist.find(item => item.id === p.id);
        
        return (
          <div key={p.id} style={{ 
            background: 'white', padding: '20px', borderRadius: '15px', 
            border: `1px solid ${theme.light}`, position: 'relative', textAlign: 'left',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
          }}>
            {/* FIX 2: Plain Heart Icon */}
            <button 
              onClick={() => onAction('wishlist', p)}
              style={{ 
                position: 'absolute', top: '15px', right: '15px', 
                background: 'white', border: '1px solid #ddd', 
                borderRadius: '50%', width: '35px', height: '35px',
                cursor: 'pointer', fontSize: '18px', zIndex: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isWishlisted ? theme.primary : '#333' 
              }}
            >
              {isWishlisted ? '♥' : '♡'}
            </button>

            <div onClick={() => navigate(`/product/${p.id}`)} style={{ cursor: 'pointer' }}>
              <img src={p.image} alt={p.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }} />
              <h4 style={{ margin: '15px 0 5px 0', fontSize: '18px', color: theme.dark }}>{p.name}</h4>
              <p style={{ fontSize: '13px', color: '#777', marginBottom: '10px', height: '40px', overflow: 'hidden' }}>{p.desc}</p>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: theme.primary }}>₹{p.offer.toLocaleString()}</span>
              <span style={{ fontSize: '14px', color: '#999', textDecoration: 'line-through', marginLeft: '10px' }}>₹{p.price.toLocaleString()}</span>
            </div>

            <button 
              onClick={() => onAction('cart', p)}
              style={{ width: '100%', padding: '12px', background: theme.primary, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >Add to Bag</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;