const Footer = () => {
  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <img src="/lovable-uploads/bb939cea-b017-4bdf-967d-470588c179af.png" alt="Trust Wallet" className="h-8 mb-4" />
            <p className="text-gray-600">The most trusted & secure crypto wallet</p>
          </div>
          
          {['Products', 'Support', 'Assets', 'DeFi', 'Developers'].map((title) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      {title} Link {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2024 Trust Wallet. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-500">Terms</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;