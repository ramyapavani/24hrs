import React from 'react';

const AccountPage = ({ user, orders, theme }) => {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '900px', margin: '0 auto', minHeight: '80vh' }}>
      <h2 style={{ color: theme.primary, borderBottom: `2px solid ${theme.light}`, paddingBottom: '10px' }}>
        My Account Details
      </h2>
      
      {/* User Info Section */}
      <div style={{ background: 'white', padding: '30px', borderRadius: '15px', marginTop: '20px', border: `1px solid ${theme.light}` }}>
        <h3 style={{ color: theme.dark, margin: '0 0 15px 0' }}>Profile Information</h3>
        <p><strong>Name:</strong> {user?.name || "Guest User"}</p>
        <p><strong>Email:</strong> {user?.email || "No email provided"}</p>
        <p><strong>Member Since:</strong> March 2026</p>
      </div>

      {/* Requirement 4: History of Orders */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ color: theme.primary }}>Order History</h3>
        {orders.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', background: theme.light, borderRadius: '10px' }}>
            <p>You haven't placed any orders yet. Time to shop! 🛍️</p>
          </div>
        ) : (
          orders.map((order) => (
            <div key={order.id} style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '10px', 
              marginBottom: '15px', 
              borderLeft: `5px solid ${theme.primary}`,
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <span>Order ID: #{order.id}</span>
                <span style={{ color: theme.primary }}>₹{order.total}</span>
              </div>
              <p style={{ fontSize: '12px', color: '#666' }}>Placed on: {order.date}</p>
              <div style={{ marginTop: '10px' }}>
                {order.items.map(item => (
                  <span key={item.cartId} style={{ fontSize: '13px', background: theme.light, padding: '2px 8px', borderRadius: '4px', marginRight: '5px' }}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AccountPage;