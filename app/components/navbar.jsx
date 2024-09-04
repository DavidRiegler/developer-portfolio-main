// @flow strict
"use client";
import React, { useState } from 'react';
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-transparent relative">
      <div className="flex items-center justify-between py-5 px-4">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#30C5FF] text-3xl font-bold">
            David Riegler
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="block md:hidden text-[#30C5FF] focus:outline-none relative z-20"
        >
          <div
            className={`w-6 h-0.5 bg-[#30C5FF] transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-[#30C5FF] mt-1 transition-opacity duration-300 ease-in-out ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-[#30C5FF] mt-1 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          ></div>
        </button>

        <ul className="hidden md:flex md:items-center md:space-x-4">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute right-0 top-full mt-2 w-48 bg-[#2a2d34] text-white flex flex-col items-center rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'transform scale-y-100 opacity-100' : 'transform scale-y-0 opacity-0'
        } origin-top`}
        style={{ zIndex: 20 }}
      >
        <ul className="flex flex-col items-center space-y-1">
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
              onClick={closeMobileMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
              onClick={closeMobileMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
              onClick={closeMobileMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
              onClick={closeMobileMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
              onClick={closeMobileMenu}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#30C5FF]">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
