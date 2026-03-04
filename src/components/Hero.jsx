const STATS = [
  { number: "15+", label: "Websites Successfully Delivered" },
  { number: "25+", label: "Business Development & Growth Projects" },
  { number: "%", label: "Digital Expansion" },
  { number: "99%", label: "Strategy + Creativity " },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white flex flex-col items-center justify-center pt-28 pb-20 px-6"
    >
      <div className="max-w-5xl w-full mx-auto text-center">
        <div className="animate-fade-up">
          <span className="inline-block bg-pink-light text-pink-brand border border-pink-brand/20 text-xs font-bold tracking-[2.5px] uppercase px-5 py-2 rounded-full">
            🌸 Women's Day Special Offer
          </span>
        </div>

        <h1 className="animate-fade-up-1 font-display font-black text-gray-900 leading-tight mt-6 text-4xl md:text-6xl lg:text-7xl">
          Grow Your Business
          <br />
          <span className="text-pink-brand">3× Faster</span> With Digital
          <br />
          <span className="text-maroon">Marketing That Works</span>
        </h1>

        <p className="animate-fade-up-2 text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-5">
          Empowering Indian Female Entrepreneurs & Women-Led Startups to build powerful brands from scratch and scale globally.
        </p>

        <div className="animate-fade-up-3 flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="#contact"
            className="animate-pulse-pink bg-linear-to-r from-pink-brand to-maroon text-white font-bold text-base px-10 py-4 rounded-full shadow-pink hover:opacity-90 transition-opacity"
          >
            🚀 Start Growing Now
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20know%20about%20the%20Women%27s%20Day%20special%20offer."
            target="_blank"
            rel="noreferrer"
            className="bg-white text-maroon border-2 border-maroon font-bold text-base px-10 py-4 rounded-full hover:bg-pink-light transition-colors"
          >
            💬 WhatsApp Us
          </a>
        </div>

        <div className="animate-float mt-14 rounded-3xl overflow-hidden shadow-heavy border border-pink-brand/20 max-w-4xl mx-auto">
          <img
            src="/banner.jpeg"
            alt="Women's Day Special Offer — Free Website on Master Dhamaka Pack"
            className="w-full object-cover block"
          />
        </div>

        <div className="animate-fade-up-4 flex flex-wrap justify-center gap-10 md:gap-16 mt-14 pt-10 border-t border-pink-light">
          {STATS.map(({ number, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-black text-pink-brand text-4xl md:text-5xl">
                {number}
              </div>
              <div className="text-gray-500 text-sm font-medium tracking-wide mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
