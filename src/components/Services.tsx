import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "ClipboardCheck",
    title: "Визуальный осмотр",
    description: "Полная проверка состояния оборудования, покрытий и ограждений площадки",
    color: "hsl(var(--primary))",
    bg: "hsl(262 83% 58% / 0.1)",
    emoji: "🔍",
  },
  {
    icon: "Ruler",
    title: "Инструментальный контроль",
    description: "Измерение зазоров, высот падения, зон безопасности по ГОСТ Р 52169",
    color: "hsl(var(--orange))",
    bg: "hsl(24 95% 53% / 0.1)",
    emoji: "📏",
  },
  {
    icon: "FileText",
    title: "Экспертное заключение",
    description: "Подробный отчёт с фотофиксацией, рекомендациями и сроками устранения",
    color: "hsl(var(--sky))",
    bg: "hsl(199 89% 48% / 0.1)",
    emoji: "📋",
  },

  {
    icon: "Wrench",
    title: "Консультации по ремонту",
    description: "Рекомендации по устранению выявленных дефектов и подбору подрядчиков",
    color: "hsl(var(--secondary))",
    bg: "hsl(45 100% 60% / 0.15)",
    emoji: "🔧",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--orange))]/10 text-[hsl(var(--orange))] px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="Sparkles" size={16} />
            Наши услуги
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Комплексная проверка <span className="text-gradient">безопасности</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Мы проводим полный цикл проверки детских площадок — от визуального осмотра до выдачи сертификата
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden animate-fade-in cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: service.bg }}
                >
                  {service.emoji}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;