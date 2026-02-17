import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-fun flex items-center justify-center">
                <Icon name="ShieldCheck" size={22} className="text-white" />
              </div>
              <span className="font-bold text-xl">
                Площадка<span className="text-primary-foreground/70">Про</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Профессиональная проверка безопасности детских площадок с 2019 года
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40">Услуги</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Визуальный осмотр</p>
              <p>Инструментальный контроль</p>
              <p>Сертификация</p>
              <p>Ежегодный аудит</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40">Компания</h4>
            <div className="space-y-2 text-sm text-white/60">
              <a href="#about" className="block hover:text-white transition-colors">О нас</a>
              <a href="#map" className="block hover:text-white transition-colors">Карта площадок</a>
              <a href="#contacts" className="block hover:text-white transition-colors">Контакты</a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40">Контакты</h4>
            <div className="space-y-2 text-sm text-white/60">
              <a href="tel:+78001234567" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Phone" size={14} />
                +7 (800) 123-45-67
              </a>
              <a href="mailto:info@ploschadkapro.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Mail" size={14} />
                info@ploschadkapro.ru
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 ПлощадкаПро. Все права защищены.
          </p>
          <div className="flex items-center gap-1 text-sm text-white/40">
            Сделано с <Icon name="Heart" size={14} className="text-[hsl(var(--pink))] mx-1" /> для безопасности детей
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
