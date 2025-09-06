import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";

const events = [
  {
    slug: "neon-nights",
    date: "MAR 15, 2024",
    title: "NEON NIGHTS",
    location: "The Warehouse, LA",
    status: "SOLD OUT",
    description:
      "An immersive electronic experience featuring cutting-edge visuals and world-class DJs.",
    image: "/neon-electronic-music-event.png",
    ticketLink: "https://esewa.com.np/#/event/neon-nights",
  },
  {
    slug: "gastronomy",
    date: "NOV 9, 2025",
    title: "US-NEPAL GASTRONOMY 2025",
    location: "Aloft Hotel, Thamel",
    status: "TICKETS AVAILABLE",
    description:
      "Intimate acoustic performances under the stars with emerging and established artists.",
    image: "/rooftop-acoustic-concert.png",
    ticketLink: "https://esewa.com.np/#/event/acoustic-souls",
  },
  // ...rest of events
];

export default function EventDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) return notFound();

  return (
    <>
      <main className="bg-background min-h-screen">
        <Navigation />
        {/* Background (copied from EventsPage) */}
        <div className="fixed inset-0 z-0">
          <div className="bg-black" />{" "}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-24 right-24 w-72 h-72 bg-primary/12 rounded-full blur-3xl" />
            <div className="absolute bottom-24 left-24 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        <div
          className="max-w-6xl mx-auto         pt-24
"
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-white font-serif text-5xl font-bold">
              {event.title}
            </h1>
            <p className="text-white/70 mt-2">
              {event.date} • {event.location}
            </p>
          </div>

          {/* Image */}
          <div className="mb-8">
            <img
              src={event.image}
              alt={event.title}
              className="w-full rounded-lg"
            />
          </div>

          {/* Description */}
          <p className="text-white/80 mb-6">{event.description}</p>

          {/* Ticket Button */}
          <Link
            href="https://esewa.com.np/#/home"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Buy Tickets via eSewa
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
