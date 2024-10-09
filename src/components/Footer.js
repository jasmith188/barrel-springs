import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {/* Column 1: About the Restaurant */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            <div className="flex space-x-4 mb-4 justify-content-center md:mb-0">
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
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="p-0">
            <li className="mb-2">
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:US:7853c796-ff9d-46a5-976c-c7d4d0f0fa08"
                className="text-gray-400 hover:text-white no-underline">
                Menu
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#contact"
                className="text-gray-400 hover:text-white no-underline">
                Contact
              </a>
            </li>
            {/* <li>
              <a href="#reservation" className="text-gray-400 hover:text-white">
                Reservations
              </a>
            </li> */}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">999 Highway 82 Wisconsin Dells, WI</p>
          <a className="no-underline " href="tel:+6082536888">
            <p className="text-gray-400 hover:text-white">(608) 253-6888</p>
          </a>
          <a className="no-underline" href="mailto:barrelspringsbg@gmail.com">
            <p className="text-gray-400 hover:text-white">
              barrelspringsbg@gmail.com
            </p>
          </a>
        </div>
      </div>

      {/* Bottom Section: Social Media & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5 justify-content-center">
          {/* Social Media Links */}

          {/* Copyright */}
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Barrel Springs Bar & Grill. All
            rights reserved. Website created by The Chef.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
