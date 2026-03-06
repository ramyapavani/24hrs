import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
const Home = () => (
  <div>
    <h1 className="text-3xl font-bold mb-8">Welcome to Shop</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  </div>
);
