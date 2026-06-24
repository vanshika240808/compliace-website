const pains = [
  {
    icon: "📞",
    title: "CA only calls during tax season",
    desc: "You hear from your CA once a year — during a panic. The rest of the year, you're on your own.",
  },
  {
    icon: "🧾",
    title: "No idea what was filed",
    desc: "What went to the portal? What was claimed? Most SMB owners don't know — and their CA doesn't explain.",
  },
  {
    icon: "💸",
    title: "Surprise invoices",
    desc: "Every form, every query, every amendment costs extra. The final bill always shocks you.",
  },
  {
    icon: "🔄",
    title: "New CA face every time",
    desc: "Whoever picks up your call has zero context about your business. You re-explain everything each time.",
  },
  {
    icon: "⏰",
    title: "Missed deadlines & notices",
    desc: "GSTR-3B late by a day? You get a notice. No one tracked it, no one warned you.",
  },
  {
    icon: "📂",
    title: "Documents lost in email",
    desc: "Your returns, audit reports, and certificates are scattered across email threads no one can find.",
  },
];

export default function Problem() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">The Problem</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Why most SMBs hate their CA experience
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            You&apos;re not alone. These are the six complaints we hear from every Tricity SMB owner — every single time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="bg-red-50 border border-red-100 rounded-2xl p-6 card-hover"
            >
              <div className="text-3xl mb-3">{pain.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{pain.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-center text-white">
          <p className="text-xl font-semibold">
            ClearTax quietly abandoned the sub-₹50K SMB segment in December 2025.
          </p>
          <p className="text-blue-200 mt-2">
            Thousands of Tricity businesses are now actively looking for a reliable replacement. CompliAce was built for exactly this moment.
          </p>
        </div>
      </div>
    </section>
  );
}
