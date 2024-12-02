import { Shield, Cloud, Link, Ban } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Protect your crypto",
      description: "Proactive security warnings",
      icon: <Shield className="w-8 h-8 text-trustBlue" />,
    },
    {
      title: "Safeguard your assets",
      description: "Encrypted Cloud Backups",
      icon: <Cloud className="w-8 h-8 text-trustBlue" />,
    },
    {
      title: "Connect hardware wallet",
      description: "Add another layer of security",
      icon: <Link className="w-8 h-8 text-trustBlue" />,
    },
    {
      title: "Delete & hide NFTs",
      description: "Report unsafe and scam NFTs",
      icon: <Ban className="w-8 h-8 text-trustBlue" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;