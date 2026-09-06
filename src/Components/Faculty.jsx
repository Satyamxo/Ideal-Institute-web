import React from 'react';
import { teachers } from '../data.js';
import { motion } from 'framer-motion';
const FacultyPage = () => {
  return (
    <div className="bg-[#1A2238] text-white min-h-screen mt-16">
      <header className="text-[#FF6A3D] py-6 px-4 shadow-lg">
        <h1 className="text-4xl font-bold text-center">Our Faculty</h1>
      </header>

      <main className="py-10 px-4 md:px-12">
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#FF6A3D] mb-4">Meet Our Esteemed Faculty</h2>
          <p className="text-lg max-w-3xl mx-auto text-[#ccc5b9]">
            Our faculty members are dedicated to providing the best educational experience. Each member brings a wealth of knowledge and passion to their role, helping students achieve their academic and professional goals.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              className="bg-[#ffeedd] text-[#1A2238] p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={teacher.photo}
                  alt={`${teacher.name}'s photo`}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-[#FF6A3D] transition-transform duration-300 transform hover:scale-110"
                />
                <h3 className="text-2xl font-bold text-[#FF6A3D] mb-2">{teacher.name}</h3>
                <p className="text-lg font-semibold mb-2">{teacher.subject}</p>
                <p className="text-gray-700 mb-4">{teacher.bio}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default FacultyPage;



