import { Button } from "@/components/ui/button";
import { useState } from "react";
import WalletDialog from "./WalletDialog";

const Navbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/lovable-uploads/bb939cea-b017-4bdf-967d-470588c179af.png" alt="Trust Wallet" className="h-8" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" onClick={handleButtonClick}>Assets</Button>
            <Button variant="ghost" onClick={handleButtonClick}>Protocol</Button>
            <Button variant="ghost" onClick={handleButtonClick}>NFTs</Button>
            <Button variant="ghost" onClick={handleButtonClick}>DeFi</Button>
            <Button className="bg-trustBlue text-white hover:bg-trustBlue/90" onClick={handleButtonClick}>
              Connect Wallet
            </Button>
          </div>
        </div>
      </nav>
      <WalletDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Navbar;