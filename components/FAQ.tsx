"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is CompliAce a CA firm or a software platform?",
    a: "CompliAce is a Private Limited company that employs Chartered Accountants. We are not a marketplace or aggregator — your CA is our employee or partner CA, and they are accountable to us (and to you) at all times. We are registered with ICAI and operate fully within ICAI's ethical guidelines.",
  },
  {
    q: "Will I have the same CA every month?",
    a: "Yes. You are assigned a dedicated CA at onboarding, and that same CA handles your account for as long as you stay with us. If your CA ever changes (e.g., they leave), we introduce you to your new CA in advance and ensure a zero-disruption handover.",
  },
  {
    q: "What happens if I get a GST notice or income tax query?",
    a: "Notice handling is included in all plans. Your CA will review the notice, prepare the response, and file it on your behalf. If the notice escalates to an assessment or litigation, we'll bring in a senior CA and quote the additional cost transparently before proceeding.",
  },
  {
    q: "My turnover is low. Do I need all of this?",
    a: "If you are GST-registered, you must file GSTR-1 and GSTR-3B every month regardless of turnover — even if it is nil. Late filing penalties start at ₹50/day per return. Our Starter plan at ₹2,000/month costs less than a single month of penalties.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade your plan at the end of any billing month. If your business grows and you need payroll or ROC compliance added, we'll switch you to a higher tier with zero friction.",
  },
  {
    q: "How is this different from hiring a local CA directly?",
    a: "A freelance CA charges ₹500–₹2,000 per return, has no backup if they fall ill, stores your documents on their personal hard drive, and has no accountability if something goes wrong. With CompliAce, you get a team behind your CA, digital document storage, SLA-backed response times, and fixed predictable pricing.",
  },
  {
    q: "Do you serve businesses outside Tricity?",
    a: "We are currently focused on Chandigarh, Mohali, and Panchkula to ensure the highest quality service. We plan to expand to Delhi NCR and Ludhiana in 2026. If you're outside Tricity, contact us — we may be able to help remotely for certain services.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Questions we hear all the time
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-gray-900 text-sm leading-relaxed">{faq.q}</span>
                <span className={`text-blue-600 text-xl font-light shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
