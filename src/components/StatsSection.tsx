
export const StatsSection = () => {
  const stats = [
    { value: "15+", label: "Лет опыта" },
    { value: "500M+", label: "Объем торгов" },
    { value: "200+", label: "Активных клиентов" },
    { value: "24/7", label: "Доступ к рынку" }
  ];

  return (
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
  );
};
