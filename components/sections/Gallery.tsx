'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";

export function Gallery() {
  const t = useTranslations();

  const galleryImages = [
    { src: "/barber-working.jpg", alt: t("Gallery.images.img1") },
    { src: "/vintage-tools.jpg", alt: t("Gallery.images.img2") },
    { src: "/perfect-beard.jpg", alt: t("Gallery.images.img3") },
    { src: "/classic-process.jpg", alt: t("Gallery.images.img4") },
    { src: "/shop-mood.jpg", alt: t("Gallery.images.img5") },
    { src: "/razor.jpg", alt: t("Gallery.images.img6") },
    { src: "/client-satis.jpg", alt: t("Gallery.images.img7") },
    { src: "/barder-craft.jpg", alt: t("Gallery.images.img8") },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="leading-tight text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            {t("Gallery.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("Gallery.subtitle")}</p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6"></div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="break-inside-avoid group cursor-pointer" style={{ marginBottom: "1.5rem" }}>
              <div className="relative overflow-hidden rounded-xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={index % 3 === 0 ? 500 : index % 2 === 0 ? 600 : 400}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-0 opacity-100 transition-all duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <div className="text-white font-semibold">{image.alt}</div>
                  <div className="text-amber-400 text-sm">{t("Gallery.card_subtitle")}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
