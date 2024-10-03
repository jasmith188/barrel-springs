import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {/* Column 1: About the Restaurant */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Come on down to BS. Barrel Springs Bar & Grill
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#menu" className="text-gray-400 hover:text-white">
                Menu
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#reservation" className="text-gray-400 hover:text-white">
                Reservations
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Food Street, Wisconsin, USA</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@restaurant.com</p>
        </div>
      </div>

      {/* Bottom Section: Social Media & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} [Your Restaurant Name]. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
