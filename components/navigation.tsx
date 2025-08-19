"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [showPopover, setShowPopover] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "EVENTS", href: "/events" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-6">
        <Link
          href="/"
          className="text-white font-serif font-bold text-xl tracking-wider hover:text-primary transition-colors duration-300 cursor-pointer"
        >
          Eleven11
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-sm font-sans tracking-wide hover:text-primary transition-colors duration-300 relative cursor-pointer"
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Click Here Button */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setShowPopover(!showPopover)}
            className="text-white text-sm font-sans tracking-wide hover:text-primary transition-all duration-300 px-4 py-2 border border-white/30 rounded hover:border-primary hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            LATEST UPDATES{" "}
          </button>

          {showPopover && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={() => setShowPopover(false)}
              />

              <div className="absolute right-0 top-full mt-2 z-50 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl animate-in slide-in-from-top-2 duration-300">
                <button
                  onClick={() => setShowPopover(false)}
                  className="absolute top-3 right-3 z-60 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer p-1 hover:bg-white/10 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <Link href="/events/gastronomy">
                  <div className="p-6 pr-12">
                    <div className="w-80 h-60 relative overflow-hidden rounded-lg group">
                      <img
                        src="/usa.png"
                        alt="eleven11 Exclusive Preview"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-serif font-bold text-lg">
                          US-NEPAL GASTRONOMY{" "}
                        </h3>
                        <p className="text-sm text-white/80">
                          Tickets are out live!{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 cursor-pointer group"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute top-full left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white text-lg font-sans tracking-wide hover:text-primary transition-colors duration-300 py-2 cursor-pointer"
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="w-8 h-px bg-primary mt-1" />
                  )}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setShowPopover(!showPopover);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white text-lg font-sans tracking-wide hover:text-primary transition-all duration-300 px-4 py-2 border border-white/30 rounded hover:border-primary cursor-pointer"
                >
                  CLICK HERE
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
