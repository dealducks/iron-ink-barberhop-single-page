'use client';

import { LegacyRef } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { SprayCan, Scissors, Crown, Star, ShowerHead } from 'lucide-react';

interface ServicesProps {
  servicesRef: LegacyRef<HTMLDivElement>;
}

export function Services({ servicesRef }: ServicesProps) {
  const t = useTranslations();

  const services = [
    {
      title: t("Services.cards.classic.title"),
      description: t("Services.cards.classic.description"),
      price: "25 €",
      icon: <Scissors className="w-6 h-6 text-black" />,
      image: "/classic-cut.jpg",
    },
    {
      title: t("Services.cards.beard.title"),
      description: t("Services.cards.beard.description"),
      price: "15 €",
      icon: <SprayCan className="w-6 h-6 text-black" />,
      image: "/beard.jpg",
    },
    {
      title: t("Services.cards.royal.title"),
      description: t("Services.cards.royal.description"),
      price: "20 €",
      icon: <Crown className="w-6 h-6 text-black" />,
      image: "/shave.jpg",
    },
    {
      title: t("Services.cards.full.title"),
      description: t("Services.cards.full.description"),
      price: "35 €",
      icon: <Star className="w-6 h-6 text-black" />,
      image: "/full-exp.jpg",
    },
    {
      title: t("Services.cards.style.title"),
      description: t("Services.cards.style.description"),
      price: "10 €",
      icon: <ShowerHead className="w-6 h-6 text-black" />,
      image: "/styling.jpg",
    },
  ];

  return (
      <section id="services" className="py-20 bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width%3D%22100%22 height%3D%22100%22 viewBox%3D%220 0 100 100%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath d%3D%22M0 0h100v100H0z%22 fill%3D%22%23000%22/%3E%3Cpath d%3D%22M0 0h20v100H0zm40 0h20v100H40zm40 0h20v100H80z%22 fill%3D%22%23d97706%22 fillOpacity%3D%220.1%22/%3E%3C/svg%3E')]"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="leading-tight text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              {t("Services.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("Services.subtitle")}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6" />
          </div>

          {/* Grid Layout for Services */}
          <div
              ref={servicesRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
                <div
                    key={index}
                    className="group cursor-pointer transition-transform duration-500 hover:scale-105 hover:-rotate-1"
                >
                  <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden shadow-2xl">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={320}
                          height={192}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                          {service.title}
                        </h3>
                        <div className="text-2xl font-bold text-white bg-amber-500 px-3 py-1 rounded-full text-black">
                          {service.price}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                      <a href="#booking">
                        <Button className="w-full bg-transparent border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                          {t("Services.cta")}
                        </Button>
                      </a>
                    </div>

                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-amber-400/20 to-transparent" />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
