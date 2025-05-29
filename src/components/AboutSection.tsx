
import { Award, Shield, Users, Building2, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Лидер в торговле нефтепродуктами с 2008 года
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Delta Trade - ведущая компания по торговле нефтепродуктами, специализирующаяся на бензине, газе, нефти и продуктах переработки на Санкт-Петербургской товарно-сырьевой бирже (СПбМТСБ). Наша глубокая экспертиза и стратегический подход сделали нас надежным партнером для предприятий, ищущих профессиональные решения в торговле нефтепродуктами.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Имея более 15 лет опыта, мы сочетаем передовые технологии с традиционной торговой мудростью для достижения исключительных результатов для наших клиентов в различных рыночных условиях.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-[#ff002a] mr-2" />
                <span className="text-gray-700">Сертифицирован СПбМТСБ</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-[#ff002a] mr-2" />
                <span className="text-gray-700">Полностью лицензирован</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#ff002a]/10 to-transparent rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-[#ff002a] mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Экспертная команда</h4>
                  <p className="text-gray-600">Опытные трейдеры и аналитики</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-[#ff002a] mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Доступ к рынку</h4>
                  <p className="text-gray-600">Прямой доступ к бирже СПбМТСБ</p>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-[#ff002a] mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Глобальный охват</h4>
                  <p className="text-gray-600">Международные торговые возможности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
