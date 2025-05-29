
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [currentPrice] = useState({
    gasoline: 645.50,
    oil: 89.32,
    gas: 2.47
  });

  return (
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
              <Button size="lg" className="bg-[#ff002a] hover:bg-[#cc0022] text-white px-8 py-3">
                Начать торговлю сегодня
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold mb-4 text-white">Актуальные цены</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Бензин А-95</span>
                <div className="text-right">
                  <span className="text-white font-semibold">${currentPrice.gasoline}</span>
                  <span className="text-green-400 text-sm ml-2">+2.1%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Сырая нефть</span>
                <div className="text-right">
                  <span className="text-white font-semibold">${currentPrice.oil}</span>
                  <span className="text-green-400 text-sm ml-2">+1.8%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Природный газ</span>
                <div className="text-right">
                  <span className="text-white font-semibold">${currentPrice.gas}</span>
                  <span className="text-red-400 text-sm ml-2">-0.5%</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" className="w-full mt-4 text-white hover:bg-white/20">
              Перейти к торговой платформе
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};
