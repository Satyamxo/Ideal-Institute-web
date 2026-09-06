

import React, { useState } from 'react';
import { FaStar, FaPaperPlane, FaTimes } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sl1 from "../assets/sir.jpg";
import sl2 from "../assets/sl2.JPG";
import AdmissionOpen from './Admission';
import Features from './Features';


function HomePage() {

  const [openIndex, setOpenIndex] = useState(null);


  const toggleLesson = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const course = {
    title: "The Ultimate Educational Resource for 5th Through 12th Grade",
    description: "Join Ideal Institute TSG and Meet the Best Teachers of Commerce & PCMB.",
    instructor: {
      name: "Sanjay Khandagre",
      photo: sl1,
      bio: "Sanjay is a seasoned educator with extensive experience in commerce education. He has brings 9 years of experience in teaching Accountancy, Business Studies, and English. He holds an M.Com, B.Com (Taxation), PGDCA, D.El.Ed, and is currently pursuing CA. As the founder of Ideal Institute, his expertise lies in making complex subjects accessible and engaging for students.",
      qualifications: " Certified Educator"
    }
  };

  const lessons = [
    { 
      title: "Commerce", 
      description: "Understanding the preparation and analysis of financial statements." 
    },
    { 
      title: "Mathematics", 
      description: "Exploring concepts such as differentiation and probability, including their applications and calculations." 
    },
    { 
      title: "Biology", 
      description: "Examining topics like cell structure, function, genetic inheritance, and evolutionary processes." 
    },
    { 
      title: "Physics", 
      description: "Understanding principles of electrostatics, electric fields, current electricity, and circuits." 
    },
    { 
      title: "Chemistry", 
      description: "Learning about chemical bonding, molecular structures, and different states of matter." 
    }
  ];

  const relatedCourses = [
    { title: "CA Foundation Exam Preparation", description: "Comprehensive preparation for the CA Foundation exam with focus on essential topics and practice materials." },
    { title: "CUET Exam Preparation", description: "Intensive coaching for CUET exam, covering all critical areas and providing practice tests to ensure success." },
    { title: "Advanced Accounting Techniques", description: "Deep dive into advanced accounting methods and practices, essential for CA and other finance exams." },
    { title: "Quantitative Aptitude for Competitive Exams", description: "Enhance your quantitative skills with targeted practice for competitive exams like CA and CUET." }
  ];
  

  const reviews = [
    {
      userName: "Palak Yadav",
      rating: 4,
      feedback: "The course is very helpful, but more real-life examples could have been added. Overall, it's worth the time.",
      date: "2024-07-15",
    },
    {
      userName: "Ravi Sharma",
      rating: 5,
      feedback: "The teachers are extremely knowledgeable and always ready to help. Highly recommended, especially for competitive exams.",
      date: "2024-07-20",
    },
    {
      userName: "Sneha Patel",
      rating: 4,
      feedback: "Classes are well-organized, and the study material is comprehensive. However, more practice tests would make it perfect.",
      date: "2024-07-25",
    },
    {
      userName: "Amit Verma",
      rating: 5,
      feedback: "Excellent coaching with personal attention given to every student. The mock tests are very beneficial for preparation.",
      date: "2024-08-01",
    },
  ];
  

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      
      <section className="relative w-full overflow-hidden mt-16 md:mt-0 sm:mt-0 lg:mt-0">
  <Slider {...sliderSettings}>
    <div>
      <img src={sl1} alt="Slide 1" className="w-full h-auto object-cover" />
    </div>
    <div>
      <img src={sl2} alt="Slide 2" className="w-full h-auto object-cover" />
    </div>
    <div>
      <img src={sl1} alt="Slide 3" className="w-full h-auto object-cover" />
    </div>
  </Slider>
  <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8 bg-black bg-opacity-30">
    <div className="text-white p-6 max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-xl sm:text-4xl md:text-6xl font-extrabold mb-4 glow-text transform scale-100 hover:scale-105 transition-transform duration-500">
        Achieve More with Ideal
      </h1>
      <p className="text-sm sm:text-lg md:text-2xl mb-6 opacity-90 transform scale-100 hover:scale-105 transition-transform duration-500 hidden sm:block">
        Explore a World of Knowledge and Boost Your Grades with Ideal’s Expertly Curated Resources!
      </p>
      <a
        href="/contact"
        className="bg-[#ff2002] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg font-semibold hover:bg-[#a20202] transition-colors duration-300 transform hover:scale-105 hover:animate-pulse"
      >
        Start Learning Today
      </a>
    </div>
  </div>
</section>


      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6">
          
          <section className="container mx-auto mb-8">
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold mb-4 text-[#FF6A3D] transition-transform duration-500 ease-in-out hover:scale-105 hover:text-[#FF6A3D]">
      {course.title}
    </h1>



    <p className="text-lg text-[#1A2238] transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100">
      {course.description}
    </p>
  </div>
  <div className="flex items-center justify-center mb-8 bg-gradient-to-r from-[#1A2238] to-[#2E3A59] p-4 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-xl hover:scale-105">
    <img
      src={course.instructor.photo}
      alt={course.instructor.name}
      className="w-24 h-24 rounded-full object-cover border-4 border-[#FF6A3D] mr-4 transition-transform duration-500 ease-in-out hover:scale-110 glow-effect"
    />
    <div>
      <h2 className="text-xl font-semibold text-[#FF6A3D]">{course.instructor.name}</h2>
      <p className="text-[#F5F5F5]">{course.instructor.bio}</p>
      <p className="text-[#E0E0E0]">{course.instructor.qualifications}</p>
    </div>
  </div>
</section>

<style jsx>{`
  .glow-effect {
    box-shadow: 0 0 15px rgba(255, 106, 61, 0.6);
  }
`}</style>


          <section className="container mx-auto mb-8">
  <h2 className="text-3xl font-bold mb-6 text-[#FF6A3D]">
    Some of the Subjects We Offer
  </h2>
  <div>
    {lessons.map((lesson, index) => (
      <div key={index} className="mb-6">
        <button
          onClick={() => toggleLesson(index)}
          className="w-full text-left bg-[#F7F7F2] border-2 border-[#FF6A3D] py-3 px-5 rounded-lg shadow-md transition-shadow duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold text-[#FF6A3D]">
            {lesson.title}
          </h3>
        </button>
        {openIndex === index && (
          <div className="px-5 py-3 bg-[#F7F7F2] border-2 border-[#FF6A3D] rounded-lg mt-2">
            <p className="text-[#333]">{lesson.description}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</section>

        </main>

       
      
 <aside className="w-full md:w-1/4 p-6 bg-[#1A2238] rounded-lg shadow-lg space-y-6 mb-7">
            <h3 className="text-3xl font-bold mb-6 text-[#FF6A3D] text-center">
                Advanced Courses
            </h3>
            <div className="space-y-4">
                {relatedCourses.map((course, index) => (
                    <div
                        key={index}
                        className="p-4 bg-[#f5f5f5] text-[#1A2238] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
                    >
                        <h4 className="text-xl font-semibold mb-2 text-[#FF6A3D]">{course.title}</h4>
                        <p className="text-base text-gray-800">{course.description}</p>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A3D] to-transparent opacity-20 rounded-lg"></div>
                    </div>
                ))}
            </div>
        </aside>


      </div>

      <AdmissionOpen />
      <Features />


<section className="container mx-auto mt-16 mb-12">
  <h2 className="text-4xl font-extrabold mb-12 text-[#FF6A3D] text-center tracking-wide">
    Student Reviews
  </h2>
  <div className="space-y-10">
    {reviews.map((review, index) => (
      <div
        key={index}
        className="bg-[#1A2238] p-10 rounded-lg shadow-lg w-full flex flex-col space-y-6 text-white"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <h3 className="text-3xl font-semibold text-[#FF6A3D] mb-4 md:mb-0">
            {review.userName}
          </h3>
          <div className="flex items-center space-x-1 text-xl">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            {[...Array(5 - review.rating)].map((_, i) => (
              <FaStar key={i + review.rating} className="text-gray-500" />
            ))}
            <span className="ml-4 text-gray-300 text-base">
              {review.rating} out of 5 stars
            </span>
          </div>
        </div>
        <p className="text-lg leading-relaxed tracking-wide italic">
          "{review.feedback}"
        </p>
        <p className="text-right text-sm text-gray-400">
          Reviewed on {new Date(review.date).toLocaleDateString()}
        </p>
      </div>
    ))}
  </div>
</section>




      
    </>
  );
}

export default HomePage;
