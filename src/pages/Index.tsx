import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Security />
      <Footer />
    </div>
  );
};

export default Index;