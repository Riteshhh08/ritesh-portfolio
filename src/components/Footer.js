import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-[#1e1b4b] py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white font-bold text-lg">Ritesh Vishwakarma</p>
        <p className="text-purple-300 text-sm mt-1">DevOps &amp; Cloud Engineer</p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <a
            href="https://github.com/Riteshhh08"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/ritesh-vishwakarma08"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="mailto:riteshvishwakarma.work@gmail.com"
            className="text-gray-400 hover:text-white transition"
          >
            <MdEmail size={22} />
          </a>
        </div>
        <p className="text-gray-500 text-xs mt-6">
          © 2026 Ritesh Vishwakarma. Built with React &amp; ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;

