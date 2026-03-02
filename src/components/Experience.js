import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaJava } from 'react-icons/fa';

const experiences = [
  {
    side: 'left',
    title: 'IT Support Engineer',
    company: 'Wealthy Ways',
    period: 'Oct 2025 - Jan 2026',
    icon: FaLaptop,
    iconColor: '#7C3AED',
    points: [
      'Managed and supported 20+ Linux systems — installation, configuration, troubleshooting',
      'Monitored CPU, memory and disk performance ensuring smooth system operation',
      'Implemented website updates and feature changes for 3+ marketing campaigns',
      'Resolved 20+ hardware/software/network issues weekly maintaining 99% system reliability',
    ],
  },
  {
    side: 'right',
    title: 'Java Full Stack Development Trainee',
    company: 'Q SPIDER',
    period: 'Dec 2024 - Feb 2025',
    icon: FaJava,
    iconColor: '#ED8B00',
    points: [
      'Completed 3-month Java Full Stack training — Core Java, SQL, frontend technologies',
      'Developed 5+ mini-projects applying backend and frontend concepts',
      'Solved 100+ coding problems and debugging exercises',
      'Built REST-based modules and responsive UI components in practical labs',
    ],
  },
];

function Experience() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-gray-900">Work Experience.</h2>

        <div className="relative mt-16">
          {/* Center line for md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2" />

          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isLeft = exp.side === 'left';
            return (
              <div key={exp.title} className="relative flex flex-col md:flex-row items-start mb-24">
                {/* Left card on md+ when side === left */}
                {isLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-[45%] w-full md:mr-auto"
                  >
                    <div className="bg-[#1e1b4b] rounded-2xl p-7 relative text-white">
                      <div className="hidden md:block absolute right-0 top-8 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-[#1e1b4b] translate-x-full" />
                      <div className="w-10 h-1 bg-purple-400 rounded mb-4" />
                      <h3 className="font-bold text-xl">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-purple-400 font-medium">{exp.company}</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {exp.points.map((p) => (
                          <li key={p} className="text-gray-300 text-sm flex gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Date opposite side on md+ */}
                <div
                  className={`hidden md:flex md:w-[45%] items-start pt-4 ${
                    isLeft ? 'ml-auto pl-8' : 'mr-auto pr-8 justify-end'
                  }`}
                >
                  <span className="text-gray-600 font-medium text-sm">{exp.period}</span>
                </div>

                {/* Right card when side === right */}
                {!isLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-[45%] w-full md:ml-auto"
                  >
                    <div className="bg-[#1e1b4b] rounded-2xl p-7 relative text-white">
                      <div className="hidden md:block absolute left-0 top-8 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[16px] border-r-[#1e1b4b] -translate-x-full" />
                      <div className="w-10 h-1 bg-purple-400 rounded mb-4" />
                      <h3 className="font-bold text-xl">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-purple-400 font-medium">{exp.company}</span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {exp.points.map((p) => (
                          <li key={p} className="text-gray-300 text-sm flex gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Center icon for md+ */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#1e1b4b] border-2 border-purple-400 items-center justify-center z-10 shadow-lg">
                  <Icon size={24} color={exp.iconColor} />
                </div>

                {/* Mobile layout: full width card + date above */}
                <div className="md:hidden w-full">
                  <p className="text-gray-600 font-medium text-sm mb-2">{exp.period}</p>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-[#1e1b4b] rounded-2xl p-7 text-white mt-1"
                  >
                    <div className="w-10 h-1 bg-purple-400 rounded mb-4" />
                    <h3 className="font-bold text-xl">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-purple-400 font-medium">{exp.company}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((p) => (
                        <li key={p} className="text-gray-300 text-sm flex gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;

