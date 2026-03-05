import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";

import MobileNavbar from "@/components/mobile/MobileNavbar";
import MobileHero from "@/components/mobile/MobileHero";
import MobileTestimonials from "@/components/mobile/MobileTestimonials";
import MobileFooter from "@/components/mobile/MobileFooter";

/**
 * Home page — renders BOTH desktop and mobile trees.
 * Visibility is controlled purely via CSS (lg: breakpoint) so there is
 * zero hydration mismatch and the correct layout paints immediately.
 *
 * On mobile (<1024px): MobileNavbar → MobileHero → MobileTestimonials → MobileFooter
 * On desktop (≥1024px): Navbar → HomeSection → FeaturesSection → TestimonialSection → Footer
 */
export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* ── Mobile layout (hidden on lg+) ──────────────────── */}
      <div className="lg:hidden">
        <MobileNavbar />
        <main>
          <MobileHero />
          <MobileTestimonials />
        </main>
        <MobileFooter />
      </div>

      {/* ── Desktop layout (hidden below lg) ───────────────── */}
      <div className="hidden lg:block">
        <Navbar />
        <main>
          <HomeSection />
          <FeaturesSection />
          <TestimonialSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
