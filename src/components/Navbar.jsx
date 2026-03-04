import { useState } from "react";

const NAV_LINKS = ["Home", "Services", "Why Us", "Contact"];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-brand to-maroon flex items-center justify-center">
            <span className="text-white font-display font-black text-xl">
              V
            </span>
          </div>
          <div>
            <div className="font-display font-black text-lg text-gray-900 leading-none">
              Vronix
            </div>
            <div className="text-[9px] tracking-[3px] text-pink-brand uppercase font-semibold">
              Digital
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="nav-link text-sm font-medium text-gray-800 hover:text-pink-brand transition-colors duration-200"
            >
              {link}
            </a>
          ))}

          <a
            href="https://wa.me/919876543210?text=Hi%20Vronix%20Digital!%20I%20visited%20your%20website."
            target="_blank"
            rel="noreferrer"
            className="bg-linear-to-r from-pink-brand to-maroon text-white text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Get Started →
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-pink-brand text-2xl font-bold focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t-2 border-pink-light px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="block py-3 border-b border-pink-light text-gray-800 font-medium hover:text-pink-brand transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="block mt-4 text-center bg-linear-to-r from-pink-brand to-maroon text-white font-bold py-3 rounded-full"
          >
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
