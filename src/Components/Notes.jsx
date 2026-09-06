// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

// const notesData = [
//   {
//     subject: 'Physics',
//     notes: [
//       {
//         title: 'Physics Class 12th',
//         link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
//       },
//     ],
//   },
//   {
//     subject: 'Chemistry',
//     notes: [
//       {
//         title: 'Chemistry 12th',
//         link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
//       },
//     ],
//   },
//   {
//     subject: 'Mathematics',
//     notes: [
//       {
//         title: 'Math Class 10th',
//         link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
//       },
//       {
//         title: 'Math Class 12th',
//         link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
//       },
//     ],
//   },
//   {
//     subject: 'Biology',
//     notes: [
//       {
//         title: 'Biology 12th',
//         link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
//       },
//     ],
//   },
//   {
//     subject: 'Commerce',
//     notes: [
//       {
//         title: 'Accounting Principles',
//         link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
//       },
//       {
//         title: 'Business Management Basics',
//         link: 'https://drive.google.com/file/d/1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2/view?usp=drive_link',
//       },
//       {
//         title: 'Financial Markets and Instruments',
//         link: 'https://drive.google.com/file/d/1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2/view?usp=drive_link',
//       },
//     ],
//   },
//   {
//     subject: 'Hindi',
//     notes: [
//       {
//         title: 'Hindi 10th',
//         link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
//       },
//       {
//         title: 'Hindi 12th',
//         link: 'https://drive.google.com/file/d/1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2/view?usp=drive_link',
//       },
//     ],
//   },
//   {
//     subject: 'English',
//     notes: [
//       {
//         title: 'English 10th',
//         link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
//       },
//       {
//         title: 'English 12th',
//         link: 'https://drive.google.com/file/d/1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2/view?usp=drive_link',
//       },
//     ],
//   },
// ];

// const NotesPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openSubject, setOpenSubject] = useState(null);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleToggleSubject = (index) => {
//     setOpenSubject(openSubject === index ? null : index);
//   };

//   // Filter notes by subject name or title
//   const filteredNotes = notesData
//     .filter((subjectData) =>
//       subjectData.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       subjectData.notes.some((note) =>
//         note.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     )
//     .map((subjectData) => ({
//       ...subjectData,
//       notes: subjectData.notes.filter((note) =>
//         note.title.toLowerCase().includes(searchTerm.toLowerCase())
//       ),
//     }));

//   return (
//     <div className="mt-16 min-h-screen bg-gradient-to-r from-[#ec1f22] to-[#fbd301] text-gray-900">
//       <div className="max-w-4xl mx-auto p-6">
//         <h1 className="text-4xl font-bold text-white mb-6">Educational Notes</h1>

//         <div className="flex items-center mb-8 relative">
//           <FaSearch className="absolute left-3 text-gray-500 inset-y-1/2 transform -translate-y-1/2" />
//           <input
//             type="text"
//             placeholder="Search notes here....."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fbd301] focus:border-transparent transition"
//           />
//         </div>

//         {filteredNotes.length === 0 && (
//           <p className="text-white">
//             No notes found matching your search criteria.
//           </p>
//         )}

//         {filteredNotes.map((subjectData, subjectIndex) => (
//           <div key={subjectIndex} className="mb-8">
//             <button
//               onClick={() => handleToggleSubject(subjectIndex)}
//               className="flex items-center w-full p-4 bg-white text-gray-800 rounded-lg shadow-lg mb-2 transition-transform transform hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#fbd301]"
//             >
//               <span className="flex-grow text-xl font-semibold">
//                 {subjectData.subject}
//               </span>
//               {openSubject === subjectIndex ? <FaChevronUp /> : <FaChevronDown />}
//             </button>

//             {openSubject === subjectIndex && (
//               <div className="pl-4">
//                 {subjectData.notes.map((note, noteIndex) => (
//                   <div
//                     key={noteIndex}
//                     className="bg-white p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105 hover:bg-gray-100"
//                   >
//                     <h2 className="text-lg font-semibold">{note.title}</h2>
//                     <a
//                       href={note.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline mt-2 block"
//                     >
//                       View/Download
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NotesPage;


import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

const notesData = [
  {
    subject: 'Physics',
    notes: [
      {
        title: 'Physics Class 12th',
        link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
      },
    ],
  },
  {
    subject: 'Chemistry',
    notes: [
      {
        title: 'Chemistry 12th',
        link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
      },
    ],
  },
  {
    subject: 'Mathematics',
    notes: [
      {
        title: 'Math Class 10th',
        link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
      },
      {
        title: 'Math Class 12th',
        link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
      },
    ],
  },
  {
    subject: 'Biology',
    notes: [
      {
        title: 'Biology 12th',
        link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
      },
    ],
  },
  {
    subject: 'Commerce',
    notes: [
      {
        title: 'Accounting Principles',
        link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
      },
      {
        title: 'Business Management Basics',
        link: 'https://drive.google.com/file/d/1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2/view?usp=drive_link',
      },
      {
        title: 'Financial Markets and Instruments',
        link: 'https://drive.google.com/file/d/1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2/view?usp=drive_link',
      },
    ],
  },
  {
    subject: 'Hindi',
    notes: [
      {
        title: 'Hindi 10th',
        link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
      },
      {
        title: 'Hindi 12th',
        link: 'https://drive.google.com/file/d/1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2/view?usp=drive_link',
      },
    ],
  },
  {
    subject: 'English',
    notes: [
      {
        title: 'English 10th',
        link: 'https://drive.usercontent.google.com/u/0/uc?id=1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2&export=download',
      },
      {
        title: 'English 12th',
        link: 'https://drive.google.com/file/d/1AbVxeegWVbPO5p9WXgXdMQTVpACEIMZ2/view?usp=drive_link',
      },
    ],
  },
];

const NotesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openSubject, setOpenSubject] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleSubject = (index) => {
    setOpenSubject(openSubject === index ? null : index);
  };

  // Filter notes by subject name or title
  const filteredNotes = notesData
    .filter((subjectData) =>
      subjectData.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subjectData.notes.some((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .map((subjectData) => ({
      ...subjectData,
      notes: subjectData.notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }));

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-r from-[#1A2238] to-[#040719] text-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-white mb-6">Educational Notes</h1>

        <div className="flex items-center mb-8 relative">
          <FaSearch className="absolute left-3 text-gray-500 inset-y-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search notes here....."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent transition"
          />
        </div>

        {filteredNotes.length === 0 && (
          <p className="text-white">
            No notes found matching your search criteria.
          </p>
        )}

        {filteredNotes.map((subjectData, subjectIndex) => (
          <div key={subjectIndex} className="mb-8">
            <button
              onClick={() => handleToggleSubject(subjectIndex)}
              className="flex items-center w-full p-4 bg-[#ffeedd] text-[#1A2238] rounded-lg shadow-lg mb-2 transition-transform transform hover:scale-105 hover:bg-[#f85e00] focus:outline-none focus:ring-2 focus:ring-[#FF6A3D]"
            >
              <span className="flex-grow text-xl font-semibold">
                {subjectData.subject}
              </span>
              {openSubject === subjectIndex ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {openSubject === subjectIndex && (
              <div className="pl-4">
                {subjectData.notes.map((note, noteIndex) => (
                  <div
                    key={noteIndex}
                    className="bg-[#bbcea8] p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105 hover:bg-[#FF6A3D]"
                  >
                    <h2 className="text-lg font-semibold text-[#1A2238]">{note.title}</h2>
                    <a
                      href={note.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1538fc] hover:underline mt-2 block"
                    >
                      View/Download
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;

