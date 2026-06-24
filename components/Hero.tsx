export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-200">Now serving Chandigarh · Mohali · Panchkula</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Dedicated CA Team
              <span className="block text-emerald-400">from ₹2,000/month</span>
            </h1>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
              GST filings, Income Tax, ROC, TDS — everything handled by a certified CA
              assigned to your business. No missed deadlines. No surprise bills. One flat price.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "✓ ICAI Registered CAs",
                "✓ ERI Certified",
                "✓ 100% On-Time Filing",
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl text-center transition-all hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Book Free Health Check →
              </a>
              <a
                href="#pricing"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-center transition-all"
              >
                See Pricing
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { number: "500+", label: "SMBs Served" },
                { number: "₹60K", label: "Avg Annual Savings" },
                { number: "99%", label: "On-Time Filing" },
                { number: "3hrs", label: "Avg Response Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-blue-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-auto animate-float">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">CA</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">CA Priya Sharma</div>
                  <div className="text-xs text-gray-500">Your Dedicated Accountant</div>
                </div>
                <div className="ml-auto">
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">Active</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { task: "GSTR-3B Filed", date: "Due Jul 20", done: true },
                  { task: "TDS Return Q1", date: "Due Jul 31", done: true },
                  { task: "Income Tax ITR", date: "Due Jul 31", done: false },
                  { task: "ROC Annual Return", date: "Due Sep 30", done: false },
                ].map((item) => (
                  <div key={item.task} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${item.done ? "bg-emerald-500 text-white" : "bg-blue-100 text-blue-600"}`}>
                      {item.done ? "✓" : "•"}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{item.task}</div>
                      <div className="text-xs text-gray-500">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-900">₹2,000</div>
                <div className="text-xs text-blue-600 font-medium">per month · everything included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
