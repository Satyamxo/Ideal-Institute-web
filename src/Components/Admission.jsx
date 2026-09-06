
import React from 'react';
import { motion } from 'framer-motion';
import './Navlink.css'


const AdmissionOpen = () => {
    return (
        <section className="py-12 px-4 md:px-8 bg-gradient-to-r bg-[#1A2238]">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
                >
                    Admissions Now Open at <span className='text-[#FF6A3D] '>ideal Institute!</span>
                </motion.h2>
                
                <motion.p
                    className="text-lg md:text-xl mb-6 text-white"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 50 }}
                >
                    Join us to experience world-class education and prepare for your future. Enroll now to secure your spot for the upcoming academic year.
                </motion.p>
                
                <motion.a
    href="/contact"
    className="bg-white glow-effect text-[#ec1f22] px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#fbd301] "
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    Apply Now
  </motion.a>
            </div>
        </section>
    );
};

export default AdmissionOpen;

