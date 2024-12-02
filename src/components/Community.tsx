import { Button } from "@/components/ui/button";
import { useState } from "react";
import WalletDialog from "./WalletDialog";

const Community = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Enjoy a Web3 experience powered by community</h2>
          <p className="text-lg mb-12 max-w-2xl">
            Join millions of people who trust us to access Web3 securely
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-blue-500/10 rounded-2xl p-6 aspect-square flex flex-col justify-between">
                <div className="text-sm text-blue-600">@trustwallet</div>
                <p className="text-gray-800 flex-grow my-4">
                  "Trust Wallet has made my crypto journey so much easier and secure!"
                </p>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
            ))}
          </div>

          <Button 
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleButtonClick}
          >
            Join our community
          </Button>
        </div>
      </section>

      <section className="py-20 bg-blue-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Building on Trust</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            The most trusted & secure crypto wallet
          </p>
          <Button 
            className="bg-white text-blue-600 hover:bg-blue-50"
            onClick={handleButtonClick}
          >
            Download Trust Wallet
          </Button>
        </div>
      </section>
      <WalletDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Community;