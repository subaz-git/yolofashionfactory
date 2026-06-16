import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <a className="flex items-center space-x-2" href="/">
            <span className="inline-block font-bold text-xl">YOLO Fashion</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground" href="/">Home</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/shop">Shop</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/collections">Collections</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/about">About</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1.5">
            <Search className="h-4 w-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-transparent border-none focus:outline-none text-sm ml-2 w-40"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">2</span>
          </button>
          <button className="p-2 md:hidden hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
