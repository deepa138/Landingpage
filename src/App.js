// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Beforehead from './components/headerfooter/before_header';
import Navbar from './components/headerfooter/Navbar';
import Footer from './components/headerfooter/footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Departmentpage from './pages/Department';
import Doctorpage from './pages/Doctor';
import BlogList from './components/blogs/BlogList';
import SingleBlogPost from './components/blogs/SingleBlogPost';

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
        <Route path="/doctor" element={<Doctorpage />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:postId" element={<SingleBlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
