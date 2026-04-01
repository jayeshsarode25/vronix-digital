import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

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
        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-3">
          {/* <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-brand to-maroon flex items-center justify-center">
            <span className="text-white font-display font-black text-xl">V</span>
          </div> */}
          <h1 className="text-2xl font-extrabold tracking-tight font-[Montserrat]">
            Vronix<span className="text-pink-600">Digital</span>
          </h1>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link text-sm font-medium text-gray-800 hover:text-pink-brand transition-colors duration-200"
            >
              {label}
            </a>
          ))}

          {/* Internship — special pill link */}
          <Link
            to="/internship"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-maroon border border-maroon/30 bg-pink-light px-4 py-2 rounded-full hover:bg-pink-brand hover:text-white hover:border-pink-brand transition-all duration-200"
          >
            🎓 Career
          </Link>

          {/* Get Started CTA */}
          <a
            href="https://wa.me/919876543210?text=Hi%20Vronix%20Digital!%20I%20visited%20your%20website."
            target="_blank"
            rel="noreferrer"
            className="bg-linear-to-r from-pink-brand to-maroon text-white text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Get Started →
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-pink-brand text-2xl font-bold focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {open && (
        <div className="md:hidden bg-white border-t-2 border-pink-light px-6 py-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 border-b border-pink-light text-gray-800 font-medium hover:text-pink-brand transition-colors"
            >
              {label}
            </a>
          ))}

          {/* Internship mobile link */}
          <Link
            to="/internship"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 border-b border-pink-light text-maroon font-bold hover:text-pink-brand transition-colors"
          >
            🎓 Write Career
          </Link>

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
