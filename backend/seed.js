const mongoose = require('mongoose');
const Product = require('./models/Product');
const { products } = require('../frontend/src/data/products'); // Copy JSON
mongoose.connect(process.env.MONGO_URI);
Product.insertMany(products.map(p => ({ ...p, _id: p.id }))).then(() => process.exit());
require('dotenv').config();

const products = [
  { name: 'Pure Cotton Hoodie', price: 49.99, offer: 39.99, image: 'https://via.placeholder.com/300?text=Hoodie', desc: 'Soft fabric, casual fit', category: 'Clothing', rating: 4.5 },
  { name: 'Leather Crossbody Bag', price: 120.00, offer: 99.00, image: 'https://via.placeholder.com/300?text=Bag', desc: 'Genuine leather, perfect for daily use', category: 'Accessories', rating: 5 },
  { name: 'Denim Jacket', price: 89.99, offer: 69.99, image: 'https://via.placeholder.com/300?text=Denim', desc: 'Distressed style denim', category: 'Clothing', rating: 4 },
  { name: 'Stainless Steel Watch', price: 250.00, offer: 210.00, image: 'https://via.placeholder.com/300?text=Watch', desc: 'Quartz movement, water resistant', category: 'Watch', rating: 4.8 },
  // ... (Create 16 more products with realistic details, prices, and high ratings: 4.0-5.0)
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('20+ products inserted successfully!');
  mongoose.connection.close();
};

seedDB();