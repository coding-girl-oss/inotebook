import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notebook from './components/Notebook';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import NoteState from './context/notes/NoteState';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import ProfileState from './context/notes/profile/ProfileState';

function App() {
  return (
    <>
      <ToastContainer />
      <ProfileState>
        <NoteState> {/* Corrected capitalization */}
          <BrowserRouter>
            {/* Flex container for main layout */}
            <div className="flex flex-col min-h-screen bg-[#1a6e84]">
              <Navbar />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/notebook" element={<Notebook />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </NoteState>
      </ProfileState>
    </>
  );
}

export default App;




// GmKGWwT3lVBhLM1W
// mongodb+srv://amnashahzadpk3810:GmKGWwT3lVBhLM1W@amna381.3kqwl.mongodb.net/?retryWrites=true&w=majority&appName=Amna381