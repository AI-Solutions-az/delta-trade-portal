
import { Building2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-[#ff002a]" />
              <span className="ml-2 text-xl font-bold">Delta Trade</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional petroleum trading services on Saint Petersburg Exchange Market.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Petroleum Trading</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exchange Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (812) 123-45-67</li>
              <li>trading@deltatrade.ru</li>
              <li>Saint Petersburg, Russia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Delta Trade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
