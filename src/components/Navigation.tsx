
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export const Navigation = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/lovable-uploads/4b81a545-253b-42a5-8529-be28ef4b1b06.png" alt="Delta Trade" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gray-900">Delta Trade</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors">Главная</a>
                <button 
                  onClick={scrollToAbout}
                  className="text-gray-600 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors"
                >
                  О нас
                </button>
                <a href="#services" className="text-gray-600 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors">Услуги</a>
                <a href="#contact" className="text-gray-600 hover:text-[#ff002a] px-3 py-2 text-sm font-medium transition-colors">Контакты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-[#ff002a] hover:bg-[#cc0022] text-white font-medium"
                onClick={() => setIsContactModalOpen(true)}
              >
                Начать торговлю
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </>
  );
};
