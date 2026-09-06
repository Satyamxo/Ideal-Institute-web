

import React, { useState } from 'react';
import { FaChalkboardTeacher, FaBook, FaAward, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FaCalendarDay, FaGraduationCap, FaTrophy, FaUsers } from 'react-icons/fa';

const About = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const faqData = [
        {
            question: "What programs do you offer?",
            answer: "We offer a range of programs including undergraduate, graduate, and certification courses across various disciplines."
        },
        {
            question: "How can I apply for admission?",
            answer: "You can apply for admission through our online application portal. Detailed instructions are available on our Admissions page."
        },
        {
            question: "What are the tuition fees?",
            answer: "Tuition fees vary depending on the program. Please refer to the tuition and fees section on our website for detailed information."
        },
        {
            question: "Do you offer financial aid?",
            answer: "Yes, we offer various scholarships and financial aid options. You can find more information on our Financial Aid page."
        },
        {
            question: "How can I contact the admissions office?",
            answer: "You can contact the admissions office via email at admissions@idealinstitute.edu or call us at (123) 456-7890."
        }
    ];

    return (
        <div className='px-4 sm:px-6 lg:px-8  bg-[#1A2238]'>
            <motion.section 
                className="text-center text-white py-12 rounded-lg  mt-20 "
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4"><span className='text-[#9DAAF2]'>Welcome</span> to <span className='text-[#FF6A3D]'> Ideal Institute </span></h1>
                <p className="text-lg md:text-xl mb-6">
                    At Ideal Institute, our mission is to foster a vibrant educational environment that cultivates intellectual growth, creativity, and leadership. Join us in exploring endless opportunities for personal and academic excellence.
                </p>
               
            </motion.section>

            <section className="my-12">
                <h2 className="text-3xl font-bold text-[#FF6A3D] mb-6">Our Mission & Vision</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white text-[#1A2238] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-[#1538fc] mb-4">Our Mission</h3>
                        <p>
                            Our mission is to provide a comprehensive and innovative educational experience that equips students with the skills and knowledge necessary for their future.
                        </p>
                    </div>
                    <div className="bg-white text-[#1A2238]  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-[#1538fc] mb-4">Our Vision</h3>
                        <p>
                            We envision a world where every student has access to quality education, empowering them to achieve their highest potential and become leaders in their fields.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-12">
                <h2 className="text-3xl font-bold text-[#FF6A3D] mb-6">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white text-[#1A2238] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                        <FaChalkboardTeacher size={50} className='text-[#FF6A3D] mb-4' />
                        <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                        <p>We strive for excellence in every aspect of our educational programs and services.</p>
                    </div>
                    <div className="bg-white text-[#1A2238]  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                        <FaBook size={50} className='text-[#FF6A3D] mb-4' />
                        <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                        <p>We uphold the highest standards of integrity and ethical conduct in our operations.</p>
                    </div>
                    <div className="bg-white text-[#1A2238]  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                        <FaAward size={50} className='text-[#FF6A3D]  mb-4' />
                        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                        <p>We embrace innovation to enhance the learning experience and stay ahead in education.</p>
                    </div>
                    <div className="bg-white text-[#1A2238]  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                        <FaUniversity size={50} className='text-[#FF6A3D] mb-4' />
                        <h3 className="text-xl font-semibold mb-2">Community</h3>
                        <p>We build a supportive community where students, faculty, and staff collaborate to achieve common goals.</p>
                    </div>
                </div>
            </section>

            

            <motion.section 
    className="my-12 bg-[#ffeedd] text-[#1A2238] py-8 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
>
    <h2 className="text-3xl font-bold mb-6 text-center text-[#FF6A3D]">Our Achievements</h2>
    <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
                <FaCalendarDay className="text-5xl text-[#FF6A3D]" />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold">23+</h3>
                <p className="text-lg text-[#1538fc]">Years Of Experience</p>
            </div>
        </div>
        <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
                <FaGraduationCap className="text-5xl text-[#FF6A3D]" />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold">10k+</h3>
                <p className="text-lg text-[#1538fc]">Students Passed CA Foundation</p>
            </div>
        </div>
        <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
                <FaTrophy className="text-5xl text-[#FF6A3D]" />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold">231+</h3>
                <p className="text-lg text-[#1538fc]">All India Ranks</p>
            </div>
        </div>
        <div className="text-center flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
                <FaUsers className="text-5xl text-[#FF6A3D]" />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold">15+</h3>
                <p className="text-lg text-[#1538fc]">Team of Faculty</p>
            </div>
        </div>
    </div>
</motion.section>


            <section className="mt-12 ">
                <h2 className="text-3xl font-bold text-[#FF6A3D] mb-6 text-center">Frequently Asked Questions</h2>
                <div className="bg-[#0b0a07] text-[#1A2238] p-6 rounded-lg shadow-md">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className={`flex items-center justify-between p-4 cursor-pointer bg-[#ccc5b9] text-[#1A2238] rounded-lg shadow-md transition-all duration-300 ${expanded === index ? 'bg-[#f85e00]' : ''}`}
                                onClick={() => toggleExpand(index)}
                                aria-expanded={expanded === index}
                                aria-controls={`faq-content-${index}`}
                            >
                                <h4 className="text-lg font-semibold">{faq.question}</h4>
                                {expanded === index ? <FaMinus size={24} /> : <FaPlus size={24} />}
                            </div>
                            <motion.div
                                id={`faq-content-${index}`}
                                className={`overflow-hidden mt-2 bg-[#bbcea8]`}
                                initial={{ height: 0 }}
                                animate={{ height: expanded === index ? 'auto' : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="p-4">{faq.answer}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;





