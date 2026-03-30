import { Link } from 'react-router-dom'

const PERKS = [
  { icon: '🎓', text: 'Certificate' },
  { icon: '💼', text: 'Live Projects' },
  { icon: '🤝', text: 'Mentorship' },
  { icon: '🚀', text: 'Placement Help' },
]

export default function InternshipBanner() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-maroon via-[#8B1550] to-pink-brand p-10 md:p-14">

         
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-40 h-40 bg-white/5 rounded-full translate-y-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

            
            <div className="text-white text-center md:text-left">
             
              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-4">
                🎓 Now Open — Limited Seats
              </span>

              <h2 className="font-display font-black text-3xl md:text-4xl leading-tight mb-3">
                Digital Marketing
                <br />
                <span className="text-pink-light">Career Program</span>
              </h2>

              <p className="text-white/75 text-sm leading-relaxed max-w-sm mb-6">
                We are funding your future with knowledge. Boost your skills with 3 months training+1 month internship program.
              </p>

              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {PERKS.map(({ icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {icon} {text}
                  </span>
                ))}
              </div>
            </div>

                
            <div className="bg-white rounded-2xl p-8 text-center shrink-0 w-full md:w-72 shadow-heavy">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                3 Months 
              </div>
              <div className="font-display font-black text-maroon text-4xl mb-1">
                
              </div>
              <div className="text-gray-400 text-xs mb-6">One-time · All inclusive</div>

              <Link
                to="/internship"
                className="block w-full bg-linear-to-r from-pink-brand to-maroon text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                View Full Details →
              </Link>

              <p className="text-gray-400 text-[11px] mt-3">
                Pay via UPI · GPay · PhonePe
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}