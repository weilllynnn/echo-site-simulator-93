import { Button } from "@/components/ui/button";
import { Shield, Lock, Bell } from "lucide-react";
import { useState } from "react";
import WalletDialog from "./WalletDialog";

const Security = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-100 to-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Stay private and secure</h2>
        <p className="text-lg mb-12 max-w-2xl">
          We're building the most secure & private Web3 wallet for you
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <Shield className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Added security with encryption</h3>
            <p className="text-gray-600">Your private keys never leave your device</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <Lock className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Zero personal tracking</h3>
            <p className="text-gray-600">We don't collect any personal data</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <Bell className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Proactive alerts for risky transactions</h3>
            <p className="text-gray-600">Stay informed about potential risks</p>
          </div>
        </div>

        <Button 
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleButtonClick}
        >
          Learn more about security
        </Button>
      </div>
      <WalletDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default Security;