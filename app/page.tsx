import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";

export default function HomePage() {
  return (
    <main className="relative bg-background h-screen overflow-hidden md:overflow-hidden sm:overflow-auto">
      <div className="absolute inset-0 z-0">
        <video
          src="/web.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
      </div>
    </main>
  );
}
