import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Assets from "@/components/Assets";
import Security from "@/components/Security";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Assets />
      <Security />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;