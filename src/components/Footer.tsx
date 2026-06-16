import React from 'react';
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">YOLO Fashion</h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Trend-setting designs for the modern individual. Quality, comfort, and style in every piece.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black transition-colors"><Globe className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors"><Share2 className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sale</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Fashion Ave, NY 10001</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 000-0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@yolofashion.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
          <p>© 2026 YOLO Fashion Factory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
