import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import logo from '../public/logo.png'; // assuming logo is in the public directory

export default function Navbar() {
  return (
    <>
      <div className="navbar-container flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          {/* Logo with a controlled height */}
          <img src='logo.png' alt="Exclusive brand logo" className="h-8" />
          <h1 className="text-xl font-semibold">Exclusive</h1>
        </div>

        {/* Navbar links */}
        <ul className="flex space-x-8">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">Shop</a></li>
          <li><a href="/signup">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Icons section */}
        <div className="flex gap-4">
         <CiUser className="cursor-pointer" />
          <FaSearch className="cursor-pointer" />
          <CiHeart className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
          
        </div>
      </div>
      <hr />
    </>
  );
}
