import React, { useState } from 'react';
import lotuslogo from '../assets/lotus loggo.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [mobileServiceMenuOpen, setMobileServiceMenuOpen] = useState(false);

  const serviceItems = [
    { label: 'Flex Printing', path: '/flexprinting' },
    { label: 'Welding', path: '/welding' },
    { label: 'Iron Frame', path: '/ironframe' },
    { label: 'Letter Board', path: '/letterboard' },
    { label: 'Banner Holding', path: '/bannerholding' },
    { label: 'Standee Design', path: '"/standee' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
    setMobileServiceMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={lotuslogo}
          alt="logo"
          className="h-12 w-12"
        />
        <p
          className="text-2xl font-semibold hover:text-red-600 transition cursor-pointer"
          onClick={() => navigate('/')}
        >
          Lotus Fabrication
        </p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-base font-semibold relative">
        <li className="cursor-pointer hover:text-red-600 p-2" onClick={() => navigate('/')}>Home</li>
        <li className="cursor-pointer hover:text-red-600 p-2" onClick={() => navigate('/about')}>About</li>

        {/* Desktop Submenu */}
        <li
          className="relative p-2 cursor-pointer hover:text-red-600"
          onMouseEnter={() => setServiceMenuOpen(true)}
          onMouseLeave={() => setServiceMenuOpen(false)}
        >
          Services
          {serviceMenuOpen && (
            <ul className="absolute top-12 left-0 bg-red-600 text-white rounded-md shadow-lg p-2 min-w-[180px] z-50">
              {serviceItems.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:text-black transition-colors cursor-pointer"
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="cursor-pointer bg-red-500 text-white rounded-md px-4 py-2 hover:text-black transition" onClick={() => navigate('/')}>
          Contact
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md z-40 text-base font-semibold">
          <li className="cursor-pointer hover:text-pink-600" onClick={() => handleNavigate('/')}>Home</li>
          <li className="cursor-pointer hover:text-pink-600" onClick={() => handleNavigate('/about')}>About</li>

          {/* Mobile Services Submenu */}
          <li className="flex flex-col items-center">
            <button
              className="hover:text-pink-600"
              onClick={() => setMobileServiceMenuOpen(!mobileServiceMenuOpen)}
            >
              Services
            </button>
            {mobileServiceMenuOpen && (
              <ul className="mt-2 bg-red-600 text-white rounded-md flex flex-col items-center w-full">
                {serviceItems.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 w-full text-center hover:text-black transition-colors cursor-pointer"
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="cursor-pointer hover:text-pink-600" onClick={() => handleNavigate('/')}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
