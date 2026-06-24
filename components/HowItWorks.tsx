const steps = [
  {
    step: "01",
    title: "Choose Your Plan",
    desc: "Pick the retainer tier that fits your business — Starter, Growth, or Pro. No long-term lock-in. Change anytime.",
    icon: "📋",
    color: "bg-blue-50 border-blue-200",
    numColor: "text-blue-600",
  },
  {
    step: "02",
    title: "Meet Your Dedicated CA",
    desc: "We assign a Chartered Accountant to your account within 24 hours. You get their direct WhatsApp number.",
    icon: "🤝",
    color: "bg-emerald-50 border-emerald-200",
    numColor: "text-emerald-600",
  },
  {
    step: "03",
    title: "Relax — We Handle Everything",
    desc: "Your CA tracks every deadline, files every return, and sends you a confirmation the same day. You just approve.",
    icon: "✅",
    color: "bg-purple-50 border-purple-200",
    numColor: "text-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Up and running in 24 hours
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            No paperwork jungle. No 3-week onboarding. Just a CA who knows your business, starting tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0 -translate-x-8"></div>
              )}
              <div className={`relative z-10 border rounded-2xl p-8 card-hover ${s.color}`}>
                <div className={`text-5xl font-black mb-4 ${s.numColor} opacity-20`}>{s.step}</div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
