const SERVICES = [
  {
    icon: "📈",
    title: "Advertising",
    desc: "Rank #1 on Google with data-driven SEO strategies that drive organic traffic and qualified leads to your business.",
  },
  {
    icon: "📱",
    title: "Marketing and Promotion",
    desc: "Build a powerful brand presence across Instagram, Facebook & LinkedIn with content that converts followers into customers.",
  },
  {
    icon: "🎯",
    title: "Creative Growth",
    desc: "Maximize ROI with laser-targeted Google & Meta ad campaigns. Every rupee spent is tracked, optimized, and justified.",
  },
  {
    icon: "🌐",
    title: "Web Design & Development",
    desc: "Stunning, fast, mobile-first websites that convert visitors into paying customers 24/7.",
  },
  {
    icon: "✍️",
    title: "Content Creation",
    desc: "Compelling blogs, videos & creatives that build authority and keep your audience coming back for more.",
  },
  {
    icon: "📧",
    title: "Technology",
    desc: "Automated campaigns that nurture leads, recover carts, and generate repeat business on autopilot.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-pink-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-brand font-bold text-xs tracking-[3px] uppercase">
            What We Do
          </span>
          <h2 className="font-display font-black text-gray-900 text-3xl md:text-5xl mt-3">
            Services That <span className="text-pink-brand">Drive Results</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mt-4 leading-relaxed">
            Every service is designed to grow your revenue, not just your
            metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="service-card bg-white rounded-2xl p-8 shadow-card border border-pink-brand/10 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-pink-brand/15 to-maroon/15 flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h3 className="font-display font-bold text-maroon text-xl mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-5 text-pink-brand font-bold text-sm">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
