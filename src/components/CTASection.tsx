
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export const CTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-[#ff002a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Готовы начать торговать?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сотням успешных предприятий, которые доверяют Delta Trade свои потребности в торговле нефтепродуктами. Начните сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#ff002a] hover:bg-gray-100 px-8 py-3 font-medium"
              onClick={() => setIsContactModalOpen(true)}
            >
              Связаться с командой
            </Button>
          </div>
        </div>
      </section>
      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </>
  );
};
