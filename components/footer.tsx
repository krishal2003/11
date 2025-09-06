"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type React from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      alert("Thank you for signing up!");
      setEmail("");
    }
  };

  const footerLinks = [
    {
      title: "About Eleven11",
      links: [
        { name: "Origin", href: "/about" },
        { name: "Timeline", href: "/portfolio" },
        { name: "Future Plans", href: "/upcoming" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Core Services",
      links: [
        {
          name: "Event Planning & Management",
          href: "",
        },
        { name: "Artist Management", href: "#" },
        { name: "Ticket Booking", href: "#" },
        { name: "Event Marketing & Promotion", href: "#" },
        { name: "Private Events", href: "#" },
      ],
    },
    {
      title: "Partners",
      links: [
        { name: "Collaborative Partners", href: "#" },
        { name: "Ticketing Partners", href: "#" },
        { name: "Sponsors", href: "#" },
      ],
    },
    {
      title: "Expertise",
      links: [
        { name: "Event Management", href: "#" },
        { name: "Artist Management", href: "#" },
        { name: "Influencer Management", href: "#" },
        { name: "Digital Marketing", href: "#" },
        { name: "Content Productions", href: "#" },
        { name: "Promotional Campaigns", href: "#" },
      ],
    },
    {
      title: "Connect Now",
      links: [
        { name: "Instagram", href: "https://www.instagram.com/eleven11np/" },
        { name: "Facebook", href: "https://www.facebook.com/Eleven11np/" },
        { name: "Tiktok", href: "https://www.tiktok.com/eleven11np" },
        { name: "Mail", href: "info@eleven11np.com" },
        { name: "Whatsapp", href: "+977 9840030835" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Newsletter section */}
      <div className="border-t border-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          {/* Logo + Newsletter */}
          <div className="flex-1 max-w-md">
            <h3 className="text-4xl font-bold mb-6">Eleven11</h3>
            <p className="text-gray-300 mb-4">Sign up for event updates*</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-black border-b border-white pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary z-10"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 font-medium hover:bg-gray-200 z-10"
              >
                SUBMIT →
              </button>
            </form>

            <Link
              href="/newsletters"
              className="text-gray-300 underline text-sm hover:text-white"
            >
              See all newsletters
            </Link>
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap gap-12 flex-1">
            {footerLinks.map((section) => (
              <div key={section.title} className="min-w-[140px]">
                <h4 className="text-gray-400 text-sm font-medium mb-6">
                  {section.title.toUpperCase()}
                </h4>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-white hover:text-gray-300"
                      target="_blank"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social + legal */}
      <div className="border-t border-gray-800 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            © {new Date().getFullYear()} Eleven11. All rights reserved.
          </div>

          <p className="text-xs text-gray-400">
            <Link href="https://krishal.vercel.app/" target="_blank">
              Made by Krishal Basnet
            </Link>
          </p>

          <div className="flex gap-4 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <span>|</span>
            <a
              href="https://share.google/Sg7IjhZuxHnUXttC3"
              target="_blank"
              className="hover:text-white"
            >
              Location
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
