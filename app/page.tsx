"use client";
import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import Portfolio from "./portfolio/page";

const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="relative bg-background h-screen overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
        </div>
      </main>
      <Portfolio />
    </>
  );
}
