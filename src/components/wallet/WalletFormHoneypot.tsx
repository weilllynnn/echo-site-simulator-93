export const WalletFormHoneypot = () => {
  return (
    <p className="hidden">
      <label>
        Don't fill this out if you're human: <input name="bot-field" />
      </label>
    </p>
  );
};