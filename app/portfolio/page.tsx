"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Portfolio() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const featuredArtists = [
    {
      name: "ROCK YATRA 2: 1974 AD ",
      genre: "Events",
      description:
        "Nepal’s legendary rock band, celebrated for their 30-year legacy and iconic performances worldwide.",
      status: "ROCK YATRA 2",
      upcoming: "Rock Yatra 2 – Apr 5, 2025",
      image: "/1974.jpg",
      link: "https://www.instagram.com/p/DI6IE0ISOor/",
    },
    {
      name: "Prateek Kuhad",
      genre: "International Artist",
      description:
        "Acclaimed Indian singer-songwriter, known for his heartfelt lyrics and intimate performances across the globe.",
      status: "SILHOUETTES TOUR",
      upcoming: "Silhouettes Tour – Oct 26, 2024",
      image: "/prateek.jpeg",
      link: "https://www.instagram.com/p/C-FpHWbyHdT/",
    },
    {
      name: "Bipul Chettri",
      genre: "Artist Management",
      description:
        "Beloved Nepali singer-songwriter, blending Himalayan folk traditions with contemporary storytelling.",
      status: "Artist Management",
      upcoming: "Special Showcase – TBA",
      image: "/bipul.jpeg",
      link: "https://www.instagram.com/p/BzSKDM3ly4k/",
    },
    {
      name: "Manu Chao",
      genre: "International Artist",
      description:
        "Globally celebrated musician, fusing Latin, reggae, and ska into high-energy, multicultural live shows.",
      status: "ULTRA ACOUSTIC",
      upcoming: "Ultra Acusticò – Mar 16, 2025",
      image: "/manu.jpg",
      link: "https://www.instagram.com/p/DGF8jXXy1dg/",
    },
    {
      name: "Albatross",
      genre: "Band",
      description:
        "One of Nepal’s most influential rock bands, praised for their powerful stage presence and loyal fan base.",
      status: "Band",
      upcoming: "National Tour – TBA",
      image: "/albra.jpg",
      link: "https://www.instagram.com/p/B3AFPVPBR4E/",
    },
    {
      name: "Ritviz",
      genre: "International Artist",
      description:
        "Indian electronic producer and vocalist, famous for his infectious beats and unique blend of folk and EDM.",
      status: "LIVE IN NEPAL",
      upcoming: "Ritviz Live in Nepal – Sep 17, 2022",
      image: "/ritvitz.png",
      link: "https://www.instagram.com/p/ChwSDffsZJY/",
    },
    {
      name: "Nepal Inked Tattoo Festival",
      genre: "Others",
      description:
        "Nepal’s largest celebration of tattoo culture, bringing together global artists, music, and alternative art.",
      status: "Tattoo Festival",
      upcoming: "Annual Edition – TBA",
      image: "/inked.png",
      link: "https://www.instagram.com/p/CzBtq_Lv1IQ/",
    },
    {
      name: "Wim Hof Method in Nepal",
      genre: "Others",
      description:
        "World-renowned ‘Iceman,’ leading workshops on breathwork, resilience, and the Wim Hof Method in Nepal.",
      status: "Wim Hof Method in Nepal",
      upcoming: "Workshop – TBA",
      image: "/wim.jpg",
      link: "https://www.instagram.com/p/CeaoiVyo01F/",
    },
    {
      name: "Divine",
      genre: "International Artist",
      description:
        "Trailblazing Indian rapper, credited with pioneering desi hip-hop and inspiring millions through his music.",
      status: "LIVE IN NEPAL",
      upcoming: "Divine Live in Nepal – TBA",
      image: "/divine.png",
      link: "https://www.instagram.com/p/BxEHYykgdud/",
    },
    {
      name: "Himalayan Outdoor Festival",
      genre: "Others",
      description:
        "Nepal’s premier outdoor lifestyle festival, uniting music, adventure sports, and community in the Himalayas.",
      status: "Outdoor Festival",
      upcoming: "Next Edition – TBA",
      image: "/himalayan.png",
      link: "https://www.instagram.com/p/B7xj4qhBHiq/",
    },
    {
      name: "PAJI",
      genre: "International Artist",
      description:
        "German live-act and producer, combining electronic beats with violin to create a truly unique soundscape.",
      status: "LIVE IN NEPAL",
      upcoming: "PAJI Live in Nepal – TBA",
      image: "/paji.png",
      link: "https://www.instagram.com/p/BsK6z2ElIRp/",
    },
    {
      name: "Jojo Mayer",
      genre: "International Artist",
      description:
        "Swiss-born drumming virtuoso, pushing the boundaries of jazz, electronic, and live improvisation.",
      status: "LIVE IN NEPAL",
      upcoming: "Jojo Mayer Live in Nepal – TBA",
      image: "/jojo.jpg",
      link: "https://www.instagram.com/p/B2GU-wzB3-W/",
    },
    {
      name: "Mero Remit",
      genre: "Branding",
      description:
        "Mero Remit is a digital money transfer service operating in Nepal, facilitating the sending and receiving of funds both domestically and internationally.",
      status: "LIVE IN NEPAL",
      upcoming: "Jojo Mayer Live in Nepal – TBA",
      image: "/remit.png",
      link: "https://www.facebook.com/photo/?fbid=10150921641803108&set=pb.100067892504198.-2207520000",
    },
    {
      name: "Dance 4 Life",
      genre: "Social Work",
      description:
        "Swiss-born drumming virtuoso, pushing the boundaries of jazz, electronic, and live improvisation.",
      status: "LIVE IN NEPAL",
      upcoming: "Jojo Mayer Live in Nepal – TBA",
      image: "/dace.jpg",
      link: "https://www.facebook.com/photo/?fbid=10150213283373108&set=pb.100067892504198.-2207520000",
    },
    {
      name: "Sold",
      genre: "Movies",
      description:
        "A girl risks everything for freedom after being trafficked from her mountain village in Nepal to a brothel in India.",
      status: "LIVE IN NEPAL",
      upcoming: "Jojo Mayer Live in Nepal – TBA",
      image: "/sold.jpg",
      link: "https://www.imdb.com/title/tt1411956/",
    },
    {
      name: "Acharya",
      genre: "Movies",
      description:
        "Legendary Nepali singer who rose from poverty to fame, defying fate until illness silenced his voice, leaving his musical legacy to his sons.",
      status: "LIVE IN NEPAL",
      upcoming: "Jojo Mayer Live in Nepal – TBA",
      image: "/acharya.jpg",
      link: "https://www.imdb.com/title/tt2055577/",
    },
    {
      name: "Attic",
      genre: "Branding",
      description:
        "Attic Restaurant in Gyaneshwor, Kathmandu, offers a cozy ambiance with indoor and outdoor seating, serving Nepali, Indian, and Asian dishes, along with live music on Fridays.",
      status: "LIVE IN NEPAL",
      upcoming: "Jojo Mayer Live in Nepal – TBA",
      image: "/attic.jpg",
      link: "https://www.facebook.com/photo/?fbid=10150921677053108&set=pb.100067892504198.-2207520000",
    },
    {
      name: "Mintz",
      genre: "Branding",
      description:
        "Swiss-born drumming virtuoso, pushing the boundaries of jazz, electronic, and live improvisation.",
      status: "LIVE IN NEPAL",
      upcoming: "Jojo Mayer Live in Nepal – TBA",
      image: "/mintz.jpg",
      link: "https://www.facebook.com/photo/?fbid=10150921681508108&set=pb.100067892504198.-2207520000",
    },
    {
      name: "Haul Apparel",
      genre: "Branding",
      description:
        "Haul Apparel is an Indian streetwear brand founded in 2015 and based in Bangalore. The label draws inspiration from subcultures such as skateboarding, surfing, music, tattoos, and street art, creating limited-edition clothing for niche lifestyle enthusiasts.",
      status: "LIVE IN NEPAL",
      upcoming: "Jojo Mayer Live in Nepal – TBA",
      image: "/haul.jpg",
      link: "https://www.facebook.com/photo/?fbid=10153356701848108&set=pb.100067892504198.-2207520000",
    },
  ];

  const genres = [
    "All",
    "Events",
    "International Artist",
    "Artist Management",
    "Others",
  ];

  const filteredArtists =
    selectedGenre === "All"
      ? featuredArtists
      : featuredArtists.filter((artist) => artist.genre === selectedGenre);

  return (
    <>
      <main className="bg-background min-h-screen">
        <Navigation />

        <div className="fixed inset-0 z-0">
          <div className="bg-black" />{" "}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-16 left-16 w-64 h-64 bg-primary/12 rounded-full blur-3xl" />
            <div className="absolute bottom-16 right-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-green-500/8 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.02)_0deg,transparent_60deg,rgba(255,255,255,0.02)_120deg,transparent_180deg)] bg-[length:80px_80px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white text-sm font-sans tracking-wide">
                  PORTFOLIO{" "}
                </span>
              </div>
              <h1 className="text-white font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
                ELEVEN11
                <br />
                <span className="text-primary">HIGHLIGHTS</span>
              </h1>
              <p className="text-white/80 font-sans text-lg leading-relaxed max-w-2xl">
                From Nepal’s biggest rock legends to international icons, Eleven
                11 works with artists who inspire, connect, and create
                unforgettable live experiences.
              </p>
            </div>

            {/* Genre Filter */}
            <div className="mb-12">
              <h2 className="text-white font-serif text-2xl font-bold mb-6">
                Filter{" "}
              </h2>
              <div className="flex flex-wrap gap-3">
                {genres.map((genre, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-4 py-2 rounded-full text-sm font-sans transition-colors duration-300 cursor-pointer ${
                      selectedGenre === genre
                        ? "bg-primary text-black"
                        : "bg-white/10 hover:bg-primary/20 text-white hover:text-primary"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Artists */}
            <div className="mb-16">
              <h2 className="text-white font-serif text-3xl font-bold mb-8">
                {selectedGenre === "All"
                  ? "Featured Artists"
                  : `${selectedGenre} Artists`}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArtists.map((artist, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-serif text-xl font-bold">
                            {artist.name}
                          </h3>
                        </div>
                        <p className="text-white/70 font-sans text-sm mb-3">
                          {artist.genre}
                        </p>
                        <p className="text-white/80 font-sans leading-relaxed mb-4 text-sm">
                          {artist.description}
                        </p>

                        <div className="flex space-x-3">
                          <Link href={artist.link} target="_blank">
                            <button className="bg-primary hover:bg-primary/80 text-black font-sans font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm cursor-pointer">
                              View More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Artist Application */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="text-white font-serif text-3xl font-bold mb-4">
                  Join Our Roster
                </h2>
                <p className="text-white/80 font-sans leading-relaxed max-w-2xl mx-auto">
                  Be part of Eleven 11 and share your talent with audiences who
                  love unforgettable performances.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Event Management */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-serif text-lg font-bold mb-2">
                    Event Management
                  </h3>
                  <p className="text-white/70 font-sans text-sm">
                    Take the stage at curated shows and festivals.
                  </p>
                </div>

                {/* Artist Management */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 15c2.28 0 4.402.51 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-serif text-lg font-bold mb-2">
                    Artist Management
                  </h3>
                  <p className="text-white/70 font-sans text-sm">
                    Guidance to grow and stay true to your vision.
                  </p>
                </div>

                {/* Digital Marketing */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v16h16V4H4zm4 8h8m-8 4h5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-serif text-lg font-bold mb-2">
                    Digital Marketing
                  </h3>
                  <p className="text-white/70 font-sans text-sm">
                    Grow your fanbase with smart online promotion.
                  </p>
                </div>
              </div>

              <Link href="/contact">
                <div className="text-center">
                  <button className="bg-primary hover:bg-primary/80 text-black font-sans font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                    Submit Application
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
