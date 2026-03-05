import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xvzbewbo";

const WHATSAPP_NUMBER = "919822452413";

const INFO = [
  { icon: "📞", label: "Phone", value: "+91 9822452413" },
  { icon: "📧", label: "Email", value: "info@vronixdigital.com" },
  { icon: "🌐", label: "Website", value: "www.vronixdigital.com" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in Name, Email, and Message.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-pink-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-brand font-bold text-xs tracking-[3px] uppercase">
            Get In Touch
          </span>
          <h2 className="font-display font-black text-gray-900 text-3xl md:text-5xl mt-3">
            Building <span className="text-pink-brand">Brands</span>{" "}
            From Scratch
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Fill the form or chat on WhatsApp — we reply within 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-3xl p-10 shadow-card">
            <h3 className="font-display font-bold text-maroon text-2xl mb-7">
              Send Us a Message
            </h3>

            <div className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Full Name *"
                value={form.name}
                onChange={handleChange}
                className="form-input w-full px-5 py-4 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                className="form-input w-full px-5 py-4 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 transition-all"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="form-input w-full px-5 py-4 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 transition-all"
              />
              <textarea
                name="message"
                placeholder="Tell us about your business"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="form-input w-full px-5 py-4 rounded-xl border border-gray-200 text-sm bg-white text-gray-900 transition-all resize-y"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className={`mt-6 w-full py-4 rounded-full font-bold text-white text-base transition-all
                ${
                  status === "sent"
                    ? "bg-green-500"
                    : "bg-linear-to-r from-pink-brand to-maroon hover:opacity-90"
                }
                ${status === "sending" ? "cursor-wait opacity-70" : "cursor-pointer"}
              `}
            >
              {status === "idle" && "🚀 Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✅ Sent! We'll reply soon."}
              {status === "error" && "❌ Failed — try WhatsApp instead"}
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              🔒 Your info is safe. We never share your data.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-linear-to-br from-pink-brand to-maroon rounded-3xl p-10 text-center text-white">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="font-display font-bold text-2xl mb-3">
                Chat on WhatsApp
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Prefer to chat? Message us on WhatsApp and get a response in
                minutes. Available Mon–Sat, 10am–7pm.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vronix%20Digital!%20I%20visited%20your%20website%20and%20want%20to%20discuss%20my%20project.`}
                target="_blank"
                rel="noreferrer"
                className="wa-btn inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-9 py-4 rounded-full shadow-lg"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              {INFO.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 py-4 ${i < INFO.length - 1 ? "border-b border-pink-light" : ""}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                      {item.label}
                    </div>
                    <div className="text-gray-900 font-semibold text-sm mt-0.5">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
