'use client';

import { Clock, Phone, MapPin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="leading-tight text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            {t("Contact.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("Contact.subtitle")}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-zinc-800 to-black rounded-xl group-hover:from-amber-900/20 group-hover:to-black transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-400">{t("Contact.location_title")}</div>
                    <div className="text-gray-300">{t("Contact.location_address")}</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-zinc-800 to-black rounded-xl group-hover:from-amber-900/20 group-hover:to-black transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-black" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-400">{t("Contact.phone_title")}</div>
                    <div className="text-gray-300">+421 905 123 456</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-zinc-800 to-black rounded-xl group-hover:from-amber-900/20 group-hover:to-black transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-400">{t("Contact.email_title")}</div>
                    <div className="text-gray-300">{t("Contact.email_address")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gradient-to-br from-zinc-800 to-black p-6 rounded-xl border border-amber-500/20">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center">
                <Clock className="mr-3" size={24} />
                {t("Contact.hours_title")}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-amber-500/10">
                  <span className="text-gray-300">{t("Contact.hours_weekdays")}</span>
                  <span className="text-amber-400 font-semibold">09:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-500/10">
                  <span className="text-gray-300">{t("Contact.hours_saturday")}</span>
                  <span className="text-amber-400 font-semibold">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">{t("Contact.hours_sunday")}</span>
                  <span className="text-red-400 font-semibold">{t("Contact.hours_closed")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative group">
            <a
              href="https://www.google.com/maps/search/?api=1&query=N%C3%A1mestie+SNP+12,+Bratislava"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View map in Google Maps"
            >
              <div className="bg-gradient-to-br from-zinc-800 to-black p-4 rounded-2xl shadow-2xl">
                <iframe
                  src="https://maps.google.com/maps?q=N%C3%A1mestie%20SNP%2012%2C%20Bratislava&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-96 rounded-xl group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Iron & Ink Barbershop Location"
                ></iframe>
                <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Map Overlay */}
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-amber-400 font-semibold">{t("Contact.map_title")}</div>
                    <div className="text-white text-sm">{t("Contact.map_subtitle")}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
