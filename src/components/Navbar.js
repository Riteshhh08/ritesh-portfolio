import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'work', 'projects', 'certifications', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Fixed left sidebar social links */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center">
        <div className="w-0.5 h-16 bg-purple-600 mb-3" />
        <div className="flex flex-col gap-3 bg-transparent">
          <a
            href="https://github.com/Riteshhh08"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl bg-[#1e1b4b] flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200 shadow-lg"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ritesh-vishwakarma08"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl bg-[#1e1b4b] flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200 shadow-lg"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="mailto:riteshvishwakarma.work@gmail.com"
            className="w-11 h-11 rounded-xl bg-[#1e1b4b] flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200 shadow-lg"
          >
            <MdEmail size={20} />
          </a>
        </div>
        <div className="w-0.5 h-16 bg-purple-600 mt-3" />
      </div>

      {/* Top navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] px-6 md:px-16 lg:px-24 flex items-center justify-between transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : ''
        } bg-white/95 backdrop-blur-md`}
      >
        {/* Logo + type animation */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-black text-lg">
            R
          </div>
          <span className="font-bold text-gray-900 text-lg">
            Ritesh{' '}
            <span className="text-gray-400">|</span>{' '}
            <span className="text-purple-600">
              <TypeAnimation
                sequence={[
                  'DevOps Engineer',
                  2000,
                  'Cloud Engineer',
                  2000,
                  'Full Stack Dev',
                  2000,
                  'Java Developer',
                  2000,
                ]}
                speed={60}
                repeat={Infinity}
              />
            </span>
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                active === link.id ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-purple-600 transition-all duration-200 ${
                  active === link.id ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Resume button */}
        <div className="hidden md:flex items-center">
          <a
            href="/Ritesh.Resume.pdf"
            download="Ritesh.Resume.pdf"
            className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-purple-700 transition flex items-center gap-2 shadow-lg shadow-purple-200"
          >
            Resume <FiDownload size={16} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded-full transform transition duration-200 ${
              open ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded-full transition-opacity duration-200 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded-full transform transition duration-200 ${
              open ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden pt-[80px]"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`text-lg font-semibold ${
                    active === link.id ? 'text-purple-600' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/Ritesh.Resume.pdf"
                download="Ritesh.Resume.pdf"
                className="mt-4 bg-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-purple-700 transition flex items-center gap-2 shadow-lg shadow-purple-200"
              >
                Resume <FiDownload size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
