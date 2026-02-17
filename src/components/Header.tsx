import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Главная" },
    { href: "#services", label: "Услуги" },
    { href: "#map", label: "Карта" },
    { href: "#about", label: "О нас" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-fun flex items-center justify-center">
            <Icon name="ShieldCheck" size={22} className="text-white" />
          </div>
          <span className="font-rubik font-bold text-xl text-foreground">
            Маф<span className="text-primary">строй</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          className="hidden md:flex bg-gradient-fun hover:opacity-90 text-white rounded-full px-6"
          onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
        >
          Оставить заявку
        </Button>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 animate-fade-in">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full bg-gradient-fun text-white rounded-full"
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Оставить заявку
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;