const UPI_ID = "vronix@upi";
const INTERNSHIP_FEE = "999";
const WHATSAPP_NUMBER = "919822452413";
const BUSINESS_NAME = "Vronix Digital";
const DURATION = "3 Months";
const SEATS = "20";

const UPI_LINK = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${INTERNSHIP_FEE}&cu=INR&tn=${encodeURIComponent("Digital Marketing Internship Fee")}`;

const SKILLS = [
  {
    icon: "📈",
    title: "Social Media Strategy",
    desc: "Learn how to plan and grow brands using proven social media marketing strategies.",
  },
  {
    icon: "📱",
    title: "Content Creation",
    desc: "Create engaging and viral content for Instagram, Facebook, and LinkedIn.",
  },
  {
    icon: "🎯",
    title: "SEO",
    desc: "Master on-page, off-page, and technical SEO to rank websites higher on Google.",
  },
  {
    icon: "🎨",
    title: "Ad Campaigns",
    desc: "Learn to run and optimize ads on Google, YouTube, and social media platforms.",
  },
  {
    icon: "📧",
    title: "Real Client Projects",
    desc: "Work on real business projects and understand how marketing works in the real world.",
  },
  {
    icon: "📊",
    title: "Hands-on training",
    desc: "Analyze campaign data using tools like Google Analytics and Meta Insights.",
  },
];

const BENEFITS = [
  {
    icon: "🏆",
    title: "Internship Certificate",
    desc: "Receive a professional certificate to strengthen your resume and LinkedIn profile.",
  },
  {
    icon: "💼",
    title: "Live Client Projects",
    desc: "Gain practical experience by working on real client marketing campaigns.",
  },
  {
    icon: "🤝",
    title: "1-on-1 Mentorship",
    desc: "Get personal guidance and feedback from experienced marketing professionals.",
  },
  {
    icon: "🔗",
    title: "Hands-on training",
    desc: "Learn by doing through practical assignments and real marketing tools.",
  },
  {
    icon: "🚀",
    title: "Real projects experience",
    desc: "Build real-world experience that prepares you for jobs and freelancing.",
  },
  {
    icon: "📁",
    title: "Portfolio Building",
    desc: "Create a professional portfolio showcasing your marketing projects.",
  },
];

const FAQS = [
  {
    q: "Is this internship online or offline?",
    a: "Fully online — join from anywhere in India. Live sessions + recordings provided.",
  },
  {
    q: "Do I need prior experience?",
    a: "No experience needed. This is designed for beginners and college students.",
  },
  {
    q: "What happens after I pay?",
    a: "You will receive a WhatsApp message from our team within 24 hours with your joining details.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes! After completing the internship you receive a digital certificate from Vronix Digital.",
  },
  {
    q: "Is the fee refundable?",
    a: "The fee is non-refundable once onboarding begins. Contact us before paying if you have concerns.",
  },
];

import { useState } from "react";
import { Link } from "react-router-dom";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-white rounded-2xl p-6 cursor-pointer border border-pink-light hover:border-pink-brand transition-colors duration-200"
    >
      <div className="flex justify-between items-center gap-4">
        <span className="font-semibold text-gray-900 text-sm md:text-base">
          {q}
        </span>
        <span className="text-pink-brand text-xl font-bold shrink-0">
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <p className="mt-3 text-gray-500 text-sm leading-relaxed border-t border-pink-light pt-3">
          {a}
        </p>
      )}
    </div>
  );
}

export default function Internship() {
  const handlePayNow = () => {
    window.location.href = UPI_LINK;

    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20enroll%20in%20the%20Digital%20Marketing%20Internship.%20Please%20share%20payment%20details.`,
        "_blank",
      );
    }, 1500);
  };

  return (
    <div className="font-body bg-white min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold tracking-tight font-[Montserrat]">
              Vronix<span className="text-pink-600">Digital</span>
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-pink-brand transition-colors font-medium"
            >
              ← Back to Home
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20have%20a%20question%20about%20the%20internship.`}
              target="_blank"
              rel="noreferrer"
              className="bg-linear-to-r from-pink-brand to-maroon text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              💬 Ask Us
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-16 px-6 bg-linear-to-b from-pink-light to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 bg-white text-pink-brand border border-pink-brand/25 text-xs font-bold tracking-[2px] uppercase px-5 py-2 rounded-full shadow-card">
              🎓 Now Enrolling — Limited Seats
            </span>
          </div>

          <h1 className="animate-fade-up-1 font-display font-black text-gray-900 text-4xl md:text-6xl leading-tight mt-6">
            Launch Your Career in
            <br />
            <span className="text-pink-brand">Digital Marketing</span>
          </h1>

          <p className="animate-fade-up-2 text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-5">
            A hands-on{" "}
            <strong className="text-maroon">{DURATION} internship</strong> where
            you work on real campaigns, build a portfolio, and get certified.
          </p>

          <div className="animate-fade-up-3 flex flex-wrap justify-center gap-3 mt-8">
            {[
              { icon: "⏳", text: `${DURATION} Duration` },
              { icon: "💻", text: "Ofline" },
              { icon: "🎓", text: "Certificate Included" },
              { icon: "💼", text: "Live Projects" },
            ].map(({ icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 bg-white border border-pink-brand/20 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                {icon} {text}
              </span>
            ))}
          </div>

          <div className="animate-fade-up-4 mt-10">
            <button
              onClick={handlePayNow}
              className="animate-pulse-pink inline-flex items-center gap-3 bg-linear-to-r from-pink-brand to-maroon text-white font-bold text-lg px-12 py-5 rounded-full shadow-pink hover:opacity-90 transition-opacity"
            >
              🚀 Enroll Now — ₹{INTERNSHIP_FEE} Only
            </button>
            <p className="text-gray-400 text-xs mt-3">
              Pay via UPI · GPay · PhonePe · Paytm · Any UPI App
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-pink-brand font-bold text-xs tracking-[3px] uppercase">
              Curriculum
            </span>
            <h2 className="font-display font-black text-gray-900 text-3xl md:text-4xl mt-3">
              What You'll <span className="text-pink-brand">Learn</span>
            </h2>
            <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
              Industry-relevant skills taught by working professionals — not
              just slides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((skill, i) => (
              <div
                key={i}
                className="service-card bg-white rounded-2xl p-7 border border-pink-light shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-brand/15 to-maroon/15 flex items-center justify-center text-2xl mb-5">
                  {skill.icon}
                </div>
                <h3 className="font-display font-bold text-maroon text-lg mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-pink-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-pink-brand font-bold text-xs tracking-[3px] uppercase">
              Benefits
            </span>
            <h2 className="font-display font-black text-gray-900 text-3xl md:text-4xl mt-3">
              What You <span className="text-pink-brand">Get</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 text-center ${i % 3 === 1 ? "bg-linear-to-br from-pink-brand to-maroon text-white" : "bg-white shadow-card"}`}
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3
                  className={`font-display font-bold text-lg mb-2 ${i % 3 === 1 ? "text-white" : "text-maroon"}`}
                >
                  {b.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${i % 3 === 1 ? "text-white/80" : "text-gray-500"}`}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <span className="text-pink-brand font-bold text-xs tracking-[3px] uppercase">
              Pricing
            </span>
            <h2 className="font-display font-black text-gray-900 text-3xl md:text-4xl mt-3">
              Simple, <span className="text-pink-brand">One-Time Fee</span>
            </h2>
          </div>

          <div className="bg-linear-to-br from-maroon to-pink-brand rounded-3xl p-10 text-white text-center shadow-heavy relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <div className="text-white/70 text-sm font-medium tracking-widest uppercase mb-2">
                Digital Marketing Internship
              </div>
              <div className="font-display font-black text-7xl mb-1">
                ₹{INTERNSHIP_FEE}
              </div>
              <div className="text-white/70 text-sm mb-8">
                One-time payment · {DURATION} access
              </div>

              <ul className="text-left space-y-3 mb-10">
                {[
                  "3 Months of live training",
                  "Certificate of completion",
                  "Live client project experience",
                  "LinkedIn recommendation",
                  "Placement assistance",
                  "Lifetime access to recordings",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={handlePayNow}
                className="w-full bg-white text-maroon font-black text-lg py-4 rounded-2xl hover:bg-pink-light transition-colors shadow-lg"
              >
                Pay ₹{INTERNSHIP_FEE} via UPI →
              </button>
              <p className="text-white/60 text-xs mt-4">
                GPay · PhonePe · Paytm · Any UPI App supported
              </p>
            </div>
          </div>

          <div className="mt-6 bg-pink-light rounded-2xl p-5 text-center border border-pink-brand/15">
            <p className="text-gray-700 text-sm leading-relaxed">
              📲 <strong>After payment</strong> — screenshot your payment and
              send it to us on WhatsApp. Our team will onboard you within{" "}
              <strong>24 hours.</strong>
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20have%20paid%20for%20the%20internship.%20Here%20is%20my%20payment%20screenshot.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white text-sm font-bold px-6 py-3 rounded-full wa-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send Payment Screenshot
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-pink-light">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-pink-brand font-bold text-xs tracking-[3px] uppercase">
              FAQ
            </span>
            <h2 className="font-display font-black text-gray-900 text-3xl md:text-4xl mt-3">
              Common <span className="text-pink-brand">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-linear-to-r from-maroon to-pink-brand text-white text-center">
        <h2 className="font-display font-black text-3xl md:text-4xl mb-4">
          Ready to Start Your Career? 🚀
        </h2>
        <p className="text-white/80 mb-8 text-base max-w-md mx-auto">
          Only <strong>Limited seats</strong> available. Don't miss your chance
          to get certified.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handlePayNow}
            className="bg-white text-maroon font-black px-10 py-4 rounded-full hover:bg-pink-light transition-colors text-base"
          >
            Enroll Now — ₹{INTERNSHIP_FEE} →
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20know%20more%20about%20the%20Digital%20Marketing%20Internship.`}
            target="_blank"
            rel="noreferrer"
            className="bg-white/20 border border-white/40 text-white font-bold px-10 py-4 rounded-full hover:bg-white/30 transition-colors text-base"
          >
            💬 Ask a Question
          </a>
        </div>
      </section>

      <footer className="bg-maroon text-white/50 text-center text-xs py-5 px-6">
        © 2026 Vronix Digital · All rights reserved ·{" "}
        <Link to="/" className="hover:text-white transition-colors">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
