import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSections from "@/components/InfoSections";
import Catalog from "@/components/Catalog";
import HowToChoose from "@/components/HowToChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InfoSections />
      <Catalog />
      <HowToChoose />
      <CTA />
      <Footer />
    </>
  );
}