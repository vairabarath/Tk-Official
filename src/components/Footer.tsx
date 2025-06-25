
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">

        {/* Links Section */}
        <div className="mb-6 md:mb-0 ">
            <h2 className="text-xl font-semibold mb-2">Quick Navigation</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 text-sm hover:text-white">HOME</a></li>
            <li><a href="#" className="text-gray-400 text-sm hover:text-white">ABOUT US</a></li>
            <li><a href="#" className="text-gray-400 text-sm hover:text-white">CONTACT US</a></li>
            <li><a href="#" className="text-gray-400 text-sm hover:text-white">PRODUCTS</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="mb-6 md:mb-0 ">
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <p className="text-gray-400">About us, mission, and values.</p>
        </div>  

        {/* Contact Section */}
        <div className="">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-400">Email: contact@example.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
