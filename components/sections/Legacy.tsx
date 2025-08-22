'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";

export function Legacy() {
  const t = useTranslations();

  const milestones = [
    { year: "2015", title: t("Legacy.milestones.m1.title"), description: t("Legacy.milestones.m1.description") },
    { year: "2018", title: t("Legacy.milestones.m2.title"), description: t("Legacy.milestones.m2.description") },
    { year: "2020", title: t("Legacy.milestones.m3.title"), description: t("Legacy.milestones.m3.description") },
    { year: "2024", title: t("Legacy.milestones.m4.title"), description: t("Legacy.milestones.m4.description") },
  ];

  return (
    <section id="legacy" className="py-20 relative overflow-hidden">
      {/* Full-width Background */}
      <div className="absolute inset-0">
        <Image
          src="/bg-legacy.jpg"
          alt="Heritage Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="leading-tight text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            {t("Legacy.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("Legacy.subtitle")}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-yellow-600"></div>
            {/* Timeline Line - Visible only on mobile, aligned to left */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-yellow-600"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-16 ${
                  // On mobile: always start from left with content to the right
                  // On desktop: alternate between left and right
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } justify-start`}
              >
                {/* Timeline Dot - Desktop centered position */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-black shadow-lg z-10"></div>
                
                {/* Timeline Dot - Mobile left position */}
                <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-black shadow-lg z-10"></div>

                {/* Content */}
                <div 
                  className={`
                    md:w-5/12 w-3/4 ml-10 md:ml-0
                    ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}
                    text-left
                  `}
                >
                  <div className="bg-gradient-to-br from-zinc-900 to-black p-4 md:p-6 rounded-xl shadow-2xl border border-amber-500/20">
                    <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">{milestone.year}</div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-sm md:text-base text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
