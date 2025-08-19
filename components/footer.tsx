"use client";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      title: "About Eleven11",
      links: [
        { name: "Origin", href: "/about#origin" },
        { name: "Timeline", href: "/about#timeline" },
        { name: "Future Plans", href: "/about#future-plans" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Core Services",
      links: [
        {
          name: "Event Planning & Management",
          href: "/services#event-planning",
        },
        { name: "Artist Management", href: "/services#artist-management" },
        { name: "Ticket Booking", href: "/services#ticket-booking" },
        { name: "Event Marketing & Promotion", href: "/services#marketing" },
        { name: "Private Events", href: "/services#private-events" },
      ],
    },
    {
      title: "Partners",
      links: [
        { name: "Collaborative Partners", href: "/partners#collaborative" },
        { name: "Ticketing Partners", href: "/partners#ticketing" },
        { name: "Sponsors", href: "/partners#sponsors" },
      ],
    },
    {
      title: "Expertise",
      links: [
        { name: "Event Management", href: "/expertise#event" },
        { name: "Artist Management", href: "/expertise#social" },
        { name: "Influencer Management", href: "/expertise#web" },
        { name: "Digital Marketing", href: "/expertise#content" },
        { name: "Content Productions", href: "/expertise#branding" },
        { name: "Promotional Campaigns", href: "/expertise#education" },
      ],
    },
    {
      title: "Connect Now",
      links: [
        { name: "Instagram", href: "/events/1974ad" },
        { name: "Facebook", href: "/events/prateek-2023" },
        { name: "Tiktok", href: "/events/prateek-2024" },
        { name: "Mail", href: "/events/grasslands" },
        { name: "Whatsapp", href: "/events/manu-chao" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-white text-sm font-semibold mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <Link href={link.href}>
                  <li className="mt-1" key={link.name}>
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Eleven11. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms of Use</Link>
            <span>|</span>
            <Link href="/sitemap">Site Map</Link>
          </div>
          <p>Nepal</p>
        </div>
      </div>
    </footer>
  );
}
