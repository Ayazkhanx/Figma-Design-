// import React from 'react';
// import { FaUser } from "react-icons/fa";
// import { BsFillCake2Fill } from "react-icons/bs";
// import { FaTag } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import Image from 'next/image'; // Next.js Image component

// import pic1 from '../public/blog 1.jpg';
// import pic2 from '../public/blog 2.jpg';
// import pic3 from '../public/blog 3.jpg';
// import pic4 from '../public/blog 4.jpg';
// import pic5 from '../public/blog 5.jpg';
// import pic6 from '../public/blog 6.jpg';
// import pic7 from '../public/blog 7.jpg';
// import pic8 from '../public/blog 8.jpg';

// export default function BlogSec2() {
//   return (
//     <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {/* Main Content Column */}
//       <div className="lg:col-span-2">
//         <div className="mb-8">
//           {/* First blog post */}
//           <div className="mb-4">
//             <img src="/blog 1.jpg" alt="Blog Image 1" className="w-full h-80 object-cover mb-4" />
//             <div className="flex space-x-4 text-sm text-gray-600">
//               <div className="flex items-center">
//                 <FaUser />
//                 <p className="ml-2">Admin</p>
//               </div>
//               <div className="flex items-center">
//                 <BsFillCake2Fill />
//                 <p className="ml-2">14 Oct 2023</p>
//               </div>
//               <div className="flex items-center">
//                 <FaTag />
//                 <p className="ml-2">Wood</p>
//               </div>
//             </div>
//             <p className="text-lg mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//               et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
//               sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
//             </p>
//             <h1 className="underline text-black mt-4">Read More</h1>
//           </div>

//           {/* Second blog post */}
//           <div className="mb-4">
//             <img src="/blog 2.jpg" alt="Blog Image 2" className="w-full h-80 object-cover mb-4" />
//             <h1 className="text-2xl font-bold mb-4">Explore New Ways of Decorating</h1>
//             <div className="flex space-x-4 text-sm text-gray-600">
//               <div className="flex items-center">
//                 <FaUser />
//                 <p className="ml-2">Admin</p>
//               </div>
//               <div className="flex items-center">
//                 <BsFillCake2Fill />
//                 <p className="ml-2">14 Oct 2023</p>
//               </div>
//               <div className="flex items-center">
//                 <FaTag />
//                 <p className="ml-2">Wood</p>
//               </div>
//             </div>
//             <p className="text-lg mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//               et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
//               sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
//             </p>
//             <h1 className="underline text-black mt-4">Read More</h1>
//           </div>

//           {/* Third blog post */}
//           <div className="mb-4">
//             <img src="/blog 3.jpg" alt="Blog Image 3" className="w-full h-80 object-cover mb-4" />
//             <h1 className="text-2xl font-bold mb-4">Handmade Pieces That Took Time to Make</h1>
//             <div className="flex space-x-4 text-sm text-gray-600">
//               <div className="flex items-center">
//                 <FaUser />
//                 <p className="ml-2">Admin</p>
//               </div>
//               <div className="flex items-center">
//                 <BsFillCake2Fill />
//                 <p className="ml-2">14 Oct 2023</p>
//               </div>
//               <div className="flex items-center">
//                 <FaTag />
//                 <p className="ml-2">Wood</p>
//               </div>
//             </div>
//             <p className="text-lg mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//               et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
//               sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
//             </p>
//             <h1 className="underline text-black mt-4">Read More</h1>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar Content */}
//       <div className="bg-gray-100 p-8 rounded-lg">
//         {/* Search Bar */}
//         <div className="flex items-center mb-8">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full p-2 border border-gray-300 rounded-l-md"
//           />
//           <button className="p-2 bg-black text-white rounded-r-md">
//             <CiSearch />
//           </button>
//         </div>

//         {/* Categories */}
//         <div className="mb-8">
//   <h2 className="text-xl font-semibold mb-4">Categories</h2>
//   <ul className="categories-list">
//     <li><span>Crafts</span><span>2</span></li>
//     <li><span>Design</span><span>5</span></li>
//     <li><span>Handmade</span><span>7</span></li>
//     <li><span>Interior</span><span>9</span></li>
//     <li><span>Wood</span><span>1</span></li>
//   </ul>
// </div>


//         {/* Recent Posts */}
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
//           <div className="mb-4">
//             <img src="blog 4.jpg" alt="Blog 4" className="w-16 h-16 object-cover mb-2" />
//             <p>Going all-in with millennial design</p>
//             <p>03 Aug 2022</p>
//           </div>
//           <div className="mb-4">
//             <img src="blog 5.jpg" alt="Blog 5" className="w-16 h-16 object-cover mb-2" />
//             <p>Exploring new ways of decorating</p>
//             <p>03 Aug 2022</p>
//           </div>
//           <div className="mb-4">
//             <img src="blog 6.jpg" alt="Blog 6" className="w-16 h-16 object-cover mb-2" />
//             <p>Handmade pieces that took time to make</p>
//             <p>03 Aug 2022</p>
//           </div>
//           <div className="mb-4">
//             <img src="blog 7.jpg" alt="Blog 7" className="w-16 h-16 object-cover mb-2" />
//             <p>Modern home in Milan</p>
//             <p>03 Aug 2022</p>
//           </div>
//           <div>
//             <img src="blog 8.jpg" alt="Blog 8" className="w-16 h-16 object-cover mb-2" />
//             <p>Colorful office redesign</p>
//             <p>03 Aug 2022</p>
//           </div>
//         </div>
//       </div>

//       <div className='flex gap-8 justify-center'>
//         <button className='bg-gold text-white'>1</button>
//         <button>2</button>
//         <button>3</button>
//         <button>4</button>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { FaUser } from "react-icons/fa";
import { BsFillCake2Fill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image'; // Next.js Image component

import pic1 from '../public/blog 1.jpg';
import pic2 from '../public/blog 2.jpg';
import pic3 from '../public/blog 3.jpg';
import pic4 from '../public/blog 4.jpg';
import pic5 from '../public/blog 5.jpg';
import pic6 from '../public/blog 6.jpg';
import pic7 from '../public/blog 7.jpg';
import pic8 from '../public/blog 8.jpg';

export default function BlogSec2() {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content Column */}
      <div className="lg:col-span-2">
        <div className="mb-8">
          {/* First blog post */}
          <div className="mb-4">
            <img src="/blog 1.jpg" alt="Blog Image 1" className="w-full h-80 object-cover mb-4" />
            <div className="flex space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FaUser />
                <p className="ml-2">Admin</p>
              </div>
              <div className="flex items-center">
                <BsFillCake2Fill />
                <p className="ml-2">14 Oct 2023</p>
              </div>
              <div className="flex items-center">
                <FaTag />
                <p className="ml-2">Wood</p>
              </div>
            </div>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
            </p>
            <h1 className="underline text-black mt-4">Read More</h1>
          </div>

          {/* Second blog post */}
          <div className="mb-4">
            <img src="/blog 2.jpg" alt="Blog Image 2" className="w-full h-80 object-cover mb-4" />
            <h1 className="text-2xl font-bold mb-4">Explore New Ways of Decorating</h1>
            <div className="flex space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FaUser />
                <p className="ml-2">Admin</p>
              </div>
              <div className="flex items-center">
                <BsFillCake2Fill />
                <p className="ml-2">14 Oct 2023</p>
              </div>
              <div className="flex items-center">
                <FaTag />
                <p className="ml-2">Wood</p>
              </div>
            </div>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
            </p>
            <h1 className="underline text-black mt-4">Read More</h1>
          </div>

          {/* Third blog post */}
          <div className="mb-4">
            <img src="/blog 3.jpg" alt="Blog Image 3" className="w-full h-80 object-cover mb-4" />
            <h1 className="text-2xl font-bold mb-4">Handmade Pieces That Took Time to Make</h1>
            <div className="flex space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <FaUser />
                <p className="ml-2">Admin</p>
              </div>
              <div className="flex items-center">
                <BsFillCake2Fill />
                <p className="ml-2">14 Oct 2023</p>
              </div>
              <div className="flex items-center">
                <FaTag />
                <p className="ml-2">Wood</p>
              </div>
            </div>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.
            </p>
            <h1 className="underline text-black mt-4">Read More</h1>
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="bg-gray-100 p-8 rounded-lg">
        {/* Search Bar */}
        <div className="flex items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-l-md"
          />
          <button className="p-2 bg-black text-white rounded-r-md">
            <CiSearch />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Crafts</span><span>2</span>
            </li>
            <li className="flex justify-between">
              <span>Design</span><span>5</span>
            </li>
            <li className="flex justify-between">
              <span>Handmade</span><span>7</span>
            </li>
            <li className="flex justify-between">
              <span>Interior</span><span>9</span>
            </li>
            <li className="flex justify-between">
              <span>Wood</span><span>1</span>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <img src="/blog 4.jpg" alt="Blog 4" className="w-16 h-16 object-cover mr-4" />
              <div>
                <p>Going all-in with millennial design</p>
                <p>03 Aug 2022</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <img src="/blog 5.jpg" alt="Blog 5" className="w-16 h-16 object-cover mr-4" />
              <div>
                <p>Exploring new ways of decorating</p>
                <p>03 Aug 2022</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <img src="/blog 6.jpg" alt="Blog 6" className="w-16 h-16 object-cover mr-4" />
              <div>
                <p>Handmade pieces that took time to make</p>
                <p>03 Aug 2022</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <img src="/blog 7.jpg" alt="Blog 7" className="w-16 h-16 object-cover mr-4" />
              <div>
                <p>Modern home in Milan</p>
                <p>03 Aug 2022</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <img src="/blog 8.jpg" alt="Blog 8" className="w-16 h-16 object-cover mr-4" />
              <div>
                <p>Colorful office redesign</p>
                <p>03 Aug 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex gap-4 justify-center mt-8">
        <button className="bg-gold text-white py-2 px-4 rounded">1</button>
        <button className="py-2 px-4 border border-gray-300 rounded">2</button>
        <button className="py-2 px-4 border border-gray-300 rounded">3</button>
        <button className="py-2 px-4 border border-gray-300 rounded">4</button>
      </div>
    </div>
  );
}
