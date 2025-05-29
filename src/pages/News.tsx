
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, TrendingUp, Globe, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Цены на нефть достигли нового максимума за квартал",
      summary: "Стоимость барреля Brent превысила отметку в $95, что связано с сокращением добычи в ОПЕК+ и растущим спросом.",
      date: "2024-05-25",
      category: "Нефть",
      readTime: "3 мин",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "SPbMTSB запускает новые торговые инструменты",
      summary: "Санкт-Петербургская биржа представила обновленную линейку деривативов на нефтепродукты.",
      date: "2024-05-24",
      category: "Биржа",
      readTime: "5 мин",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Аналитика рынка бензина: прогноз на лето",
      summary: "Эксперты ожидают рост цен на бензин А-95 в преддверии летнего сезона повышенного спроса.",
      date: "2024-05-23",
      category: "Бензин",
      readTime: "4 мин",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Природный газ: новые возможности для трейдеров",
      summary: "Открытие дополнительных торговых сессий расширяет возможности для операций с природным газом.",
      date: "2024-05-22",
      category: "Газ",
      readTime: "6 мин",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Недельный обзор рынка нефтепродуктов",
      summary: "Комплексный анализ движения цен на основные нефтепродукты за прошедшую неделю.",
      date: "2024-05-21",
      category: "Аналитика",
      readTime: "8 мин",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Delta Trade расширяет линейку услуг",
      summary: "Компания запускает новые торговые стратегии и инструменты управления рисками.",
      date: "2024-05-20",
      category: "Компания",
      readTime: "3 мин",
      image: "/placeholder.svg"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Нефть":
        return <BarChart3 className="h-4 w-4" />;
      case "Биржа":
        return <Globe className="h-4 w-4" />;
      case "Бензин":
      case "Газ":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Нефть":
        return "bg-blue-100 text-blue-800";
      case "Биржа":
        return "bg-green-100 text-green-800";
      case "Бензин":
        return "bg-yellow-100 text-yellow-800";
      case "Газ":
        return "bg-purple-100 text-purple-800";
      case "Аналитика":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Вернуться на главную
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Новости торговли
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Последние новости и аналитика рынков нефтепродуктов, обновления SPbMTSB и инсайты от экспертов Delta Trade.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${getCategoryColor(article.category)} flex items-center gap-1`}>
                    {getCategoryIcon(article.category)}
                    {article.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2 hover:text-[#ff002a] transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {article.summary}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('ru-RU')}
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#ff002a] hover:text-[#cc0022]">
                    Читать далее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-[#ff002a] text-[#ff002a] hover:bg-[#ff002a] hover:text-white">
            Загрузить больше новостей
          </Button>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Подписка на новости
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Получайте последние новости рынка и аналитику прямо на вашу почту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff002a] focus:border-transparent"
            />
            <Button className="bg-[#ff002a] hover:bg-[#cc0022] text-white px-8">
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
