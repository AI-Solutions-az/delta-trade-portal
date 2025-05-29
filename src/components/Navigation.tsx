
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Building2 className="h-8 w-8 text-[#ff002a]" />
              <span className="ml-2 text-xl font-bold text-gray-900">Delta Trade</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a href="#news" className="text-gray-600 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors">News</a>
              <a href="#contact" className="text-gray-600 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-[#ff002a] hover:bg-[#cc0022] text-white">
              Start Trading
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
