import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/lovable-uploads/bb939cea-b017-4bdf-967d-470588c179af.png" alt="Trust Wallet" className="h-8" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Button variant="ghost">Assets</Button>
          <Button variant="ghost">Protocol</Button>
          <Button variant="ghost">NFTs</Button>
          <Button variant="ghost">DeFi</Button>
          <Button className="bg-trustBlue text-white hover:bg-trustBlue/90">Connect Wallet</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;