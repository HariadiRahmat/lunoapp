import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";


export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-50 w-full overflow-x-hidden selection:bg-brand-200 select-none">
      
      {/* Absolute top grid wallpaper layout */}
      <div className="absolute inset-x-0 top-0 h-[800px] pointer-events-none opacity-40 bg-[linear-gradient(to_right,#e6dfd4_1px,transparent_1px),linear-gradient(to_bottom,#e6dfd4_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Decorative radial gradients under content */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-gradient-to-tr from-brand-100/10 to-brand-300/5 blur-3xl -z-10 pointer-events-none" />

      {/* Floating Modern Header */}
      <Navbar />

      {/* Main Container Wrapper */}
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {/* Hero Section */}
          <Hero />

          {/* Trust statistics block */}
          <Trust />

          {/* Detailed core services */}
          <Services />

          {/* Success items Portfolio */}
          <Portfolio />

          {/* Custom plan Pricing */}
          <Pricing />

          {/* Client reviews Testimonials */}
          <Testimonials />

          {/* Responsive acordion FAQs */}
          <FAQ />

          {/* Direct WhatsApp trigger banner */}
          <CTA />
        </motion.div>
      </main>

      {/* Detailed site map footer */}
      <Footer />

      <SpeedInsights />
    </div>
  );
}
