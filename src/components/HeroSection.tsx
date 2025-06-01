
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff002a' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#ff002a] text-white mb-4">Партнер биржи СПбМТСБ</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Ваш надежный партнер в 
                  <span className="text-[#ff002a]"> торговле нефтепродуктами</span>
                </h1>
                <p className="text-xl text-gray-300 mt-6 max-w-lg">
                  Уверенно ориентируйтесь на сложных рынках нефтепродуктов. Профессиональные торговые услуги, подкрепленные 15-летним опытом на Санкт-Петербургской бирже.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#ff002a] hover:bg-[#cc0022] text-white px-8 py-3 font-medium"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Начать торговлю сегодня
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Delta Trade</h3>
                  <p className="text-gray-300">Профессиональная торговля нефтепродуктами</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <span className="text-white">✓ Партнер СПбМТСБ</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-white">✓ 15+ лет опыта</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-white">✓ Надежные решения</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </section>
      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </>
  );
};
