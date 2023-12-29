import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from "./components/Header";
import Beforehead from "./components/before_header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Departmentpage from './pages/Department';
const App = () => {
  return (
    <Router>
      <Beforehead />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/department" element={<Departmentpage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;