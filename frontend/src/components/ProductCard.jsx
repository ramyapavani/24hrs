// src/components/ProductCard.jsx
export default function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ background: '#fff', borderRadius: '15px', padding: '15px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
      <img src={product.image} alt="" style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0, fontSize: '16px' }}>{product.name}</h3>
        <span style={{ color: '#eab308' }}>⭐ {product.rating}</span>
      </div>
      <p style={{ fontSize: '13px', color: '#64748b', margin: '10px 0' }}>{product.desc}</p>
      <div style={{ marginBottom: '15px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb' }}>${product.offerPrice}</span>
        <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '14px', marginLeft: '8px' }}>${product.price}</span>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => onAddToCart(product)} style={{ flex: 1, padding: '10px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Add to Cart</button>
        <button onClick={() => onAddToCart(product)} style={{ padding: '10px', background: '#f1f5f9', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>🤍</button>
      </div>
    </div>
  );
}