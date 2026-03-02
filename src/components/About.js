import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCloud, FaCode } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';
import { MdAutorenew } from 'react-icons/md';

const cards = [
  { icon: FaCloud, color: '#3B82F6', label: 'Cloud Architecture' },
  { icon: SiDocker, color: '#2496ED', label: 'DevOps Engineering' },
  { icon: FaCode, color: '#7C3AED', label: 'Full Stack Dev' },
  { icon: MdAutorenew, color: '#10B981', label: 'CI/CD Automation' },
];

function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <p className="text-purple-600 font-semibold text-sm tracking-widest uppercase">
          OVERVIEW
        </p>
        <h2 className="text-5xl font-black text-gray-900 mt-2">Overview.</h2>
        <p className="text-gray-600 text-lg leading-relaxed mt-6 max-w-4xl">
          Hi, I&apos;m Ritesh Vishwakarma, a Computer Science graduate from MGM College of
          Engineering, University of Mumbai (2025). I&apos;m passionate about building scalable
          cloud infrastructure and automating deployment pipelines. My expertise spans DevOps,
          Cloud Engineering, and Full Stack Development — with hands-on experience in AWS, Azure,
          Docker, GitHub Actions, CI/CD pipelines, and React. I enjoy solving real-world problems
          by combining cloud-native solutions with clean, efficient code.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-3xl p-8 text-center border-2 border-purple-200 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-10 h-10 bg-purple-100 rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-10 h-10 bg-purple-100 rounded-tr-3xl" />
                <Icon size={52} color={card.color} className="mx-auto" />
                <p className="font-bold text-purple-600 text-base mt-4">{card.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

