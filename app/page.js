import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import FeaturesAccordion from "@/components/FeaturesAccordion";

export default function Home() {
    return (
        <>
          <Header />
          <main>
            <Hero />
            <Problem />
            <FeaturesAccordion />
            <Pricing />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </>
    );
}