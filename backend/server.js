require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ecommerce_dashboard')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '🎉 Backend working perfectly!', 
    status: 'success',
    port: 5000 
  });
});

// Basic routes (for dashboard)
app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Test Product', price: 99 }]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('📱 Test: http://localhost:5000/api/test');
});
