import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import MobileApp from "@/components/sections/MobileApp";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Clients />
        <Services />
        <MobileApp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
