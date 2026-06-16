import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  { id: 1, name: 'Essential Cotton Tee', price: '$29.00', category: 'Basics', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Slim Fit Denim', price: '$89.00', category: 'Bottoms', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Knitted Wool Sweater', price: '$120.00', category: 'Outerwear', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Canvas Tote Bag', price: '$45.00', category: 'Accessories', image: 'https://images.unsplash.com/photo-1544816153-12ad5d714481?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Leather Chelsea Boots', price: '$165.00', category: 'Footwear', image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Classic Trench Coat', price: '$195.00', category: 'Outerwear', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400' },
  { id: 7, name: 'Silk Patterned Scarf', price: '$55.00', category: 'Accessories', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=400' },
  { id: 8, name: 'Relaxed Chino Pants', price: '$75.00', category: 'Bottoms', image: 'https://images.unsplash.com/photo-1473966968600-fa804b86d30b?auto=format&fit=crop&q=80&w=400' },
];

const ProductSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-gray-500">Shop our most popular items of the season.</p>
          </div>
          <a href="/shop" className="text-black font-semibold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
            View All Products
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">{product.price}</span>
                  <button className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
