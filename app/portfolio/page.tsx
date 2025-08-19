"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Portfolio() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const featuredArtists = [
    {
      name: "1974 AD",
      genre: "Rock",
      description:
        "Nepal’s legendary rock band, celebrated for their 30-year legacy and iconic performances worldwide.",
      status: "ROCK YATRA 2",
      upcoming: "Rock Yatra 2 – Apr 5, 2025",
      image: "/1974.jpg",
      link: "https://open.spotify.com/artist/1bhmp8nhm8Bddn9OKiptAT?si=DOttb3-tRPiJj67-MWIyTA",
    },
    {
      name: "Prateek Kuhad",
      genre: "International Artist",
      description:
        "One of India’s most acclaimed singer-songwriters, known for his soulful, heart-touching music.",
      status: "SILHOUETTES TOUR",
      upcoming: "Silhouettes Tour – Oct 26, 2024",
      image: "/prateek.jpeg",
      link: "https://open.spotify.com/artist/1bhmp8nhm8Bddn9OKiptAT?si=DOttb3-tRPiJj67-MWIyTA",
    },
    {
      name: "Bipul Chettri",
      genre: "Folk Fusion",
      description:
        "Beloved Nepali singer-songwriter blending folk roots with modern storytelling.",
      status: "ARTIST MANAGEMENT",
      upcoming: "Special Showcase – TBA",
      image: "/bipul.jpeg",
      link: "https://open.spotify.com/artist/1bhmp8nhm8Bddn9OKiptAT?si=DOttb3-tRPiJj67-MWIyTA",
    },
    {
      name: "Manu Chao",
      genre: "International Artist",
      description:
        "Internationally renowned artist blending Latin, reggae, ska, and global sounds into powerful live experiences.",
      status: "ULTRA ACOUSTIC",
      upcoming: "Ultra Acusticò – Mar 16, 2025",
      image: "/manu.jpg",
      link: "https://open.spotify.com/artist/1bhmp8nhm8Bddn9OKiptAT?si=DOttb3-tRPiJj67-MWIyTA",
    },
    {
      name: "Albatross",
      genre: "Alternative Rock",
      description:
        "One of Nepal’s most influential rock bands, known for their powerful live performances.",
      status: "ARTIST MANAGEMENT",
      upcoming: "National Tour – TBA",
      image: "/albra.jpg",
      link: "https://open.spotify.com/artist/1bhmp8nhm8Bddn9OKiptAT?si=DOttb3-tRPiJj67-MWIyTA",
    },
    {
      name: "Ritviz",
      genre: "International Artist",
      description:
        "Genre-bending producer and singer redefining India’s electronic music scene with infectious beats.",
      status: "LIVE IN NEPAL",
      upcoming: "Ritviz Live in Nepal – Sep 17, 2022",
      image: "/ritvitz.png",
      link: "https://open.spotify.com/artist/1bhmp8nhm8Bddn9OKiptAT?si=DOttb3-tRPiJj67-MWIyTA",
    },
  ];

  const genres = [
    "All",
    "International Artist",
    "Rock",
    "Indie Pop",
    "World Music",
    "Electronic / Indie",
    "Folk Fusion",
    "Alternative Rock",
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
                    className={`px-4 py-2 rounded-full text-sm font-sans transition-colors duration-300 ${
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
                            <button className="bg-primary hover:bg-primary/80 text-black font-sans font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                              View Profile
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
        </div>
      </main>
      <Footer />
    </>
  );
}
