'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslations } from "next-intl";

export function Booking() {
  const t = useTranslations();

  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      {/* Dark Wood Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-zinc-900"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width%3D%22100%22 height%3D%22100%22 viewBox%3D%220 0 100 100%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath d%3D%22M0 0h100v100H0z%22 fill%3D%22%23000%22/%3E%3Cpath d%3D%22M0 0h20v100H0zm40 0h20v100H40zm40 0h20v100H80z%22 fill%3D%22%23d97706%22 fillOpacity%3D%220.1%22/%3E%3C/svg%3E')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="leading-tight text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            {t("Booking.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("Booking.subtitle")}</p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Ticket-Style Form */}
          <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 p-8 rounded-2xl shadow-2xl border-4 border-amber-400">
            {/* Ticket Perforations */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-4 h-4 bg-black rounded-full"></div>

            {/* Ticket Header */}
            <div className="text-center mb-8 text-black">
              <div className="text-2xl font-bold text-amber-800">{t("Booking.ticket_header")}</div>
              <div className="text-sm text-amber-600">{t("Booking.ticket_subheader")}</div>
              <div className="w-full h-px bg-amber-400 my-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">{t("Booking.form.name_label")}</label>
                  <Input
                    placeholder={t("Booking.form.name_placeholder")}
                    className="bg-white/80 border-2 border-amber-300 text-black placeholder-amber-600 focus:border-amber-500 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">{t("Booking.form.phone_label")}</label>
                  <Input
                    placeholder={t("Booking.form.phone_placeholder")}
                    className="bg-white/80 border-2 border-amber-300 text-black placeholder-amber-600 focus:border-amber-500 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">{t("Booking.form.service_label")}</label>
                <Select>
                  <SelectTrigger className="bg-white/80 border-2 border-amber-300 text-black focus:border-amber-500 rounded-lg">
                    <SelectValue placeholder={t("Booking.form.service_placeholder")} />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-amber-300">
                    <SelectItem value="classic">{t("Services.cards.classic.title")} - 25€</SelectItem>
                    <SelectItem value="beard">{t("Services.cards.beard.title")} - 15€</SelectItem>
                    <SelectItem value="royal">{t("Services.cards.royal.title")} - 20€</SelectItem>
                    <SelectItem value="full">{t("Services.cards.full.title")} - 35€</SelectItem>
                    <SelectItem value="style">{t("Services.cards.style.title")} - 10€</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">{t("Booking.form.date_label")}</label>
                  <Input
                    type="date"
                    className="bg-white/80 border-2 border-amber-300 text-black focus:border-amber-500 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 font-semibold mb-2">{t("Booking.form.time_label")}</label>
                  <Input
                    type="time"
                    className="bg-white/80 border-2 border-amber-300 text-black focus:border-amber-500 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-800 font-semibold mb-2">{t("Booking.form.requests_label")}</label>
                <Textarea
                  placeholder={t("Booking.form.requests_placeholder")}
                  className="bg-white/80 border-2 border-amber-300 text-black placeholder-amber-600 focus:border-amber-500 rounded-lg"
                  rows={3}
                />
              </div>

              {/* Glowing Submit Button */}
              <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amver-500 hover:to-yellow-600 text-white font-bold py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50 relative overflow-hidden group">
                <span className="relative z-10">{t("Booking.form.submit_button")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </Button>
            </form>

            {/* Ticket Footer */}
            <div className="text-center mt-8 text-amber-700 text-sm">
              <div>{t("Booking.ticket_footer1")}</div>
              <div>{t("Booking.ticket_footer2")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
