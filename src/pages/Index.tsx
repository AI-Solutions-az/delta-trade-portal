
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, BarChart3, Building2, Globe, Phone, Mail, MapPin, TrendingUp, Shield, Users, Award } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [currentPrice] = useState({
    gasoline: 645.50,
    oil: 89.32,
    gas: 2.47
  });

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Petroleum Trading",
      description: "Spot trading, forward contracts, and derivatives on SPbMTSB exchange"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Market Analysis",
      description: "Daily reports, price forecasting, and comprehensive risk assessment"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Exchange Services",
      description: "Full access to Saint Petersburg Exchange Market trading platform"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Advanced hedging strategies and portfolio risk optimization"
    }
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500M+", label: "Volume Traded" },
    { value: "200+", label: "Active Clients" },
    { value: "24/7", label: "Market Access" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ff002a" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#ff002a] text-white mb-4">SPbMTSB Exchange Partner</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Your Trusted Partner in 
                  <span className="text-[#ff002a]"> Petroleum Trading</span>
                </h1>
                <p className="text-xl text-gray-300 mt-6 max-w-lg">
                  Navigate the complex petroleum markets with confidence. Professional trading services backed by 15+ years of experience on Saint Petersburg Exchange.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#ff002a] hover:bg-[#cc0022] text-white px-8 py-3">
                  Start Trading Today
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Market Ticker */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 text-white">Live Market Prices</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Gasoline A-95</span>
                  <div className="text-right">
                    <span className="text-white font-semibold">${currentPrice.gasoline}</span>
                    <span className="text-green-400 text-sm ml-2">+2.1%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Crude Oil</span>
                  <div className="text-right">
                    <span className="text-white font-semibold">${currentPrice.oil}</span>
                    <span className="text-green-400 text-sm ml-2">+1.8%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Natural Gas</span>
                  <div className="text-right">
                    <span className="text-white font-semibold">${currentPrice.gas}</span>
                    <span className="text-red-400 text-sm ml-2">-0.5%</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4 text-white hover:bg-white/20">
                View Full Trading Platform
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#ff002a] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Leading Petroleum Trading Excellence Since 2008
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Delta Trade stands as a premier petroleum trading company, specializing in gasoline, gas, oil, and refined products on the Saint Petersburg Exchange Market (SPbMTSB). Our deep market expertise and strategic approach have made us a trusted partner for businesses seeking reliable petroleum trading solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience, we combine cutting-edge technology with traditional trading wisdom to deliver exceptional results for our clients across various market conditions.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-[#ff002a] mr-2" />
                  <span className="text-gray-700">SPbMTSB Certified</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-[#ff002a] mr-2" />
                  <span className="text-gray-700">Fully Licensed</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#ff002a]/10 to-transparent rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-[#ff002a] mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600">Experienced traders and analysts</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-[#ff002a] mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Market Access</h4>
                    <p className="text-gray-600">Direct SPbMTSB exchange access</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-8 w-8 text-[#ff002a] mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-gray-600">International trading capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Trading Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From spot trading to complex derivatives, we provide the full spectrum of petroleum trading services to meet your business needs.
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
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ff002a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust Delta Trade for their petroleum trading needs. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#ff002a] hover:bg-gray-100 px-8 py-3">
              Open Trading Account
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#ff002a] px-8 py-3">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to discuss your trading needs? Our team is here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 bg-gray-50">
              <Phone className="h-8 w-8 text-[#ff002a] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+7 (812) 123-45-67</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri 9:00-18:00 MSK</p>
            </Card>
            
            <Card className="text-center p-6 border-0 bg-gray-50">
              <Mail className="h-8 w-8 text-[#ff002a] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">trading@deltatrade.ru</p>
              <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
            </Card>
            
            <Card className="text-center p-6 border-0 bg-gray-50">
              <MapPin className="h-8 w-8 text-[#ff002a] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Saint Petersburg, Russia</p>
              <p className="text-sm text-gray-500 mt-1">Business Center</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-[#ff002a]" />
                <span className="ml-2 text-xl font-bold">Delta Trade</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional petroleum trading services on Saint Petersburg Exchange Market.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Petroleum Trading</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Risk Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Exchange Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (812) 123-45-67</li>
                <li>trading@deltatrade.ru</li>
                <li>Saint Petersburg, Russia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Delta Trade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
