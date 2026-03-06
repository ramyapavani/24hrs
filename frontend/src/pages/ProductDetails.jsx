import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = ({ products, onAction, theme }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div style={{ padding: '100px', textAlign: 'center', color: theme.primary }}>Finding your product...</div>;

  return (
    <div style={{ padding: '60px 20px', background: '#fcfaff', minHeight: '90vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
        
        {/* Image Visualization */}
        <div style={{ flex: 1 }}>
          <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', background: 'none', border: 'none', color: theme.primary, cursor: 'pointer', fontWeight: 'bold' }}>← BACK</button>
          <div style={{ borderRadius: '25px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(107, 79, 163, 0.1)', border: `1px solid ${theme.light}` }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>

        {/* Product Info */}
        <div style={{ flex: 1, paddingTop: '50px' }}>
          <span style={{ color: theme.primary, textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>{product.category}</span>
          <h1 style={{ fontSize: '42px', color: theme.dark, margin: '10px 0' }}>{product.name}</h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>{product.desc}</p>
          
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '36px', fontWeight: 'bold', color: theme.primary }}>₹{product.offer.toLocaleString()}</span>
            <span style={{ fontSize: '20px', color: '#aaa', textDecoration: 'line-through', marginLeft: '15px' }}>₹{product.price.toLocaleString()}</span>
            <div style={{ color: '#27ae60', fontSize: '14px', fontWeight: 'bold', marginTop: '10px' }}>You save ₹{(product.price - product.offer).toLocaleString()}</div>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <button 
              onClick={() => onAction('cart', product)}
              style={{ flex: 2, padding: '20px', background: theme.primary, color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 20px rgba(107,79,163,0.2)' }}
            >ADD TO BAG 👜</button>
            <button 
              onClick={() => onAction('wishlist', product)}
              style={{ flex: 1, padding: '20px', border: `2px solid ${theme.primary}`, background: 'white', borderRadius: '12px', color: theme.primary, fontWeight: 'bold', cursor: 'pointer' }}
            >♡ WISHLIST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;