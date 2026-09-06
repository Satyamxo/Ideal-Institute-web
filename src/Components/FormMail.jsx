
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0c9lbk7', 'template_zvy58qq', form.current, {
        publicKey: 'JwIB5VF-1bj8wBfbi',
      })
      .then(
        () => {
          form.current.reset(); 
          toast.success('Message sent successfully!'); 
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
        },
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className='w-full p-6 bg-white rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
        <div className='mb-4'>
          <label htmlFor="to_name" className='block text-gray-700 text-sm font-medium mb-1'>Name</label>
          <input 
            type="text" 
            id="to_name" 
            name="from_name" 
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required 
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="user_email" className='block text-gray-700 text-sm font-medium mb-1'>Email</label>
          <input 
            type="email" 
            id="user_email" 
            name="user_email" 
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required 
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="message" className='block text-gray-700 text-sm font-medium mb-1'>Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4"
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required 
          />
        </div>
        <button 
          type="submit" 
          className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Send
        </button>
      </form>
      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default FormMail;


