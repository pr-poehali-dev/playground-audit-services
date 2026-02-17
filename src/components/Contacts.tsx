import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67", href: "tel:+78001234567" },
  { icon: "Mail", label: "Email", value: "info@mafstroy.ru", href: "mailto:info@mafstroy.ru" },
  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Безопасности, 1", href: "#" },
  { icon: "Clock", label: "Время работы", value: "Пн–Пт: 9:00–18:00", href: "#" },
];

const Contacts = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! ✅",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contacts" className="py-16 md:py-24 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--pink))]/10 text-[hsl(var(--pink))] px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="MessageCircle" size={16} />
            Контакты
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Свяжитесь с <span className="text-gradient">нами</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Оставьте заявку и мы перезвоним в течение 30 минут
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-3xl border-2 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="rounded-xl h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="rounded-xl h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашей площадке..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-xl min-h-[120px] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-fun hover:opacity-90 text-white rounded-xl h-12 text-base"
                >
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name={item.icon} size={22} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-semibold">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="bg-gradient-fun rounded-2xl p-6 text-white mt-6">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Zap" size={24} />
                <h3 className="font-bold text-lg">Срочная проверка</h3>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Нужно проверить площадку срочно? Выезд эксперта в течение 24 часов!
              </p>
              <a
                href="tel:+78001234567"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-2 text-sm font-medium"
              >
                <Icon name="Phone" size={16} />
                +7 (800) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;