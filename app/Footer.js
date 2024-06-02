import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-wrap">
          <div className="w-full lg:w-1/5 mb-10 lg:mb-0">
            <div className="flex items-center mb-6">
              <img src="/nav.svg" alt="Logo" className="h-18 w-18 mr-2"/>
              
            </div>
            <div className="mb-4">
              <a href="mailto:Help@Frybix.Com" className="flex items-center text-sm text-gray-500">
               <img src="/footer1.png" alt="" />
                Help@Frybix.Com
              </a>
            </div>
            <div className="mb-4">
              <a href="tel:+123445667889" className="flex items-center text-sm text-gray-500">
               <img src="/footer2.png" alt="" />
                +1234 456 678 89
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/5 mb-10 lg:mb-0">
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Bookings</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          <div className="w-full lg:w-1/5 mb-10 lg:mb-0">
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="w-full lg:w-1/5 mb-10 lg:mb-0">
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Take Tour</a></li>
              <li><a href="#" className="hover:text-gray-900">Live Chat</a></li>
              <li><a href="#" className="hover:text-gray-900">Reviews</a></li>
            </ul>
          </div>

          <div className="w-full lg:w-1/5 mb-10 lg:mb-0">
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-gray-500 mb-4">Stay Up To Date</p>
            <form className="flex space-x-2">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"/>
              <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; 2022 Uifry.Com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
