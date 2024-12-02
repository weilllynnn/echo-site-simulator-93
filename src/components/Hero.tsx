import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-600 text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-up">
            Your entire <span className="text-blue-200">Web3 journey</span>,
            <br /> made safe and secure
          </h1>
          <p className="text-xl mb-12 max-w-2xl animate-fade-up opacity-90">
            Built-in risk monitoring tools help over 70 million Trust Wallet users safeguard their assets and avoid potential scams.
          </p>
          <div className="relative w-full max-w-4xl h-[400px] mt-8">
            <img
              src="/lovable-uploads/bb939cea-b017-4bdf-967d-470588c179af.png"
              alt="Trust Wallet App"
              className="absolute left-1/2 transform -translate-x-1/2 w-[300px] animate-float"
            />
          </div>
          <div className="flex justify-center space-x-16 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold">70M+</div>
              <div className="text-blue-200">PEOPLE</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10M+</div>
              <div className="text-blue-200">ASSETS</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100M+</div>
              <div className="text-blue-200">BLOCKCHAINS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;