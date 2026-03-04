const SERVICES = [
  "SEO Optimization",
  "Social Media",
  "Google Ads",
  "Web Design",
  "Content Marketing",
  "Email Marketing",
];

const CONTACT = [
  "+91 9876543210",
  "info@vronixdigital.com",
  "www.vronixdigital.com",
];

export default function Footer() {
  return (
    <footer className="bg-maroon text-white px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-pink-brand flex items-center justify-center">
                <span className="text-white font-display font-black text-xl">
                  V
                </span>
              </div>
              <div>
                <div className="font-display font-black text-xl leading-none">
                  Vronix Digital
                </div>
                <div className="text-[9px] tracking-[2px] text-pink-brand/80 uppercase mt-0.5">
                  Growth Agency
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your trusted partner for digital growth. We help businesses thrive
              online with smart, data-backed marketing.
            </p>
          </div>

          <div>
            <h4 className="text-white/40 text-[10px] uppercase tracking-[3px] font-bold mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="text-white/65 text-sm hover:text-white cursor-pointer transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/40 text-[10px] uppercase tracking-[3px] font-bold mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5 mb-6">
              {CONTACT.map((c) => (
                <li key={c} className="text-white/65 text-sm">
                  {c}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-pink-brand text-white text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-white/40 text-xs">
            © 2026 Vronix Digital. All rights reserved.
          </span>
          <span className="text-white/40 text-xs">
            Made with ❤️ for in business
          </span>
        </div>
      </div>
    </footer>
  );
}
