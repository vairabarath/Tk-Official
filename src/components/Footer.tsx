import { Mail, Settings } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Animated gear */}
      <div className="absolute right-8 top-4 opacity-20">
        <Settings
          className="w-8 h-8 text-blue-400 animate-spin"
          style={{ animationDuration: "8s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sheechan
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <a
              href="mailto:info@techsolutions.com"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              info@Sheechan.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TechSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
