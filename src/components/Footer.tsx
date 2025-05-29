
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/4b81a545-253b-42a5-8529-be28ef4b1b06.png" alt="Delta Trade" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold">Delta Trade</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональные услуги торговли нефтепродуктами на Санкт-Петербургской товарно-сырьевой бирже.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Торговля нефтепродуктами</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Анализ рынка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Управление рисками</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Биржевые услуги</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Руководство</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+7 (812) 123-45-67</li>
              <li>trading@deltatrade.ru</li>
              <li>Санкт-Петербург, Россия</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Delta Trade. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
