import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import image34 from '../assets/images/techcabal.jpeg';
import image3 from '../assets/images/Audit.png';
import logo from '../assets/images/pigy.png';


const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-6">As featured in</h2>
        {/* "As featured in" section */}
        <div className="flex justify-center space-x-6 mb-8">
          <img src={image34} alt="TechCabal" className="h-6" />
          <img src="/path/to/cnbc-logo.png" alt="CNBC" className="h-6" />
          <img src="/path/to/techcrunch-logo.png" alt="TechCrunch" className="h-6" />
          <img src="/path/to/pyments-logo.png" alt="PYMNTS" className="h-6" />
          <img src="/path/to/fastcompany-logo.png" alt="FastCompany" className="h-6" />
          <img src="/path/to/cio-logo.png" alt="CIO" className="h-6" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Audit Image */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="PiggyVest" className="h-6 mb-4" />
            <img src={image3} alt="NDPR Audit Compliant" className="h-12" />
          </div>

          {/* Footer Links */}
          <div className="flex justify-around w-full mt-8 md:mt-0 md:w-1/2">
            <div className="text-center md:text-left text-xs">
              <h3 className="font-semibold mb-2">Products</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/piggybank" className="hover:text-blue-500">Piggybank</a></li>
                <li><a href="/invest" className="hover:text-blue-500">Invest</a></li>
                <li><a href="/safelock" className="hover:text-blue-500">Safelock</a></li>
                <li><a href="/target-savings" className="hover:text-blue-500">Target Savings</a></li>
                <li><a href="/flex-naira" className="hover:text-blue-500">Flex Naira</a></li>
                <li><a href="/flex-dollar" className="hover:text-blue-500">Flex Dollar</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left text-xs">
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/about" className="hover:text-blue-500">About</a></li>
                <li><a href="/faqs" className="hover:text-blue-500">FAQs</a></li>
                <li><a href="/blog" className="hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left text-xs">
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/terms" className="hover:text-blue-500">Terms</a></li>
                <li><a href="/privacy" className="hover:text-blue-500">Privacy</a></li>
                <li><a href="/security" className="hover:text-blue-500">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Information and Social Icons */}
          <div className="text-center md:text-right mt-8 md:mt-0 text-xs">
            <div className="flex justify-center md:justify-end space-x-4 mb-3">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF className="text-xl hover:text-blue-500" /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter className="text-xl hover:text-blue-500" /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram className="text-xl hover:text-blue-500" /></a>
              <a href="https://tiktok.com" aria-label="TikTok"><FaTiktok className="text-xl hover:text-blue-500" /></a>
              <a href="https://youtube.com" aria-label="YouTube"><FaYoutube className="text-xl hover:text-blue-500" /></a>
            </div>
            <p className="text-gray-600 mb-4">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
            <a href="mailto:contact@piggyvest.com" className="block text-gray-600 mb-4 hover:text-blue-500">contact@piggyvest.com</a>
            <p className="text-gray-600 mb-4">+234700 933 933 933</p>
            
          </div>
        </div>
      </div>
          <hr className='mt-10'/>
          <div className="text-center text-xs text-gray-500 mt-8 px-4 w-4/6">
        <p className='mb-4 '> Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 7 years,  our customers have  <br />saved and invested billions of Naira that they would normally be tempted to spend.</p>
        <p className='mb-4'> PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</p>
        <p>© 2016 - 2024 PiggyTech Global Limited - RC1405222</p>

      </div>
    </footer>
  );
};

export default Footer;
