import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/669d5244-de6a-4b1e-adc0-9f39bb973c3a/files/de3b6303-9537-45c4-b22b-e718e32e07e5.jpg";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Shield" size={16} />
              Безопасность детей — наш приоритет
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Проверка{" "}
              <span className="text-gradient">детских площадок</span>{" "}
              по всей стране
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Профессиональная экспертиза безопасности детских спортивных площадок. 
              Сертифицированные специалисты, полный отчёт за 3 дня.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-fun hover:opacity-90 text-white rounded-full px-8 text-base"
                onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
              >
                Заказать проверку
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base border-2"
                onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Icon name="MapPin" size={18} className="mr-2" />
                Смотреть карту
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1200+</div>
                <div className="text-sm text-muted-foreground">площадок проверено</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--orange))]">98%</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--accent))]">7 лет</div>
                <div className="text-sm text-muted-foreground">на рынке</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="Проверка детской площадки"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-bounce-soft">
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                <Icon name="CheckCircle" size={24} className="text-[hsl(var(--accent))]" />
              </div>
              <div>
                <div className="font-semibold text-sm">Площадка проверена</div>
                <div className="text-xs text-muted-foreground">ул. Парковая, д. 15</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 animate-float">
              <div className="flex items-center gap-2">
                <Icon name="Star" size={18} className="text-[hsl(var(--secondary))] fill-[hsl(var(--secondary))]" />
                <span className="font-bold">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
