'use client';

import { LegacyRef } from 'react';
import Image from "next/image";
import { Clock, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface HeroProps {
  heroRef: LegacyRef<HTMLDivElement>;
  scrollY: number;
}

export function Hero({ heroRef, scrollY }: HeroProps) {
  const t = useTranslations();

  return (
    <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden z-10">
      {/* Background Video Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero-section-iron.jpg"
            alt="Cinematic Barbershop"
            fill
            className="object-cover"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            priority
          />
          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-amber-900/20 to-black/60"></div>
          {/* Film Grain Effect */}
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg viewBox%3D%220 0 256 256%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cfilter id%3D%22noiseFilter%22%3E%3CfeTurbulence type%3D%22fractalNoise%22 baseFrequency%3D%220.9%22 numOctaves%3D%224%22 stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect width%3D%22100%25%22 height%3D%22100%25%22 filter%3D%22url(%23noiseFilter)%22 opacity%3D%220.4%22/%3E%3C/svg%3E')]"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Main Headline with Gold Foil Effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl">
              {t("Hero.line1")}
            </span>
            <span className="block bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
              {t("Hero.line2")}
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-6"></div>
        </div>

        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t("Hero.subtitle")}
          <br />
          <span className="text-amber-400 font-semibold">{t("Hero.experience")}</span>
        </p>

        {/* Glowing CTA Button */}
        <a href="#booking">
          <Button className="relative group bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-bold px-12 py-6 text-xl rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-amber-500/50">
            <span className="relative z-10">{t("Hero.cta")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          </Button>
        </a>

        {/* Contact Info with Icons */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="flex items-center justify-center space-x-3 text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
              <Clock className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={24} />
              <div>
                <div className="font-semibold">{t("Hero.contactOpen")}</div>
                <div className="text-sm">{t("Hero.contactHours")}</div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex items-center justify-center space-x-3 text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
              <Phone className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={24} />
              <div>
                <div className="font-semibold">{t("Hero.contactCall")}</div>
                <div className="text-sm">+421 905 123 456</div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex items-center justify-center space-x-3 text-gray-300 group-hover:text-amber-400 transition-colors duration-300">
              <MapPin className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={24} />
              <div>
                <div className="font-semibold">{t("Hero.contactVisit")}</div>
                <div className="text-sm">{t("Hero.address")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
