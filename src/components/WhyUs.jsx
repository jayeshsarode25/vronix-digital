const POINTS = [
  "Claim Your Website at Just Rs.999/-",
  "98% Growth Gurrenty with Contract",
  "Book a Free Growth Consultation",
  "Start Your Growth Journey Today",
];

const STATS = [
  { icon: "🏆", label: "Proven Results", sub: "50+ Professional Websites Successfully Delivered" },
  { icon: "📊", label: "Data-First", sub: " 60+ Business Development & Growth Projects" },
  {
    icon: "🤝",
    label: "Dedicated Manager",
    sub: "Expertise in Startup Branding & Digital Expansion",
  },
  { icon: "⚡", label: "Fast Turnaround", sub: "Strategy + Creativity + Performance" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-pink-brand font-bold text-xs tracking-[3px] uppercase">
            Why Vronix Digital ?
          </span>

          <h2 className="font-display font-black text-gray-900 text-3xl md:text-5xl mt-3 leading-tight">
            We Don't Just Market —
            <br />
            <span className="text-pink-brand">We create Revenue Systems</span>
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed text-base">
            We help you create a strong digital foundation with strategy, branding, and performance-driven marketing
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-linear-to-br from-pink-brand to-maroon flex items-center justify-center text-white text-xs font-bold shrink-0">
                  ✓
                </span>
                <span className="text-gray-700 font-medium text-sm">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block mt-10 bg-linear-to-r from-pink-brand to-maroon text-white font-bold px-9 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Book Your Slot With Just One Click →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-8 text-center
                ${
                  i % 2 === 0
                    ? "bg-linear-to-br from-pink-brand to-maroon text-white"
                    : "bg-pink-light text-gray-900"
                }`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div
                className={`font-display font-bold text-lg mb-1 ${i % 2 === 0 ? "text-white" : "text-maroon"}`}
              >
                {stat.label}
              </div>
              <div
                className={`text-xs ${i % 2 === 0 ? "text-white/75" : "text-gray-500"}`}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
