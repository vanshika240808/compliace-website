import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <HowItWorks />
      <Services />
      <Pricing />
      <Comparison />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
