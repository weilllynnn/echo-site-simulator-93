import { Button } from "@/components/ui/button";
import { useState } from "react";
import WalletDialog from "./WalletDialog";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/lovable-uploads/d36e4751-7470-44df-a7d9-ca94944c0a1c.png" alt="Trust Wallet" className="h-10 w-auto mix-blend-multiply" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" onClick={handleButtonClick}>Assets</Button>
            <Button variant="ghost" onClick={handleButtonClick}>Protocol</Button>
            <Button variant="ghost" onClick={handleButtonClick}>NFTs</Button>
            <Button variant="ghost" onClick={handleButtonClick}>DeFi</Button>
            <Button className="bg-trustBlue text-white hover:bg-trustBlue/90" onClick={handleButtonClick}>
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Button variant="ghost" onClick={handleButtonClick}>Assets</Button>
              <Button variant="ghost" onClick={handleButtonClick}>Protocol</Button>
              <Button variant="ghost" onClick={handleButtonClick}>NFTs</Button>
              <Button variant="ghost" onClick={handleButtonClick}>DeFi</Button>
              <Button className="bg-trustBlue text-white hover:bg-trustBlue/90 w-full" onClick={handleButtonClick}>
                Connect Wallet
              </Button>
            </div>
          </div>
        )}
      </nav>
      <WalletDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Navbar;