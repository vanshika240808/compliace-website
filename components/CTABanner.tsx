"use client";
export default function CTABanner() {
  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-blue-200">Free health check — no commitment, no spam</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to stop worrying
          <span className="block text-emerald-400">about compliance?</span>
        </h2>

        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute compliance health check. We&apos;ll review your current filings, identify
          any gaps, and recommend exactly which plan you need — with zero obligation.
        </p>

        {/* Contact form */}
        <form
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-xl mx-auto text-left space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-200 mb-1.5 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Rajiv Sharma"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-blue-300 text-sm focus:outline-none focus:border-white/40"
              />
            </div>
            <div>
              <label className="block text-sm text-blue-200 mb-1.5 font-medium">Phone / WhatsApp</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-blue-300 text-sm focus:outline-none focus:border-white/40"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1.5 font-medium">Business Name & Type</label>
            <input
              type="text"
              placeholder="Sharma IT Solutions Pvt Ltd — Software Services"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-blue-300 text-sm focus:outline-none focus:border-white/40"
            />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1.5 font-medium">City</label>
            <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40">
              <option value="" className="text-gray-900">Select your city</option>
              <option value="chandigarh" className="text-gray-900">Chandigarh</option>
              <option value="mohali" className="text-gray-900">Mohali (SAS Nagar)</option>
              <option value="panchkula" className="text-gray-900">Panchkula</option>
              <option value="other" className="text-gray-900">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Book My Free Health Check →
          </button>
          <p className="text-xs text-blue-300 text-center">
            We&apos;ll call you within 24 hours. No spam. No automated bots.
          </p>
        </form>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            "📞 +91 98765 43210",
            "📧 hello@compliace.in",
            "📍 Mohali, Punjab 160059",
          ].map((item) => (
            <span key={item} className="text-blue-200 text-sm">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
