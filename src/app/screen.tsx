"use client";

import AboutSection from "./_sections/about-section";
import CTASection from "./_sections/cta-section";
import DiscoverySection from "./_sections/discovery-section";
import FAQSection from "./_sections/faq-section";
import HeroSection from "./_sections/hero-section";
import PartnersSection from "./_sections/partners-section";

function FundNet4EducationHomeScreen() {
  return (
    <section className=" flex min-h-screen max-w-[100dvw] flex-col overflow-clip bg-gray-100 text-theme-navy-blue-dark ">
      <HeroSection />
      <PartnersSection />
      <CTASection />
      <AboutSection />
      <DiscoverySection />
      <FAQSection />
    </section>
  );
}

export default FundNet4EducationHomeScreen;
