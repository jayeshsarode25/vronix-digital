const UPI_ID = "9860608317-5@ybl";
const BUSINESS_NAME = "Vronix Digital";
const WHATSAPP_NUMBER = "919876543210";

const UPI_APPS = [
  {
    name: "Google Pay",
    icon: "🟢",
    url: (upi, amt, name) =>
      `tez://upi/pay?pa=${upi}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR`,
  },
  {
    name: "PhonePe",
    icon: "🟣",
    url: (upi, amt, name) =>
      `phonepe://pay?pa=${upi}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR`,
  },
  {
    name: "Paytm",
    icon: "🔵",
    url: (upi, amt, name) =>
      `paytmmp://pay?pa=${upi}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR`,
  },
  {
    name: "Any UPI App",
    icon: "💳",
    url: (upi, amt, name) =>
      `upi://pay?pa=${upi}&pn=${encodeURIComponent(name)}&am=${amt}&cu=INR&tn=Digital%20Marketing%20Internship%20Fee`,
  },
];

import { useState } from "react";

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export default function PaymentModal({ onClose, amount }) {
  const [copied, setCopied] = useState(false);

  const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${amount}&cu=INR`,
  )}`;

  const copyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mobile = isMobile();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-md shadow-heavy overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-linear-to-r from-maroon to-pink-brand p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold"
          >
            ✕
          </button>
          <div className="text-3xl mb-2">💳</div>

          <h3 className="font-display font-black text-2xl">Pay ₹{amount}</h3>
          <p className="text-white/75 text-sm mt-1">
            Digital Marketing Internship Fee
          </p>
        </div>

        <div className="p-6">
          {mobile ? (
            <div>
              <p className="text-center text-gray-500 text-sm mb-5">
                Tap your preferred UPI app to pay instantly:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {UPI_APPS.map((app) => (
                  <a
                    key={app.name}
                    href={app.url(UPI_ID, amount, BUSINESS_NAME)}
                    className="flex items-center gap-2 justify-center bg-pink-light border border-pink-brand/20 text-gray-800 font-semibold text-sm py-3.5 rounded-xl hover:bg-pink-brand hover:text-white transition-all duration-200"
                  >
                    <span className="text-xl">{app.icon}</span>
                    {app.name}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-center text-gray-500 text-sm mb-5">
                Scan this QR code with any UPI app on your phone:
              </p>
              <div className="flex justify-center mb-5">
                <div className="p-3 bg-white border-2 border-pink-brand/20 rounded-2xl shadow-card">
                  <img
                    src={QR_URL}
                    alt="UPI QR Code"
                    className="w-48 h-48 rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="bg-pink-light rounded-2xl p-4 flex items-center justify-between gap-3 mb-5">
            <div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                UPI ID
              </div>
              <div className="font-bold text-maroon text-base">{UPI_ID}</div>
            </div>
            <button
              onClick={copyUPI}
              className="shrink-0 bg-white border border-pink-brand/30 text-pink-brand font-bold text-sm px-4 py-2 rounded-xl hover:bg-pink-brand hover:text-white transition-all duration-200"
            >
              {copied ? "✅ Copied!" : "Copy"}
            </button>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-5 text-center">
            <p className="text-yellow-800 text-xs leading-relaxed">
              📲 <strong>After paying</strong> — send your payment screenshot on
              WhatsApp so we can confirm your enrollment.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20have%20paid%20₹${amount}%20for%20the%20Digital%20Marketing%20Internship.%20Please%20confirm%20my%20enrollment.`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3.5 rounded-2xl hover:opacity-90 transition-opacity text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send Payment Screenshot on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
