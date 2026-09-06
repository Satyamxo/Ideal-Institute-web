// import React from 'react';
// import { FaLock, FaClipboardList, FaTshirt, FaBook, FaChalkboardTeacher, FaMicrophone, FaLanguage } from 'react-icons/fa';

// const Features = () => {
//     return (
//         <section className="bg-[#ec1f22] text-white py-12 px-4 md:px-8">
//             <div className="container mx-auto text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-8">
//                     Why Choose Ideal Institute?
//                 </h2>
//                 <p className="text-lg md:text-xl mb-10">
//                     At Ideal Institute, we offer a comprehensive educational experience designed to equip students with the skills and knowledge needed for their future. Explore our key features below:
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
//                     <FeatureCard
//                         icon={<FaLock className="text-4xl mb-4 mx-auto text-[#fbd301]" />}
//                         title="CCTV Security"
//                         description="We ensure the safety and security of our students with 24/7 CCTV surveillance."
//                     />
//                     <FeatureCard
//                         icon={<FaClipboardList className="text-4xl mb-4 mx-auto text-[#fbd301]" />}
//                         title="Free Test Copies"
//                         description="Receive free test copies and practice materials to help you prepare effectively."
//                     />
//                     <FeatureCard
//                         icon={<FaTshirt className="text-4xl mb-4 mx-auto text-[#fbd301]" />}
//                         title="Free T-Shirt"
//                         description="Get a free Ideal Institute t-shirt upon enrollment to show your pride!"
//                     />
//                     <FeatureCard
//                         icon={<FaBook className="text-4xl mb-4 mx-auto text-[#fbd301]" />}
//                         title="Mock Exams"
//                         description="Prepare for real exams with our comprehensive mock exam sessions."
//                     />
//                     <FeatureCard
//                         icon={<FaBook className="text-4xl mb-4 mx-auto text-[#fbd301]" />}
//                         title="Free Study Material"
//                         description="Receive free printed subject notes to aid your learning process."
//                     />
//                     <FeatureCard
//                         icon={<FaChalkboardTeacher className="text-4xl mb-4 mx-auto text-[#fbd301]" />}
//                         title="Experienced Faculty"
//                         description="Learn from our team of highly experienced and dedicated faculty members."
//                     />
//                     <FeatureCard
//                         icon={<FaMicrophone className="text-4xl mb-4 mx-auto text-[#fbd301]" />}
//                         title="Motivational Sessions"
//                         description="Participate in motivational sessions designed to inspire and drive you towards success."
//                     />
//                     <FeatureCard
//                         icon={<FaLanguage className="text-4xl mb-4 mx-auto text-[#fbd301]" />}
//                         title="Spoken English in Just 90 Days"
//                         description="Enhance your English-speaking skills in just 90 days with our focused program."
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// const FeatureCard = ({ icon, title, description }) => {
//     return (
//         <div className="p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white text-[#ec1f22]">
//             {icon}
//             <h3 className="text-xl md:text-2xl font-semibold mb-2">
//                 {title}
//             </h3>
//             <p className="text-base md:text-lg">{description}</p>
//         </div>
//     );
// };

// export default Features;
import React from 'react';
import { FaLock, FaClipboardList, FaTshirt, FaBook, FaChalkboardTeacher, FaMicrophone, FaLanguage } from 'react-icons/fa';

const Features = () => {
    return (
        <section className="bg-[#1A2238] text-white py-12 px-4 md:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#f85e00]">
                    Why Choose Ideal Institute?
                </h2>
                <p className="text-lg md:text-xl mb-10 text-[#5bc0be]">
                    At Ideal Institute, we offer a comprehensive educational experience designed to equip students with the skills and knowledge needed for their future. Explore our key features below:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<FaLock className="text-4xl mb-4 mx-auto text-[#f85e00]" />}
                        title="CCTV Security"
                        description="We ensure the safety and security of our students with 24/7 CCTV surveillance."
                    />
                    <FeatureCard
                        icon={<FaClipboardList className="text-4xl mb-4 mx-auto text-[#f85e00]" />}
                        title="Free Test Copies"
                        description="Receive free test copies and practice materials to help you prepare effectively."
                    />
                    <FeatureCard
                        icon={<FaTshirt className="text-4xl mb-4 mx-auto text-[#f85e00]" />}
                        title="Free T-Shirt"
                        description="Get a free Ideal Institute t-shirt upon enrollment to show your pride!"
                    />
                    <FeatureCard
                        icon={<FaBook className="text-4xl mb-4 mx-auto text-[#f85e00]" />}
                        title="Mock Exams"
                        description="Prepare for real exams with our comprehensive mock exam sessions."
                    />
                    <FeatureCard
                        icon={<FaBook className="text-4xl mb-4 mx-auto text-[#f85e00]" />}
                        title="Free Study Material"
                        description="Receive free printed subject notes to aid your learning process."
                    />
                    <FeatureCard
                        icon={<FaChalkboardTeacher className="text-4xl mb-4 mx-auto text-[#f85e00]" />}
                        title="Experienced Faculty"
                        description="Learn from our team of highly experienced and dedicated faculty members."
                    />
                    <FeatureCard
                        icon={<FaMicrophone className="text-4xl mb-4 mx-auto text-[#f85e00]" />}
                        title="Motivational Sessions"
                        description="Participate in motivational sessions designed to inspire and drive you towards success."
                    />
                    <FeatureCard
                        icon={<FaLanguage className="text-4xl mb-4 mx-auto text-[#f85e00]" />}
                        title="Spoken English in Just 90 Days"
                        description="Enhance your English-speaking skills in just 90 days with our focused program."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-[#f5f5f5] text-[#1A2238]">
            {icon}
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#9f4a54]">
                {title}
            </h3>
            <p className="text-base md:text-lg">{description}</p>
        </div>
    );
};

export default Features;
