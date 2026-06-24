const services = [
  { icon: "🧾", title: "GST Filing", desc: "GSTR-1, GSTR-3B, GSTR-9 filed accurately and on time. Zero late fees.", plans: ["Starter", "Growth", "Pro"] },
  { icon: "📊", title: "Income Tax Returns", desc: "ITR filed for proprietors, firms, and private limited companies.", plans: ["Starter", "Growth", "Pro"] },
  { icon: "📋", title: "TDS Returns", desc: "Quarterly TDS returns (26Q, 24Q) with correct challan reconciliation.", plans: ["Starter", "Growth", "Pro"] },
  { icon: "🏢", title: "ROC Annual Compliance", desc: "MGT-7, AOC-4 filed before due dates. DIN and DSC management included.", plans: ["Growth", "Pro"] },
  { icon: "📒", title: "Bookkeeping", desc: "Monthly ledger, P&L, and balance sheet. Always audit-ready.", plans: ["Growth", "Pro"] },
  { icon: "💼", title: "Payroll & PF/ESI", desc: "Full payroll processing, PF/ESI returns, and Form 16 issuance.", plans: ["Pro"] },
  { icon: "💬", title: "WhatsApp Support", desc: "Direct line to your CA. Reply within 3 hours on business days.", plans: ["Starter", "Growth", "Pro"] },
  { icon: "📁", title: "Document Vault", desc: "All your returns, certificates, and notices stored and organized in one place.", plans: ["Growth", "Pro"] },
  { icon: "🔔", title: "Proactive Alerts", desc: "We track due dates and alert you 7 days in advance. No more surprises.", plans: ["Starter", "Growth", "Pro"] },
];

const planColor: Record<string, string> = {
  Starter: "bg-blue-100 text-blue-700",
  Growth: "bg-emerald-100 text-emerald-700",
  Pro: "bg-purple-100 text-purple-700",
};

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">What&apos;s Included</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Everything your business needs. Nothing you don&apos;t.
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Every service listed below is covered in your retainer — no add-on fees, no surprise invoices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-2xl p-6 card-hover bg-white">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.plans.map((plan) => (
                  <span key={plan} className={`text-xs font-medium px-2 py-1 rounded-full ${planColor[plan]}`}>
                    {plan}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
