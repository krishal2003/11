import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function AboutPage() {
  return (
    <>
      <main className="bg-background min-h-screen">
        <Navigation />

        {/* Video Background */}
        <div className="fixed inset-0 z-0">
          <div className="bg-black" />{" "}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white text-sm font-sans tracking-wide">
                  ABOUT US
                </span>
              </div>
              <h1 className="text-white font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
                REDEFINING
                <br />
                <span className="text-[#0397b2]">EVENTS & EXPERIENCES</span>
              </h1>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-white font-serif text-2xl font-bold mb-4">
                    Our Vision
                  </h2>
                  <p className="text-white/80 font-sans leading-relaxed">
                    To transform ordinary moments into unforgettable experiences
                    by blending creativity, music, and culture. Eleven 11
                    envisions being a pioneer in delivering world-class events
                    that inspire, entertain, and connect communities across
                    borders.
                  </p>
                </div>

                <div>
                  <h2 className="text-white font-serif text-2xl font-bold mb-4">
                    Our Mission
                  </h2>
                  <p className="text-white/80 font-sans leading-relaxed">
                    To curate and manage high-quality events that celebrate art,
                    music, and innovation. We aim to support artists, engage
                    audiences, and create lasting cultural impact through
                    strategic planning, global collaborations, and cutting-edge
                    event execution.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-white font-serif text-2xl font-bold mb-4">
                    What We Do
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-white/80 font-sans">
                        Event planning & management for concerts, festivals, and
                        corporate events
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-white/80 font-sans">
                        Artist management & talent booking for local and
                        international performers
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-white/80 font-sans">
                        Event marketing, promotion, and sponsorship
                        collaborations with global brands
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-white/80 font-sans">
                        Ticketing partnerships with leading platforms like
                        eSewa, Khalti, and more
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-white/80 font-sans">
                        Private events including weddings, parties, and bespoke
                        celebrations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-white font-serif text-xl font-bold mb-3">
                    Founded in 2009
                  </h3>
                  <p className="text-white/70 font-sans text-sm">
                    Established by Spandan Lama Moktan, Eleven 11 started with
                    local artists like Bipul Chettri and Albatross, and has
                    since grown into a global event powerhouse, bringing
                    international stars such as Prateek Kuhad, Manu Chao, and
                    Ritviz to Nepal and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
