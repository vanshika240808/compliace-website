export default function TrustBar() {
  const clients = [
    "IT Firms", "Manufacturers", "Traders", "Startups",
    "Retailers", "Consultants", "Exporters", "Clinics",
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <span className="text-sm font-medium text-gray-500 whitespace-nowrap shrink-0">
            Trusted by Tricity businesses:
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <span
                key={c}
                className="bg-white border border-gray-200 text-gray-600 text-sm px-4 py-1.5 rounded-full shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
