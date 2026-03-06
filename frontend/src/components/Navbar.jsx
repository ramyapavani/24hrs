import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, cartCount, wishlistCount, user, onLoginClick, theme }) => {
  
  const navItemStyle = {
    color: theme.primary,
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'opacity 0.2s'
  };

  return (
    <nav style={{ padding: '15px 50px', display: 'flex', alignItems: 'center', gap: '25px', background: 'white', borderBottom: `1px solid ${theme.light}`, position: 'sticky', top: 0, zIndex: 1000 }}>
      {/* Brand Logo */}
      <Link to="/" style={{ fontSize: '26px', fontWeight: 'bold', color: theme.primary, textDecoration: 'none' }}>24HRS</Link>
      
      {/* Search Bar */}
      <div style={{ flex: 1, display: 'flex', border: `2px solid ${theme.primary}`, borderRadius: '25px', overflow: 'hidden' }}>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          style={{ padding: '0 15px', border: 'none', background: theme.light, color: theme.primary, fontWeight: 'bold', outline: 'none' }}
        >
          {["All", "Electronics", "Clothing", "Accessories", "Home", "Beauty"].map(cat => <option key={cat}>{cat}</option>)}
        </select>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search products..." 
          style={{ flex: 1, padding: '12px 20px', border: 'none', outline: 'none' }} 
        />
      </div>

      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        
        {/* Wishlist: Plain Heart */}
        <Link to="/wishlist" style={navItemStyle}>
          <span style={{ fontSize: '22px' }}>{wishlistCount > 0 ? '♥' : '♡'}</span>
        </Link>
        
        {/* Requirement: Lavender Layout Bag Icon */}
        <Link to="/cart" style={navItemStyle}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {/* Custom Lavender Bag Vector Shape */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && (
              <span style={{ 
                position: 'absolute', top: '-5px', right: '-8px', background: theme.primary, 
                color: 'white', fontSize: '10px', width: '16px', height: '16px', 
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                {cartCount}
              </span>
            )}
          </div>
        </Link>

        {/* Requirement: Login / Signup Text */}
        <div onClick={user ? null : onLoginClick} style={navItemStyle}>
          {user ? (
            <Link to="/account" style={{ ...navItemStyle, fontWeight: 'bold' }}>
              {user.name.split(' ')[0]}
            </Link>
          ) : (
            <span style={{ color: theme.primary, fontSize: '14px', fontWeight: '600' }}>
               Login / Signup
            </span>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;