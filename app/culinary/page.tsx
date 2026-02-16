"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

/* =======================
   Types
======================= */

type CulinaryEventKey = "us-nepal" | "pakistan-food";

type CulinaryEvent = {
  title: string;
  description: string;
  images: string[];
};

/* =======================
   Component
======================= */

export default function Portfolio() {
  const [activeEvent, setActiveEvent] = useState<CulinaryEventKey>("us-nepal");

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const culinaryEvents: Record<CulinaryEventKey, CulinaryEvent> = {
    "us-nepal": {
      title: "US–Nepal Gastronomy 2025",
      description:
        "A landmark culinary exchange bringing together renowned chefs from the United States and Nepal. The event celebrated cross-cultural gastronomy, modern techniques, and heritage flavors through curated dining experiences, chef collaborations, and masterclasses.",
      images: [
        "/gg.jpg",
        "/cc.jpg",
        "/dd.jpg",
        "/ee.jpg",
        "/ii.jpg",
        "/aa.jpg",
        "/hh.jpg",
        "/jj.jpg",
        "/ff.jpg",
        "/kk.jpg",
        "/mm.jpg",
        "/oo.jpg",
        "/pp.jpg",
        "/qq.jpg",
        "/ss.jpg",
        "/uu.jpg",
      ],
    },

    "pakistan-food": {
      title: "Pakistan Food Festival 2026",
      description:
        "A vibrant celebration of Pakistan’s rich culinary heritage featuring regional cuisines, live cooking stations, cultural performances, and diplomatic engagement—using food as a bridge between nations.",
      images: [
        "/g.jpg",
        "/b.jpg",
        "/c.jpg",
        "/d.jpg",
        "/h.jpg",
        "/f.jpg",
        "/a.jpg",
        "/j.jpg",
        "/o.jpg",
        "/e.jpg",
        "/k.jpg",
        "/l.jpg",
        "/m.jpg",
        "/n.jpg",
        "/i.jpg",
        "/q.jpg",
      ],
    },
  };

  return (
    <>
      <main className="bg-background min-h-screen">
        <Navigation />

        {/* Background */}
        <div className="fixed inset-0 z-0">
          <div className="bg-black" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-16 left-16 w-64 h-64 bg-primary/12 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-green-500/8 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-20">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white text-sm tracking-wide">
                  CULINARY
                </span>
              </div>

              <h1 className="text-white font-serif text-5xl md:text-7xl font-bold mb-8">
                ELEVEN11
                <br />
                <span className="text-primary">CULINARY</span>
              </h1>

              <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                Over the past year, Eleven11 has been deeply invested in
                culinary-driven experiences—most notably US–Nepal Gastronomy
                2025 and Pakistan Food Festival 2026.
              </p>
            </div>

            {/* Culinary Events */}
            <div className="mt-24">
              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-14">
                <button
                  onClick={() => setActiveEvent("us-nepal")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                    activeEvent === "us-nepal"
                      ? "bg-primary text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  US–Nepal Gastronomy 2025
                </button>

                <button
                  onClick={() => setActiveEvent("pakistan-food")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                    activeEvent === "pakistan-food"
                      ? "bg-primary text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Pakistan Food Festival 2026
                </button>
              </div>

              {/* Event Info */}
              <div className="mb-16 text-center">
                <h2 className="text-white font-serif text-4xl mb-4">
                  {culinaryEvents[activeEvent].title}
                </h2>
                <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
                  {culinaryEvents[activeEvent].description}
                </p>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-24">
                {culinaryEvents[activeEvent].images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setLightboxImage(img)}
                    className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur focus:outline-none"
                  >
                    <img
                      src={img}
                      alt={`${culinaryEvents[activeEvent].title} ${index + 1}`}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-light"
            onClick={() => setLightboxImage(null)}
          >
            ✕
          </button>

          <img
            src={lightboxImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
