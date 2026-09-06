
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
// import './Navlink.css'; // Import the CSS file
// import logo from '../assets/1000108621-removebg-preview[2].png'

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(prevState => !prevState);
//     };

//     return (
//         <>
//             <nav className={`fixed top-0 left-0 right-0 z-20 bg-white border-b-2 border-gray-300 shadow-md transition-all duration-300 ease-in-out ${isMenuOpen ? "h-screen" : "h-16 md:h-20"} flex items-center justify-between px-4 md:px-6 lg:px-8`}>
//                 <div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
//                     <button onClick={toggleMenu} className='md:hidden text-gray-800' aria-label="Toggle menu">
//                         {isMenuOpen ? <FaTimes className="text-3xl md:text-4xl" /> : <FaBars className="text-3xl md:text-4xl" />}
//                     </button>
//                     <NavLink to="/" className="flex items-center">
//                         <img src={logo} alt="Logo" className='h-10 md:h-14 lg:h-16 transition-transform transform hover:scale-105' />
//                     </NavLink>
//                 </div>
//                 <div className='hidden md:flex flex-grow'>
//                     <ul className="flex flex-grow justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-lg">
//                         <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
//                         <li><NavLink to="/results" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Results</NavLink></li>
//                         <li><NavLink to="/faculty" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Faculty</NavLink></li>
//                         <li><NavLink to="/events" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Our Events</NavLink></li>
//                         <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
//                         <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact us</NavLink></li>
//                         <li><NavLink to="/notes" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Notes</NavLink></li>
//                     </ul>
//                 </div>
//                 <div className='hidden md:flex items-center'>
//                     <button 
//                         className='bg-[#f85e00] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center space-x-2 hover:bg-[#c93b00] transition duration-300 ease-in-out text-sm md:text-base font-semibold'
//                         onClick={() => window.location.href = 'https://wa.me/message/EOXWRFWFYNINL1'}
//                     >
//                         <FaPhoneAlt className='text-lg md:text-xl' />
//                         <span>Talk to Us</span>
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden overflow-y-auto`}>
//                 <div className="flex flex-col items-center pt-6">
//                     <button onClick={toggleMenu} className='mb-6 text-gray-800' aria-label="Close menu">
//                         <FaTimes className="text-3xl md:text-4xl" />
//                     </button>
//                     <NavLink to="/" className="flex items-center mb-8">
//                         <img src={logo} alt="Logo" className='h-12 md:h-16 lg:h-20 transition-transform transform hover:scale-105' />
//                     </NavLink>
//                     <ul className="flex flex-col gap-4 px-5 py-3 mb-6 text-lg font-medium text-gray-800">
//                         <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active glow-text' : 'nav-link'}>Home</NavLink></li>
//                         <li><NavLink to="/results" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Results</NavLink></li>
//                         <li><NavLink to="/faculty" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Faculty</NavLink></li>
//                         <li><NavLink to="/events" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Our Events</NavLink></li>
//                         <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
//                         <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact us</NavLink></li>
//                         <li><NavLink to="/notes" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Notes</NavLink></li>
//                     </ul>
//                     <button 
//                         className='bg-[#f85e00] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center space-x-2 hover:bg-[#c93b00] transition duration-300 ease-in-out text-base font-semibold'
//                         onClick={() => window.location.href = 'https://wa.me/message/EOXWRFWFYNINL1'}
//                     >
//                         <FaPhoneAlt className='text-lg md:text-xl' />
//                         <span>Talk to Us</span>
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import './Navlink.css'; // Import the CSS file
import logo from '../assets/1000108621-removebg-preview[2].png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-20 bg-white border-b-2 border-gray-300 shadow-md transition-all duration-300 ease-in-out ${isMenuOpen ? "h-screen" : "h-16 md:h-20"} flex items-center justify-between px-4 md:px-6 lg:px-8`}>
                <div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
                    <button onClick={toggleMenu} className='md:hidden text-gray-800' aria-label="Toggle menu">
                        {isMenuOpen ? <FaTimes className="text-3xl md:text-4xl" /> : <FaBars className="text-3xl md:text-4xl" />}
                    </button>
                    <NavLink to="/" className="flex items-center">
                        {/* Further increased logo size for different screen sizes */}
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className='h-16 md:h-20 lg:h-24 transition-transform transform hover:scale-110' 
                        />
                    </NavLink>
                </div>
                <div className='hidden md:flex flex-grow'>
                    <ul className="flex flex-grow justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-lg">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
                        <li><NavLink to="/results" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Results</NavLink></li>
                        <li><NavLink to="/faculty" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Faculty</NavLink></li>
                        <li><NavLink to="/events" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Our Events</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact us</NavLink></li>
                        <li><NavLink to="/notes" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Notes</NavLink></li>
                    </ul>
                </div>
                <div className='hidden md:flex items-center'>
                    <button 
                        className='bg-[#f85e00] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center space-x-2 hover:bg-[#c93b00] transition duration-300 ease-in-out text-sm md:text-base font-semibold'
                        onClick={() => window.location.href = 'https://wa.me/message/EOXWRFWFYNINL1'}
                    >
                        <FaPhoneAlt className='text-lg md:text-xl' />
                        <span>Talk to Us</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden overflow-y-auto`}>
                <div className="flex flex-col items-center pt-6">
                    <button onClick={toggleMenu} className='mb-6 text-gray-800' aria-label="Close menu">
                        <FaTimes className="text-3xl md:text-4xl" />
                    </button>
                    <NavLink to="/" className="flex items-center mb-8">
                        {/* Further increased logo size for mobile menu */}
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className='h-20 md:h-24 lg:h-28 transition-transform transform hover:scale-110' 
                        />
                    </NavLink>
                    <ul className="flex flex-col gap-4 px-5 py-3 mb-6 text-lg font-medium text-gray-800">
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active glow-text' : 'nav-link'}>Home</NavLink></li>
                        <li><NavLink to="/results" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Results</NavLink></li>
                        <li><NavLink to="/faculty" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Faculty</NavLink></li>
                        <li><NavLink to="/events" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Our Events</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact us</NavLink></li>
                        <li><NavLink to="/notes" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Notes</NavLink></li>
                    </ul>
                    <button 
                        className='bg-[#f85e00] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center space-x-2 hover:bg-[#c93b00] transition duration-300 ease-in-out text-base font-semibold'
                        onClick={() => window.location.href = 'https://wa.me/message/EOXWRFWFYNINL1'}
                    >
                        <FaPhoneAlt className='text-lg md:text-xl' />
                        <span>Talk to Us</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;


