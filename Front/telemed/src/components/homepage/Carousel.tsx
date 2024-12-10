"use client";

import Image from "next/image";

export default function ObrasCarousel() {
  const items = [
    { id: 1, imageUrl: "/images/luispasteur.png", alt: "Obra social 1" },
    { id: 2, imageUrl: "/images/medicus2.png", alt: "Obra social 2" },
    { id: 3, imageUrl: "/images/osde.png", alt: "Obra social 3" },
    { id: 4, imageUrl: "/images/sancorsalud.png", alt: "Obra social 4" },
    { id: 5, imageUrl: "/images/ospe.jpeg", alt: "Obra social 5" },
    { id: 6, imageUrl: "/images/avalian.png", alt: "Obra social 6" },
    { id: 7, imageUrl: "/images/prevencionsalud.png", alt: "obra social 7" },
  ];

  return (
    <div className="w-full bg-[#F3F2FF] py-8 overflow-hidden">
      <div className="animate-carousel flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="inline-flex flex-none w-48 h-48 mx-4 rounded-full bg-gray-300 items-center justify-center shadow-md"
          >
            {item.imageUrl ? (
              <Image
                width={200}
                height={200}
                src={item.imageUrl}
                alt={item.alt || `Obra social ${item.id}`}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span>Sin imagen</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

