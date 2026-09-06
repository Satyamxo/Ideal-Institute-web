// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-800 text-white py-6 px-4 md:px-6">
//             <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                
//                 <div className="mb-4 md:mb-0 md:w-1/3">
//                     <h2 className="text-xl font-bold mb-2 transition-transform duration-500 hover:scale-105">
//                         Stay Connected
//                     </h2>
//                     <div className="flex justify-center md:justify-start space-x-3">
//                         <NavLink
//                             to="https://facebook.com"
//                             className="transition-transform duration-300 hover:scale-110"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaFacebookF className="w-5 h-5 text-blue-600" />
//                         </NavLink>
//                         <NavLink
//                             to="https://instagram.com"
//                             className="transition-transform duration-300 hover:scale-110"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaInstagram className="w-5 h-5 text-pink-600" />
//                         </NavLink>
//                         <NavLink
//                             to="https://linkedin.com"
//                             className="transition-transform duration-300 hover:scale-110"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaLinkedinIn className="w-5 h-5 text-blue-700" />
//                         </NavLink>
//                         <NavLink
//                             to="https://youtube.com"
//                             className="transition-transform duration-300 hover:scale-110"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <FaYoutube className="w-5 h-5 text-red-600" />
//                         </NavLink>
//                     </div>
//                 </div>

//                 <div className="mb-4 md:mb-0 md:w-1/3">
//                     <h3 className="text-lg font-semibold mb-2 transition-transform duration-500 hover:scale-105">
//                         Quick Links
//                     </h3>
//                     <ul className="list-none space-y-1 text-sm">
//                         <li>
//                             <NavLink
//                                 to="/about"
//                                 className="hover:underline transition-opacity duration-300 hover:opacity-80"
//                             >
//                                 About Us
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/contact"
//                                 className="hover:underline transition-opacity duration-300 hover:opacity-80"
//                             >
//                                 Contact
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="md:w-1/3 text-sm">
//                     <h3 className="text-lg font-semibold mb-2 transition-transform duration-500 hover:scale-105">
//                         Our Locations
//                     </h3>
//                     <p className="mb-1 transition-opacity duration-500 hover:opacity-80">
//                         Head Office: 78, Super Market, Front of IDBI Bank, Ajad Chorah, Pithampur
//                     </p>
//                     <p className="mb-1 transition-opacity duration-500 hover:opacity-80">
//                         Branch Office: Near Simran Sweets, Front of The Tem Cambridge School, Manwani Colony, Pithampur
//                     </p>
//                 </div>
//             </div>

//             <div className="mt-4 text-center text-slate-400 text-xs">
//                 <p className="transition-opacity duration-500 hover:opacity-80">
//                     &copy; {new Date().getFullYear()} Ideal Institute. All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4 md:px-6 " >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                
                <div className="mb-4 md:mb-0 md:w-1/3">
                    <h2 className="text-xl font-bold mb-2 transition-transform duration-500 hover:scale-105">
                        Stay Connected
                    </h2>
                    <div className="flex justify-center md:justify-start space-x-3">
                        <NavLink
                            to="https://facebook.com"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="w-5 h-5 text-blue-600" />
                        </NavLink>
                        <NavLink
                            to="https://www.instagram.com/ideal_institute_tgs/"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="w-5 h-5 text-pink-600" />
                        </NavLink>
                        <NavLink
                            to="https://wa.me/message/EOXWRFWFYNINL1"
                            className="transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="w-5 h-5 text-green-500" />
                        </NavLink>
                    </div>
                </div>

                <div className="mb-4 md:mb-0 md:w-1/3">
                    <h3 className="text-lg font-semibold mb-2 transition-transform duration-500 hover:scale-105">
                        Quick Links
                    </h3>
                    <ul className="list-none space-y-1 text-sm">
                        <li>
                            <NavLink
                                to="/about"
                                className="hover:underline transition-opacity duration-300 hover:opacity-80"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="hover:underline transition-opacity duration-300 hover:opacity-80"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="md:w-1/3 text-sm">
                    <h3 className="text-lg font-semibold mb-2 transition-transform duration-500 hover:scale-105">
                        Our Locations
                    </h3>
                    <p className="mb-1 transition-opacity duration-500 hover:opacity-80">
                        Head Office: 78, Super Market, Front of IDBI Bank, Ajad Chorah, Pithampur
                    </p>
                    <p className="mb-1 transition-opacity duration-500 hover:opacity-80">
                        Branch Office: Near Simran Sweets, Front of The Tem Cambridge School, Manwani Colony, Pithampur
                    </p>
                </div>
            </div>

            <div className="mt-4 text-center text-slate-400 text-xs">
                <p className="transition-opacity duration-500 hover:opacity-80">
                    &copy; {new Date().getFullYear()} Ideal Institute. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

