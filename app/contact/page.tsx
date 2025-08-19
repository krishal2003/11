import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function ContactPage() {
  return (
    <>
      <main className="bg-background min-h-screen">
        <Navigation />

        <div className="fixed inset-0 z-0">
          <div className="bg-black" />{" "}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-32 left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-32 right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:60px_60px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white text-sm font-sans tracking-wide">
                  CONTACT US
                </span>
              </div>
              <h1 className="text-white font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
                LET'S CREATE
                <br />
                <span className="text-[#0397b2]">TOGETHER</span>
              </h1>
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <h2 className="text-white font-serif text-2xl font-bold mb-6">
                  Get In Touch
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                      <option value="">Inquiry Type</option>
                      <option value="event">Event Booking</option>
                      <option value="artist">Artist Collaboration</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your vision..."
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/80 text-black font-sans font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-white font-serif text-2xl font-bold mb-6">
                    Connect With Us
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-sans font-semibold mb-1">
                          Email
                        </h3>
                        <p className="text-white/70">eleven11np@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-sans font-semibold mb-1">
                          Phone
                        </h3>
                        <p className="text-white/70">+977 9802000922</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-sans font-semibold mb-1">
                          Location
                        </h3>
                        <p className="text-white/70">
                          Bakhundole Height, Lalitpur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-white font-serif text-xl font-bold mb-4">
                    Follow Our Journey
                  </h3>
                  <div className="flex space-x-4">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/eleven11np/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                          strokeWidth="2"
                        />
                        <circle cx="12" cy="12" r="5" strokeWidth="2" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/Eleven11np/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.325C24 .592 23.408 0 22.675 0z" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://www.youtube.com/@Eleven-xo9iq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M23.498 6.186a2.994 2.994 0 00-2.11-2.11C19.742 3.5 12 3.5 12 3.5s-7.742 0-9.388.576a2.994 2.994 0 00-2.11 2.11C.5 7.832.5 12 .5 12s0 4.168.576 5.814a2.994 2.994 0 002.11 2.11C4.258 20.5 12 20.5 12 20.5s7.742 0 9.388-.576a2.994 2.994 0 002.11-2.11c.576-1.646.576-5.814.576-5.814s0-4.168-.576-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                      </svg>
                    </a>
                  </div>
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
