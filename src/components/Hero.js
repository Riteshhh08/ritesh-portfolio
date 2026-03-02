import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute bottom-10 left-16 w-72 h-72 rounded-full bg-purple-400 opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 w-32 h-32 rounded-full bg-gray-300 opacity-50 blur-xl" />

      <div className="flex flex-col lg:flex-row w-full px-6 md:px-16 lg:px-24 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[55%]"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Hi, I&apos;m <span className="text-purple-600">Ritesh</span>
          </h1>
          <div className="mt-6">
            <p className="text-purple-600 font-bold text-xl md:text-2xl">
              Build. Deploy. Scale.
            </p>
            <p className="text-gray-600 text-lg md:text-xl mt-1">
              Engineering Cloud Solutions,
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              One Pipeline at a Time.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              type="button"
              onClick={() => scrollTo('projects')}
              className="bg-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-purple-700 shadow-lg shadow-purple-200 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              View My Work
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollTo('contact')}
              className="border-2 border-purple-600 text-purple-600 px-8 py-3.5 rounded-full font-semibold hover:bg-purple-50 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Let&apos;s Connect
            </motion.button>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[45%] flex items-center justify-center relative"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-purple-200 opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <motion.div
            className="relative z-10 w-52 md:w-60 rounded-2xl shadow-2xl overflow-hidden"
            style={{ transform: 'rotate(-6deg)' }}
            animate={{ y: [-10, 10] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            {/* Top clip holder */}
            <div className="bg-gray-800 flex items-center justify-center py-2">
              <div className="w-6 h-6 rounded-full bg-gray-600 border-2 border-gray-400" />
            </div>

            {/* Black bar with VIP PASS */}
            <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
              <span className="text-white font-black text-sm tracking-widest">VIP PASS</span>
              <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              </div>
            </div>

            {/* Rainbow stripe */}
            <div
              className="h-2 w-full"
              style={{
                background:
                  'linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#8b5cf6)',
              }}
            />

            {/* Card body */}
            <div className="bg-[#f5f0e8] px-6 py-5 text-center">
              <div className="w-24 h-24 rounded-full mx-auto shadow-lg overflow-hidden">
                <img
                  src="/avatar.png"
                  alt="Ritesh portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-black text-gray-900 text-xs mt-3 tracking-wider uppercase">
                RITESH VISHWAKARMA
              </p>
              <p className="text-gray-600 text-xs mt-1">DevOps &amp; Cloud Engineer</p>
              <div className="flex items-end justify-center gap-0.5 mt-4 h-8">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    className="bg-gray-800"
                    style={{
                      width: '2px',
                      height: `${Math.random() * 20 + 10}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg width="28" height="44" viewBox="0 0 28 44" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1"
            y="1"
            width="26"
            height="42"
            rx="13"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="2"
          />
          <motion.rect
            x="12"
            y="8"
            width="4"
            height="8"
            rx="2"
            fill="#7C3AED"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;
