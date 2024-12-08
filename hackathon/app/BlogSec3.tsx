import React from 'react';
import { FaTrophy } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function BlogSec3() {
  return (
    <div className="flex justify-between p-10  rounded-lg">
      {/* High Quality */}
      <div className="flex items-center space-x-4">
        <FaTrophy className="text-4xl text-gold" />
        <div>
          <h4 className="text-xl font-semibold">High Quality</h4>
          <p className="text-sm text-gray-600">Crafted from top material</p>
        </div>
      </div>

      {/* Warranty Protection */}
      <div className="flex items-center space-x-4">
        <LuBadgeCheck className="text-4xl " />
        <div>
          <h4 className="text-xl font-semibold">Warranty Protection</h4>
          <p className="text-sm text-gray-600">Over 2 Years</p>
        </div>
      </div>

      {/* Free Shipping */}
      <div className="flex items-center space-x-4">
        <FaShippingFast className="text-4xl" />
        <div>
          <h4 className="text-xl font-semibold">Free Shipping</h4>
          <p className="text-sm text-gray-600">Order Over $150</p>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className="flex items-center space-x-4">
        <RiCustomerService2Fill className="text-4xl" />
        <div>
          <h4 className="text-xl font-semibold">24 / 7 Support</h4>
          <p className="text-sm text-gray-600">Dedicated Support</p>
        </div>
      </div>
    </div>
  );
}
