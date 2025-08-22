'use client';

import { useState } from "react";
import { Scissors, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export function Header() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: t("Navigation.home"), href: "home" },
    { label: t("Navigation.about"), href: "about" },
    { label: t("Navigation.services"), href: "services" },
    { label: t("Navigation.gallery"), href: "gallery" },
    { label: t("Navigation.legacy"), href: "legacy" },
    { label: t("Navigation.booking"), href: "booking" },
    { label: t("Navigation.contact"), href: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-amber-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
            <Scissors className="w-4 h-4 text-black" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            {t("Navigation.brand")}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="relative group text-gray-300 hover:text-amber-400 transition-all duration-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button className="text-amber-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-md border-t border-amber-500/20 transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="text-gray-300 hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
