import React, { useState } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import FormMail from './FormMail'; 
import './Navlink.css'

function ApplyNowButton() {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleApplyNowClick}
        className="flex items-center glow-text bg-[#ff2002] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#a20202] transition-colors duration-300 transform hover:scale-105 hover:animate-pulse"
      >
        <FaPaperPlane className="text-xl mr-2" />
        <span className=''>Apply Now</span>
      </button>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full md:w-3/4 lg:w-1/2 xl:w-1/3 p-4 rounded-lg shadow-lg relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FaTimes className="text-2xl" />
            </button>
            <FormMail />
          </div>
        </div>
      )}
    </section>
  );
}

export default ApplyNowButton;
