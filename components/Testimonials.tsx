const testimonials = [
  {
    name: "Rajiv Malhotra",
    role: "Director, Malhotra Tech Solutions Pvt Ltd — Mohali",
    avatar: "RM",
    avatarBg: "bg-blue-700",
    text: "We switched from IndiaFilings after they missed our GSTR-3B twice. CompliAce assigned us a CA on day one, and our filings have been on time every single month since. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Seema Kapoor",
    role: "Proprietor, Kapoor Fabrics — Chandigarh Sector 22",
    avatar: "SK",
    avatarBg: "bg-emerald-700",
    text: "I used to dread GST month. I had no idea what my CA was doing or when. Now I get a WhatsApp message confirming every filing with the acknowledgment number. It&apos;s a completely different experience.",
    rating: 5,
  },
  {
    name: "Amit Bhatia",
    role: "Co-founder, HealthBridge Startup — Panchkula",
    avatar: "AB",
    avatarBg: "bg-purple-700",
    text: "As a startup we have complex GST on exports plus TDS on contractor payments. CompliAce Growth plan handles all of it. Our CA knows our model inside-out. It&apos;s like having an in-house CA at a fraction of the cost.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Trusted by Tricity businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "500+", label: "Active retainer clients" },
            { num: "99.2%", label: "On-time filing rate" },
            { num: "4.9/5", label: "Average client rating" },
            { num: "₹0", label: "Penalty notices issued" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
              <div className="text-3xl font-black text-blue-900 mb-1">{s.num}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
