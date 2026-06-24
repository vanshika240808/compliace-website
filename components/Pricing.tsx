const plans = [
  {
    name: "Starter",
    price: "₹2,000",
    period: "/month",
    tagline: "For freelancers & sole proprietors",
    color: "border-blue-200",
    headerBg: "bg-blue-50",
    ctaStyle: "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",
    badge: null,
    features: [
      "GST Filing (GSTR-1 + GSTR-3B)",
      "Income Tax Return (ITR-3/4)",
      "TDS Return (26Q)",
      "WhatsApp CA Support",
      "Proactive deadline alerts",
      "Compliance dashboard",
    ],
    notIncluded: ["ROC compliance", "Bookkeeping", "Payroll"],
  },
  {
    name: "Growth",
    price: "₹6,000",
    period: "/month",
    tagline: "For Pvt Ltd & active GST businesses",
    color: "border-blue-600 ring-2 ring-blue-600",
    headerBg: "bg-blue-700",
    ctaStyle: "bg-blue-700 text-white hover:bg-blue-800",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "ROC Annual Compliance (MGT-7, AOC-4)",
      "Monthly Bookkeeping",
      "Document Vault",
      "Annual balance sheet",
      "Audit-ready books",
    ],
    notIncluded: ["Payroll & PF/ESI"],
  },
  {
    name: "Pro",
    price: "₹15,000",
    period: "/month",
    tagline: "For companies with payroll & complex GST",
    color: "border-purple-200",
    headerBg: "bg-purple-50",
    ctaStyle: "border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white",
    badge: null,
    features: [
      "Everything in Growth",
      "Full Payroll Processing",
      "PF, ESI & PT Returns",
      "Form 16 issuance",
      "Multi-state GST",
      "Priority CA response (1hr)",
    ],
    notIncluded: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Flat rate. No hidden fees. Cancel anytime.
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            All plans include a dedicated CA. GST, income tax, and TDS are handled in every tier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl border overflow-hidden flex flex-col ${plan.color} relative`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className={`p-6 ${plan.headerBg}`}>
                <div className={`font-bold text-lg mb-1 ${plan.headerBg === "bg-blue-700" ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </div>
                <div className={`text-sm mb-4 ${plan.headerBg === "bg-blue-700" ? "text-blue-200" : "text-gray-500"}`}>
                  {plan.tagline}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${plan.headerBg === "bg-blue-700" ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.headerBg === "bg-blue-700" ? "text-blue-200" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5 shrink-0">✗</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all ${plan.ctaStyle}`}
                >
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Not sure which plan? <a href="#contact" className="text-blue-600 font-medium hover:underline">Book a free call</a> — we&apos;ll recommend the right fit.
        </p>
      </div>
    </section>
  );
}
