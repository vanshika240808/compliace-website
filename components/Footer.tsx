export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CA</span>
              </div>
              <span className="text-white font-bold text-lg">
                Compli<span className="text-blue-400">Ace</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-4">
              Dedicated CA team for GST-registered SMBs in Tricity. Flat pricing. Zero surprises.
            </p>
            <div className="flex gap-3">
              {["in", "tw", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center text-xs font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["GST Filing", "Income Tax Returns", "TDS Returns", "ROC Compliance", "Bookkeeping", "Payroll"].map(
                (item) => (
                  <li key={item}>
                    <a href="#services" className="hover:text-white transition-colors">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Pricing", "Why CompliAce", "Blog", "Careers", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📧</span>
                <a href="mailto:hello@compliace.in" className="hover:text-white transition-colors">hello@compliace.in</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Mohali, Punjab 160059<br />Serving all of Tricity</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <span>© 2025 CompliAce Technologies Pvt Ltd. All rights reserved.</span>
          <span>ICAI compliant · ERI Registered · GST No. 03AAACC1234A1Z5</span>
        </div>
      </div>
    </footer>
  );
}
