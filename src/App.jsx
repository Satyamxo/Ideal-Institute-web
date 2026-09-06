import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/Home';
import About from './Components/About';
import FacultyPage from './Components/Faculty';
import Contact from './Components/Contact';
import ScrollToTop from "./Components/ScrollToTop"
import NotesPage from './Components/Notes';
import EventsPage from './Components/Events';
import Results from './Components/Results';
import ApplyNowButton from './Components/Apply';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/faculty' element={<FacultyPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/events' element={<EventsPage/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
      <ApplyNowButton/>
      <Footer />
    </div>
  );
};

export default App;
