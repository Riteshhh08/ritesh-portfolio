import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative font-poppins">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="work"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;

