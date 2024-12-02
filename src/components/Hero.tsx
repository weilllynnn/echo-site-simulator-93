import { Button } from "@/components/ui/button";
import { useState } from "react";
import WalletDialog from "./WalletDialog";
import { Shield, Wallet, Blocks } from "lucide-react";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  return (
    <>
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
            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 mb-16"
              onClick={handleButtonClick}
            >
              Get Started
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-2">Secure Storage</h3>
                <p className="text-blue-100">Store your crypto assets securely with industry-leading encryption</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <Wallet className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-2">Multi-Chain Support</h3>
                <p className="text-blue-100">Access multiple blockchains from a single secure wallet</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <Blocks className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-bold mb-2">DeFi Integration</h3>
                <p className="text-blue-100">Seamlessly interact with DeFi protocols and dApps</p>
              </div>
            </div>

            <div className="flex justify-center space-x-16 mt-16 text-center">
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
      <WalletDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Hero;