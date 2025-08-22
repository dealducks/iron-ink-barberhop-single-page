'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23d97706%22 fillOpacity%3D%220.1%22%3E%3Cpath d%3D%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Side */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/founder-lead.jpg"
                alt="Master Barber"
                width={500}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Signature Overlay */}
              <div className="absolute bottom-6 left-6">
                <div className="text-amber-400 text-2xl font-script italic">{t("About.signatureName")}</div>
                <div className="text-gray-300 text-sm">{t("About.signatureTitle")}</div>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-400/30 rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="leading-tight text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                {t("About.title1")}
                <br />
                {t("About.title2")}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-amber-400 font-semibold">{t("About.p1_strong")}</span> {t("About.p1")}
              </p>
              <p>
                {t("About.p2")}
              </p>
              <p className="text-amber-400 font-semibold italic">
                {t("About.quote")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-amber-500/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{t("About.stat1_value")}</div>
                <div className="text-sm text-gray-400">{t("About.stat1_label")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{t("About.stat2_value")}</div>
                <div className="text-sm text-gray-400">{t("About.stat2_label")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{t("About.stat3_value")}</div>
                <div className="text-sm text-gray-400">{t("About.stat3_label")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
