import React, { useEffect, useState } from 'react';
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { SiJavascript, SiMysql, SiGithubactions, SiOpenai, SiVercel } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscTerminal } from 'react-icons/vsc';

const skills = [
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Azure', icon: FaAws, color: '#0078D4' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'OpenAI API', icon: SiOpenai, color: '#412991' },
  { name: 'VS Code', icon: FaReact, color: '#007ACC' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'REST APIs', icon: TbApi, color: '#7C3AED' },
  { name: 'CI/CD', icon: VscTerminal, color: '#D33833' },
];

function Skills() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(skills.length - perView, 0);

  const next = () => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  const prev = () => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  const CARD_WIDTH = 192; // w-48
  const GAP = 24;

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-purple-600 font-semibold text-sm tracking-widest uppercase">
          WHAT I KNOW
        </p>
        <h2 className="text-5xl font-black text-gray-900 mt-2">Skills.</h2>

        <div className="relative mt-12 overflow-hidden">
          <button
            type="button"
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-purple-100 cursor-pointer z-10"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-purple-100 cursor-pointer z-10"
          >
            <FaChevronRight className="text-gray-600" />
          </button>

          <div className="overflow-hidden">
            <div
              style={{
                display: 'flex',
                gap: `${GAP}px`,
                transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
                transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
              }}
            >
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="relative bg-white rounded-3xl p-8 text-center w-48 flex-shrink-0 border-2 border-purple-200 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute top-2 right-2 w-4 h-4 bg-purple-200 rounded-full opacity-70" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-purple-100 rounded-full opacity-70" />
                    <Icon size={52} color={skill.color} className="mx-auto" />
                    <p className="font-bold text-gray-800 text-sm mt-4">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

