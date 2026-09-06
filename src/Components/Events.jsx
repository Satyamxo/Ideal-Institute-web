

import React, { useState } from 'react';
import { Transition } from '@headlessui/react'; // For animations
import { FaCalendarAlt, FaMapMarkerAlt, FaHeart, FaStar, FaBookOpen, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa'; 
import pic from "../assets/pic.jpg"
// Icons for features

const OurEventsPage = () => {
  const [likedEvents, setLikedEvents] = useState([]);
  const [showingDetails, setShowingDetails] = useState(null);

  const events = [
    { id: 1, title: 'Exam Preparation Workshop', photo: '', description: 'Join us for an intensive workshop to prepare for upcoming exams with expert guidance and resources.', date: 'August 20, 2024', location: 'Conference Hall', category: 'academic' },
    { id: 2, title: 'Award Celebration', photo: '', description: 'Celebrate the outstanding achievements of our students at the Annual Award Celebration. A night of recognition and inspiration.', date: 'September 15, 2024', location: 'Main Auditorium', category: 'celebration' },
    { id: 3, title: 'Garba Celebration', photo: '', description: 'Experience the vibrant and energetic Garba dance festival. A cultural celebration with music, dance, and festive activities.', date: 'October 1, 2024', location: 'School Grounds', category: 'cultural' },
    { id: 4, title: 'Picnic Tour', photo: pic, description: 'Relax and enjoy a fun-filled picnic tour with activities and games at a beautiful location. A great way to unwind and socialize.', date: 'November 10, 2024', location: 'Park Area', category: 'recreation' },
    { id: 5, title: 'College Visit', photo: '', description: 'Explore potential colleges and universities during our College Visit event. Meet with representatives and gather information for your future.', date: 'December 5, 2024', location: 'College Grounds', category: 'academic' },
  ];

  const handleLike = (id) => {
    setLikedEvents((prevLiked) => 
      prevLiked.includes(id) ? prevLiked.filter(e => e !== id) : [...prevLiked, id]
    );
  };

  return (
    <div className="bg-[#1A2238] text-white min-h-screen py-12 px-6 mt-16">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-[#FF6A3D] mb-12 text-center">Our Celebrated Events</h1>
        
        <div className="text-center mb-16">
          <p className="text-xl text-[#ccc5b9] mb-4">Discover the events that enrich our educational journey. From academic showcases to cultural celebrations, our events reflect the diverse and dynamic spirit of our institution.</p>
          <p className="text-lg text-[#ccc5b9]">Explore each event and engage with interactive features designed to enhance your experience and provide deeper insights into our community activities.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-[#ffeedd] text-[#1A2238] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer relative">
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                {event.photo ? (
                  <img src={event.photo} alt={event.title} className="w-full h-full object-cover transition-transform transform hover:scale-110" />
                ) : (
                  <div className="w-full h-full bg-gray-300 rounded-lg"></div>
                )}
                <div className="absolute top-2 right-2 bg-[#FF6A3D] text-white text-xs px-3 py-1 rounded">
                  {event.date}
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <FaMapMarkerAlt className="mr-2" /> {event.location}
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <button 
                  className={`flex items-center text-gray-600 py-2 px-4 rounded-lg transition ${likedEvents.includes(event.id) ? 'text-pink-500' : 'hover:bg-gray-200'}`}
                  onClick={() => handleLike(event.id)}
                >
                  <FaHeart className={`mr-2 ${likedEvents.includes(event.id) ? 'text-red-600' : 'text-gray-600'}`} />
                  {likedEvents.includes(event.id) ? 'Liked' : 'Like'}
                </button>
                <button 
                  className="flex items-center text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition"
                  onClick={() => setShowingDetails(showingDetails === event.id ? null : event.id)}
                >
                  <FaCalendarAlt className="mr-2" />
                  {showingDetails === event.id ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
              {showingDetails === event.id && (
                <Transition
                  show={showingDetails === event.id}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="bg-[#fbd301] p-4 rounded-lg mt-4">
                    <p className="text-[#1A2238]">Additional Details:</p>
                    <p className="text-[#1A2238]">{event.description} Learn more about the impact of this event on our community and academic environment.</p>
                  </div>
                </Transition>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-extrabold text-[#FF6A3D] mb-8">Why Our Events Matter</h2>
          <p className="text-lg text-[#ccc5b9] mb-4">Our events are more than just activities; they are opportunities for growth, learning, and community building. Here's how:</p>
          <ul className="list-disc list-inside text-lg text-[#ccc5b9] mx-auto max-w-4xl">
            <li className="mb-2"><FaBookOpen className="inline-block mr-2 text-[#FF6A3D]" /> Educational Enrichment: Our events provide hands-on learning experiences beyond the classroom.</li>
            <li className="mb-2"><FaChalkboardTeacher className="inline-block mr-2 text-[#FF6A3D]" /> Teacher and Student Engagement: Events foster interaction between students and teachers, enhancing the educational experience.</li>
            <li className="mb-2"><FaGraduationCap className="inline-block mr-2 text-[#FF6A3D]" /> Celebrating Achievements: We celebrate milestones and achievements, recognizing the hard work and dedication of our students and staff.</li>
            <li className="mb-2"><FaStar className="inline-block mr-2 text-[#FF6A3D]" /> Future Opportunities: These events pave the way for future opportunities, inspiring students to excel and reach new heights.</li>
          </ul>
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-3xl font-extrabold text-[#FF6A3D] mb-8">Get Involved</h2>
          <p className="text-lg text-[#ccc5b9] mb-4">We encourage our community to actively participate and contribute to our events. Here’s how you can get involved:</p>
          <ul className="list-disc list-inside text-lg text-[#ccc5b9] mx-auto max-w-4xl">
            <li className="mb-2"><FaChalkboardTeacher className="inline-block mr-2 text-[#FF6A3D]" /> Volunteer: Join us as a volunteer to help organize and manage events.</li>
            <li className="mb-2"><FaCalendarAlt className="inline-block mr-2 text-[#FF6A3D]" /> Attend Events: Participate in our events to support and engage with our community.</li>
            <li className="mb-2"><FaStar className="inline-block mr-2 text-[#FF6A3D]" /> Provide Feedback: Share your feedback to help us improve and make our events even better.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurEventsPage;
