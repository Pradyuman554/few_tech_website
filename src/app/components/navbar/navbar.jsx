'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>
        <div className="lg:hidden" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <li className="mt-2 lg:mt-0">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-2 lg:mt-0">
            <Link href="/product">About</Link>
          </li>
          <li className="mt-2 lg:mt-0">
            <Link href="/serve">Services</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;