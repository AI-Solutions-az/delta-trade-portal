
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600">
            Готовы обсудить ваши торговые потребности? Наша команда готова помочь.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-0 bg-gray-50">
            <Phone className="h-8 w-8 text-[#ff002a] mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Позвоните нам</h3>
            <p className="text-gray-600">+7 (812) 123-45-67</p>
            <p className="text-sm text-gray-500 mt-1">Пн-Пт 9:00-18:00 МСК</p>
          </Card>
          
          <Card className="text-center p-6 border-0 bg-gray-50">
            <Mail className="h-8 w-8 text-[#ff002a] mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Напишите нам</h3>
            <p className="text-gray-600">trading@deltatrade.ru</p>
            <p className="text-sm text-gray-500 mt-1">Ответ в течение 24 часов</p>
          </Card>
          
          <Card className="text-center p-6 border-0 bg-gray-50">
            <MapPin className="h-8 w-8 text-[#ff002a] mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Посетите нас</h3>
            <p className="text-gray-600">Санкт-Петербург, Россия</p>
            <p className="text-sm text-gray-500 mt-1">Бизнес-центр</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
