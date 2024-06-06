
import CTASection from "@/components/CTAsection";
import FAQSection from "@/components/FAQsection";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
     <Feature/>
     <CTASection/>
     <FAQSection/>
     <Footer/>
    
    </main>
  );
}
