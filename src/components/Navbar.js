import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/" className="hover:text-yellow-500">
            [Restaurant Name]
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#menu" className="text-gray-800 hover:text-yellow-500">
            Menu
          </a>
          <a href="#about" className="text-gray-800 hover:text-yellow-500">
            About Us
          </a>
          <a href="#services" className="text-gray-800 hover:text-yellow-500">
            Services
          </a>
          <a href="#contact" className="text-gray-800 hover:text-yellow-500">
            Contact
          </a>
        </div>

        {/* Reservation Button for Desktop */}
        <a
          href="#reservation"
          className="hidden md:inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Reserve Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <a href="#menu" className="text-gray-800 hover:text-yellow-500">
              Menu
            </a>
            <a href="#about" className="text-gray-800 hover:text-yellow-500">
              About Us
            </a>
            <a href="#services" className="text-gray-800 hover:text-yellow-500">
              Services
            </a>
            <a href="#contact" className="text-gray-800 hover:text-yellow-500">
              Contact
            </a>
            <a
              href="#reservation"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md text-center hover:bg-yellow-600">
              Reserve Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
