import { Button } from "@/components/ui/button";

interface WalletFormSubmitProps {
  loading: boolean;
}

export const WalletFormSubmit = ({ loading }: WalletFormSubmitProps) => {
  return (
    <div className="flex justify-center">
      <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
        {loading ? 'Connecting...' : 'Connect'}
      </Button>
    </div>
  );
};