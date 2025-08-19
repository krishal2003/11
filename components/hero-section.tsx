export default function HeroSection() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Content Overlay */}
        <div className="relative z-10 text-white px-6 sm:px-8 max-w-7xl mx-auto">
          {/* Top Right Text - hide on small, show on md+ */}
          <div className="hidden md:block absolute top-20 right-8 text-right">
            <p className="text-sm font-sans tracking-wider leading-relaxed">
              OFFICIAL WEBSITE,
              <br />& PORTFOLIO SHOWCASE
            </p>
          </div>

          {/* Mobile Top Text (show only on mobile) */}
          <div className="block md:hidden text-left mb-6">
            <p className="text-xs font-sans tracking-wider leading-snug">
              OFFICIAL WEBSITE, & PORTFOLIO SHOWCASE
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-start justify-center h-full">
            {/* Event Label */}
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-3 py-1 border border-white/50 text-xs font-sans tracking-widest">
                20+ Concerts{" "}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-tight leading-none mb-6 sm:mb-8">
              ELEVEN11
              <br />
              EXPERIENCE
            </h1>

            {/* Credit */}
            <div className="mb-10 sm:mb-12">
              <span className="inline-block px-3 py-1 border border-white/50 text-xs font-sans tracking-widest">
                150,000+ Attendees{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
