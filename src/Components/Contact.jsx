import React from 'react';
import { GoMail } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { MdPhoneForwarded } from "react-icons/md";
import FormMail from './FormMail';
import AdmissionOpen from './Admission';

const Contact = () => {
    return (
        <div className='bg-[#1A2238] min-h-screen py-14 mt-3 md:mt-5 sm:mt-5 px-4'>
            <AdmissionOpen />

            <div className='flex flex-col md:flex-row md:justify-center gap-6 mt-8'>
                <div className="w-full md:w-80 bg-[#FF6A3D] shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 flex items-center p-4 rounded-lg">
                    <GoMail size={32} className='text-white' />
                    <div className='ml-4'>
                        <h4 className='text-lg font-medium text-white'>skhandagre7@gmail.com</h4>
                    </div>
                </div>

                <div className="w-full md:w-80 bg-[#FF6A3D] shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 flex items-center p-4 rounded-lg">
                    <GrLocation size={25} className='text-white' />
                    <span className='ml-4 text-lg font-medium text-white'>Super Market, Ajad Chorah Pithampur</span>
                </div>

                <div className="w-full md:w-80 bg-[#FF6A3D] shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 flex items-center p-4 rounded-lg">
                    <MdPhoneForwarded size={35} className='text-white' />
                    <div className='ml-4 flex flex-col'>
                        <span className='text-lg font-medium text-white'>9009455763 , 8964974911</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row mt-14 gap-2'>
                <div className="w-full md:w-1/2 border-2 border-[#FF6A3D] rounded-lg shadow-lg">
                    <FormMail />
                </div>

                <div className="w-full md:w-1/2 border-2 border-[#FF6A3D] rounded-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1581992588285!2d75.67747227513986!3d22.610566879464734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962564317a0309f%3A0x710e7750f3925fb7!2sIdeal%20Institute%20TGS!5e0!3m2!1sen!2sin!4v1723317244736!5m2!1sen!2sin"
                        width="100%"
                        height="458"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='rounded-lg'
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
export default Contact;


