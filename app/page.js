import FAQsection from "@/components/HomePage/FAQsection";
import FeaturesSection from "@/components/HomePage/FeaturesSection";
import HeroSection from "@/components/HomePage/HeroSection";
import HeroStrip from "@/components/HomePage/HeroStrip";
import ObjectiveSection from "@/components/HomePage/ObjectiveSection";
import ServiceStrip from "@/components/HomePage/ServiceStrip";
import TestimonialSection from "@/components/HomePage/TestimonialSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroStrip />
      <FeaturesSection />
      <ServiceStrip />
      <ObjectiveSection />
      <TestimonialSection />
      <FAQsection />
    </div>
  );
};

export default Home;
