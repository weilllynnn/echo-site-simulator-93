import { Button } from "@/components/ui/button";
import { useState } from "react";
import WalletDialog from "./WalletDialog";

const Assets = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  const assets = [
    { name: "Bitcoin", symbol: "BTC", icon: "₿" },
    { name: "Ethereum", symbol: "ETH", icon: "Ξ" },
    { name: "BNB", symbol: "BNB", icon: "BNB" },
    { name: "Solana", symbol: "SOL", icon: "◎" },
    { name: "Polygon", symbol: "MATIC", icon: "Ⓜ" },
  ];

  return (
    <section className="py-20 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">One Platform, Millions of Assets</h2>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-6 gap-4 mb-4 text-sm font-medium">
            <div className="col-span-2">Asset</div>
            <div className="text-center">Buy</div>
            <div className="text-center">Sell</div>
            <div className="text-center">Send</div>
            <div className="text-center">Receive</div>
          </div>
          {assets.map((asset, index) => (
            <div key={index} className="grid grid-cols-6 gap-4 py-3 border-t border-white/10">
              <div className="col-span-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  {asset.icon}
                </span>
                {asset.name}
              </div>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-16 text-center">
          <div>
            <div className="text-3xl font-bold">10M+</div>
            <div className="text-blue-200">ASSETS</div>
          </div>
          <div>
            <div className="text-3xl font-bold">600M+</div>
            <div className="text-blue-200">NFTs</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div className="text-blue-200">BLOCKCHAINS</div>
          </div>
        </div>
      </div>
      <WalletDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default Assets;