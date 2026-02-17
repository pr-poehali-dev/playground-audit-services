import Icon from "@/components/ui/icon";

const features = [
  { icon: "GraduationCap", text: "Сертифицированные эксперты с опытом от 5 лет" },
  { icon: "FileCheck", text: "Проверка по ГОСТ Р 52169-2012 и EN 1176" },
  { icon: "Clock", text: "Полный отчёт за 3 рабочих дня" },
  { icon: "HandShake", text: "Работаем с ТСЖ, УК, школами и муниципалитетами" },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Heart" size={16} />
              О нас
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Мы заботимся о{" "}
              <span className="text-gradient">безопасности</span> ваших детей
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Команда «ПлощадкаПро» — это профессиональные инженеры и эксперты по безопасности, 
              которые проверили более 1200 детских площадок по всей России. Мы используем 
              современное оборудование и следуем международным стандартам.
            </p>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={feature.icon} size={20} className="text-primary" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-fun rounded-3xl p-6 text-white space-y-2">
                <div className="text-4xl font-extrabold">1200+</div>
                <div className="text-sm opacity-90">площадок проверено</div>
              </div>
              <div className="bg-[hsl(var(--accent))]/10 rounded-3xl p-6 space-y-2">
                <div className="text-4xl font-extrabold text-[hsl(var(--accent))]">50+</div>
                <div className="text-sm text-muted-foreground">городов России</div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-[hsl(var(--orange))]/10 rounded-3xl p-6 space-y-2">
                <div className="text-4xl font-extrabold text-[hsl(var(--orange))]">15</div>
                <div className="text-sm text-muted-foreground">экспертов в команде</div>
              </div>
              <div className="bg-gradient-warm rounded-3xl p-6 text-white space-y-2">
                <div className="text-4xl font-extrabold">98%</div>
                <div className="text-sm opacity-90">рекомендуют нас</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
