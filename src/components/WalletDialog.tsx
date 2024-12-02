import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface WalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletDialog = ({ open, onOpenChange }: WalletDialogProps) => {
  const [phrase, setPhrase] = useState("");
  const { toast } = useToast();

  const handleConnect = () => {
    if (!phrase.trim()) {
      toast({
        title: "Error",
        description: "Please enter your private key phrase",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Connecting...",
      description: "Please wait while we connect to your wallet",
    });
    
    // Reset the input
    setPhrase("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Connect Wallet</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground text-center">
            Input your private key phrase for access to your account. Please input it in the order specified.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Separate each word with a space
          </p>
          <Input
            placeholder="Enter your private key phrase"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-center">
            <Button onClick={handleConnect} className="w-full sm:w-auto">
              Connect
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletDialog;