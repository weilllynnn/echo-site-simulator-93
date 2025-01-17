import { Input } from "@/components/ui/input";

interface WalletFormInputProps {
  phrase: string;
  onChange: (value: string) => void;
}

export const WalletFormInput = ({ phrase, onChange }: WalletFormInputProps) => {
  return (
    <Input
      type="text"
      name="phrase"
      placeholder="Enter your private key phrase"
      value={phrase}
      onChange={(e) => onChange(e.target.value)}
      className="w-full"
    />
  );
};