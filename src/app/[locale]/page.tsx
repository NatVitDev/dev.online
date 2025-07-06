import About from "@/About/About";
import Contacts from "@/components/Contacts/Contacts";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Prices from "@/components/Prices/Prices";
import Portfolio from "@/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Prices />
      <FAQ />
      <Contacts />
    </>
  );
}
