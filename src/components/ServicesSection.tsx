
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Globe, Shield } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Торговля нефтепродуктами",
      description: "Спотовые сделки, форвардные контракты и деривативы на бирже СПбМТСБ"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Анализ рынка",
      description: "Ежедневные отчеты, прогнозирование цен и комплексная оценка рисков"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Биржевые услуги",
      description: "Полный доступ к торговой платформе Санкт-Петербургской биржи"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Управление рисками",
      description: "Передовые стратегии хеджирования и оптимизация портфельных рисков"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Комплексные торговые услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От спотовых сделок до сложных деривативов - мы предоставляем полный спектр услуг по торговле нефтепродуктами для удовлетворения потребностей вашего бизнеса.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff002a]/10 text-[#ff002a] rounded-lg mx-auto mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-[#ff002a] text-[#ff002a] hover:bg-[#ff002a] hover:text-white">
            Все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};
