import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import WishlistPage from './pages/WishlistPage';
import AccountPage from './pages/AccountPage';
import ThankYouPage from './pages/ThankYouPage';
import AuthModal from './components/AuthModal';
import { products } from './data/products'; 

function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);
  const [notification, setNotification] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const theme = { primary: "#6b4fa3", light: "#f3effa", dark: "#2d2438", white: "#ffffff" };

  const handleProtectedAction = (type, product) => {
    if (!user) { setShowAuth(true); return; }
    if (type === 'cart') {
      setCart([...cart, { ...product, cartId: Date.now(), qty: 1 }]);
      setNotification("Added to cart! 🛍️");
      setTimeout(() => setNotification(""), 3000);
    } else if (type === 'wishlist') {
      setWishlist(prev => prev.find(i => i.id === product.id) ? prev.filter(i => i.id !== product.id) : [...prev, product]);
    }
  };

  return (
    <div style={{ background: "#f9f7fd", minHeight: "100vh" }}>
      {notification && <div style={{ position: 'fixed', top: '20px', right: '20px', background: theme.primary, color: 'white', padding: '10px 20px', borderRadius: '5px', zIndex: 2000 }}>{notification}</div>}

      <Navbar 
        user={user} cartCount={cart.length} wishlistCount={wishlist.length} 
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
        onLoginClick={() => setShowAuth(true)} theme={theme} 
      />

      <Routes>
        <Route path="/" element={<ProductGrid products={products} searchTerm={searchTerm} category={selectedCategory} onAction={handleProtectedAction} theme={theme} />} />
        <Route path="/product/:id" element={<ProductDetails products={products} onAction={handleProtectedAction} theme={theme} />} />
        <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} onAction={handleProtectedAction} theme={theme} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} theme={theme} />} />
        <Route path="/checkout" element={<Checkout cart={cart} user={user} setOrders={setOrders} setCart={setCart} theme={theme} />} />
        <Route path="/account" element={<AccountPage user={user} orders={orders} theme={theme} />} />
        <Route path="/thankyou" element={<ThankYouPage theme={theme} />} />
      </Routes>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} setUser={setUser} theme={theme} />}
    </div>
  );
}
export default App;