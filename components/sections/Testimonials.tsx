'use client';

import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function Testimonials() {
  const t = useTranslations();

  const testimonials = [
    {
      name: t("Testimonials.clients.c1.name"),
      city: t("Testimonials.clients.c1.city"),
      quote: t("Testimonials.clients.c1.quote"),
      image: "/petra.jpg",
      rating: 5,
    },
    {
      name: t("Testimonials.clients.c2.name"),
      city: t("Testimonials.clients.c2.city"),
      quote: t("Testimonials.clients.c2.quote"),
      image: "/marek.jpg",
      rating: 5,
    },
    {
      name: t("Testimonials.clients.c3.name"),
      city: t("Testimonials.clients.c3.city"),
      quote: t("Testimonials.clients.c3.quote"),
      image: "/lucia.jpg",
      rating: 5,
    },
  ];

  return (
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background stripes */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-amber-500/10 to-transparent transform rotate-45 scale-150" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="leading-tight text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              {t("Testimonials.title")}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t("Testimonials.subtitle")}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="relative group cursor-pointer transform hover:scale-105 hover:rotate-2 transition-all duration-500"
                >
                  {/* Tape Effect — appears only on hover */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-amber-200/80 rounded-sm shadow-md rotate-3
                opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  ></div>

                  {/* Polaroid Frame */}
                  <div className="bg-white p-4 rounded-lg shadow-2xl">
                    {/* Photo */}
                    <div className="relative mb-4 overflow-hidden rounded">
                      <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Text Content */}
                    <div className="text-black space-y-2">
                      <div className="flex justify-center space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm italic text-center leading-relaxed">"{testimonial.quote}"</p>
                      <div className="text-center pt-2 border-t border-gray-200">
                        <div className="font-bold text-amber-600">{testimonial.name}</div>
                        <div className="text-xs text-gray-600">{testimonial.city}</div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
