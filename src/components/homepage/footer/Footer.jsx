import React from "react";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3c34] text-white pt-12 pb-6 mt-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Brand Section */}
        <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
        <p className="text-gray-300 mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4">Social Links</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white p-2 rounded-full text-[#1a3c34] hover:bg-gray-200 transition-colors"
            >
              <TbBrandInstagramFilled size={24} />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full text-[#1a3c34] hover:bg-gray-200 transition-colors"
            >
              <FaSquareFacebook size={24} />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full text-[#1a3c34] hover:bg-gray-200 transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© {currentYear} KeenKeeper. All rights reserved.</p>

          <nav className="flex gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
