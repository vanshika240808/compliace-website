import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompliAce — Dedicated CA Team for Tricity SMBs",
  description:
    "Get a dedicated Chartered Accountant for your business. GST filings, Income Tax, ROC, TDS — all handled at a flat monthly price. Serving Chandigarh, Mohali, and Panchkula.",
  keywords:
    "CA in Chandigarh, GST filing Mohali, CA for small business Tricity, compliance retainer, chartered accountant Panchkula",
  openGraph: {
    title: "CompliAce — Dedicated CA Team for Tricity SMBs",
    description:
      "Flat-rate compliance retainer. Dedicated CA. No surprises. Serving Chandigarh, Mohali, Panchkula.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
