const features = [
  "Dedicated CA (same person every time)",
  "Flat monthly pricing (no surprise bills)",
  "WhatsApp direct line to CA",
  "Proactive deadline tracking",
  "Document vault (all returns saved)",
  "GST + Income Tax + ROC bundled",
  "Onboarding in 24 hours",
  "Tricity local presence",
];

const providers = [
  { name: "CompliAce", highlight: true },
  { name: "IndiaFilings", highlight: false },
  { name: "Vakilsearch", highlight: false },
  { name: "ClearTax", highlight: false },
] as const;

type ProviderName = (typeof providers)[number]["name"];

const data: Record<ProviderName, boolean[]> = {
  CompliAce:   [true,  true,  true,  true,  true,  true,  true,  true],
  IndiaFilings: [false, false, false, false, false, true,  false, false],
  Vakilsearch:  [false, false, false, false, false, true,  false, false],
  ClearTax:     [false, false, false, false, false, true,  false, false],
};

export default function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Why CompliAce</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            How we compare to the alternatives
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Generic online platforms are built for volume, not for your business. Here&apos;s what you actually get.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 w-1/2">Feature</th>
                {providers.map(({ name, highlight }) => (
                  <th
                    key={name}
                    className={`px-4 py-4 text-sm font-bold text-center ${
                      highlight ? "text-blue-700 bg-blue-50" : "text-gray-600"
                    }`}
                  >
                    {name}
                    {highlight && (
                      <div className="text-xs font-normal text-blue-500 mt-0.5">★ Best</div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((feature, idx) => (
                <tr key={feature} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-6 py-4 text-sm text-gray-700">{feature}</td>
                  {providers.map(({ name, highlight }) => {
                    const val = data[name][idx];
                    return (
                      <td
                        key={name}
                        className={`px-4 py-4 text-center ${highlight ? "bg-blue-50/50" : ""}`}
                      >
                        {val ? (
                          <span className="text-emerald-500 text-lg font-bold">✓</span>
                        ) : (
                          <span className="text-red-400 text-lg">✗</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
