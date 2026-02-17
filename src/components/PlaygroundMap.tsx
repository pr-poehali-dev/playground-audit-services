import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Playground {
  id: number;
  name: string;
  address: string;
  status: "safe" | "warning" | "danger";
  date: string;
  rating: number;
  x: number;
  y: number;
}

const playgrounds: Playground[] = [
  { id: 1, name: "Площадка «Солнышко»", address: "ул. Парковая, 15", status: "safe", date: "12.01.2026", rating: 4.9, x: 25, y: 30 },
  { id: 2, name: "Площадка «Радуга»", address: "пр. Ленина, 42", status: "safe", date: "05.02.2026", rating: 4.7, x: 45, y: 20 },
  { id: 3, name: "Площадка «Звёздочка»", address: "ул. Гагарина, 8", status: "warning", date: "20.01.2026", rating: 3.5, x: 65, y: 45 },
  { id: 4, name: "Площадка «Мишутка»", address: "ул. Лесная, 23", status: "safe", date: "01.02.2026", rating: 4.8, x: 35, y: 55 },
  { id: 5, name: "Площадка «Чемпион»", address: "ул. Спортивная, 7", status: "danger", date: "15.12.2025", rating: 2.1, x: 75, y: 65 },
  { id: 6, name: "Площадка «Весёлый дворик»", address: "ул. Цветочная, 31", status: "safe", date: "28.01.2026", rating: 4.6, x: 55, y: 35 },
  { id: 7, name: "Площадка «Непоседы»", address: "пр. Мира, 56", status: "safe", date: "10.02.2026", rating: 4.5, x: 20, y: 65 },
  { id: 8, name: "Площадка «Дружба»", address: "ул. Школьная, 12", status: "warning", date: "18.01.2026", rating: 3.8, x: 80, y: 30 },
];

const statusConfig = {
  safe: { label: "Безопасна", color: "bg-[hsl(var(--accent))]", text: "text-white" },
  warning: { label: "Требует внимания", color: "bg-[hsl(var(--secondary))]", text: "text-foreground" },
  danger: { label: "Опасна", color: "bg-destructive", text: "text-white" },
};

const statusDot = {
  safe: "bg-[hsl(var(--accent))]",
  warning: "bg-[hsl(var(--secondary))]",
  danger: "bg-destructive",
};

const PlaygroundMap = () => {
  const [selected, setSelected] = useState<Playground | null>(null);
  const [filter, setFilter] = useState<"all" | "safe" | "warning" | "danger">("all");

  const filtered = filter === "all" ? playgrounds : playgrounds.filter((p) => p.status === filter);

  return (
    <section id="map" className="py-16 md:py-24 bg-gradient-to-b from-white to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--sky))]/10 text-[hsl(var(--sky))] px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="Map" size={16} />
            Интерактивная карта
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Проверенные <span className="text-gradient">площадки</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Нажмите на маркер, чтобы увидеть результаты проверки
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { key: "all", label: "Все", count: playgrounds.length },
            { key: "safe", label: "✅ Безопасные", count: playgrounds.filter((p) => p.status === "safe").length },
            { key: "warning", label: "⚠️ Требуют внимания", count: playgrounds.filter((p) => p.status === "warning").length },
            { key: "danger", label: "🚫 Опасные", count: playgrounds.filter((p) => p.status === "danger").length },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => { setFilter(f.key as typeof filter); setSelected(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.key
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white text-muted-foreground hover:bg-muted border"
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="rounded-3xl overflow-hidden border-2">
              <CardContent className="p-0">
                <div className="relative bg-[hsl(var(--sky))]/5 h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(199 89% 48% / 0.3)" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-xl px-3 py-2 text-xs text-muted-foreground flex items-center gap-2 shadow">
                    <Icon name="MapPin" size={14} className="text-primary" />
                    Москва и область
                  </div>

                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M10,20 Q30,10 50,25 T90,20 L90,80 Q70,90 50,75 T10,80 Z" fill="hsl(199 89% 48%)" />
                    <path d="M20,30 Q40,15 60,35 T85,30 L85,70 Q65,85 45,65 T20,70 Z" fill="hsl(168 76% 42%)" />
                  </svg>

                  {filtered.map((playground) => (
                    <button
                      key={playground.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group ${
                        selected?.id === playground.id ? "z-20 scale-125" : "z-10 hover:scale-110"
                      }`}
                      style={{ left: `${playground.x}%`, top: `${playground.y}%` }}
                      onClick={() => setSelected(playground)}
                    >
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-full ${statusDot[playground.status]} shadow-lg flex items-center justify-center`}>
                          <Icon name="MapPin" size={16} className="text-white" />
                        </div>
                        {selected?.id === playground.id && (
                          <div className="absolute -inset-2 rounded-full border-2 border-primary animate-ping opacity-50" />
                        )}
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white rounded-lg shadow-lg px-3 py-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {playground.name}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {selected ? (
              <Card className="rounded-2xl border-2 border-primary/20 shadow-lg animate-fade-in">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-lg">{selected.name}</h3>
                    <Badge className={`${statusConfig[selected.status].color} ${statusConfig[selected.status].text} rounded-full`}>
                      {statusConfig[selected.status].label}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="MapPin" size={14} />
                      {selected.address}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Calendar" size={14} />
                      Проверена: {selected.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={14} className="text-[hsl(var(--secondary))] fill-[hsl(var(--secondary))]" />
                      <span className="font-semibold">{selected.rating}</span>
                      <span className="text-muted-foreground">/ 5.0</span>
                    </div>
                  </div>
                  <button
                    className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                    onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Заказать повторную проверку
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </CardContent>
              </Card>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Icon name="MousePointerClick" size={32} className="mx-auto mb-3 opacity-50" />
                <p className="text-sm">Нажмите на маркер на карте</p>
              </div>
            )}

            <div className="space-y-2">
              {filtered.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selected?.id === p.id
                      ? "bg-primary/5 border-2 border-primary/20"
                      : "bg-white border-2 border-transparent hover:border-muted hover:shadow"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${statusDot[p.status]} shrink-0`} />
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{p.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{p.address}</div>
                    </div>
                    <div className="ml-auto flex items-center gap-1 shrink-0">
                      <Icon name="Star" size={12} className="text-[hsl(var(--secondary))] fill-[hsl(var(--secondary))]" />
                      <span className="text-xs font-medium">{p.rating}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundMap;
