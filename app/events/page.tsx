import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

export default function EventsPage() {
  const upcomingEvents = [
    {
      slug: "gastronomy",
      date: "NOV 9, 2025",
      title: "US-NEPAL GASTRONOMY 2025",
      location: "Aloft Hotel, Thamel",
      status: "TICKETS AVAILABLE",
      description:
        "Intimate acoustic performances under the stars with emerging and established artists.",
      image: "/rooftop-acoustic-concert.png",
      price: "15000",
    },
  ];

  const pastEvents = [
    {
      slug: "winter-wonderland",
      date: "FEB 10, 2024",
      title: "WINTER WONDERLAND",
      location: "Ice Palace, Denver",
      description:
        "A magical winter experience combining music, art, and interactive installations.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      slug: "new-year-revival",
      date: "JAN 20, 2024",
      title: "NEW YEAR REVIVAL",
      location: "Grand Ballroom, Chicago",
      description:
        "Celebrating new beginnings with an unforgettable night of music and connection.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <>
      <main className="bg-background min-h-screen">
        <Navigation />

        {/* Background */}
        <div className="fixed inset-0 z-0">
          <div className="bg-black" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-24 right-24 w-72 h-72 bg-primary/12 rounded-full blur-3xl" />
            <div className="absolute bottom-24 left-24 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-24 px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Upcoming Events */}
            <div className="mb-16 ">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white text-sm font-sans tracking-wide">
                  EVENTS
                </span>
              </div>
              <h1 className="text-white font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
                UPCOMING EVENTS
              </h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <Link key={index} href={`/events/${event.slug}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 flex gap-2"></div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-white font-serif text-xl font-bold mb-2">
                          {event.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center text-white/70 font-sans mb-2 text-sm gap-2">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>

                        {/* Date */}
                        <div className="flex items-center text-white/70 font-sans mb-1 text-sm gap-2">
                          <Calendar size={16} />
                          <span>{event.date}</span>
                        </div>

                        {/* Price Badge */}
                        <div className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-3 py-1 rounded-full text-xs mb-2 mt-2 shadow-md">
                          Rs. {event.price}
                        </div>

                        {/* Description */}
                        <p className="text-white/70 font-sans leading-relaxed mb-4 text-sm">
                          {event.description}
                        </p>

                        {/* Buy Tickets Button */}
                        <button className="w-full bg-primary hover:bg-primary/80 text-black font-sans font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                          Buy Tickets
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-white/5 backdrop-blur-sm p-8 rounded-lg text-center">
              <h3 className="text-white font-serif text-2xl font-bold mb-4">
                Stay Updated
              </h3>
              <p className="text-white/80 font-sans mb-6">
                Be the first to know about our upcoming events and exclusive
                experiences.
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary hover:bg-primary/80 text-black font-sans font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
