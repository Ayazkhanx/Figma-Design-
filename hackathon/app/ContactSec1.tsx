import React from 'react'
import Image from 'next/image'; // Next.js Image component
import pic from '../public/shop 1.jpg'; // Image import for background
import logo from '../public/logo.png';
import { IoIosArrowForward } from "react-icons/io";

export default function ContactSec1() {
    return (
        <div className="p-10 blog1">
          {/* Background Image is set in CSS */}
          <div className="text-3xl text-black font-bold mt-5 flex flex-col justify-center items-center h-full">
            <Image src={logo} alt="Logo" width={150} height={150} /> {/* Logo */}
            <h1>Contact</h1>
    
            <div className="flex p-10">
              <p>Home</p>
              <IoIosArrowForward />
              <p className="text-gray-400"> Contact</p>
            </div>
          </div>
        </div>
      );
    }
    



 