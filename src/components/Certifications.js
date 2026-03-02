import React from 'react';
import { FaAws, FaLaptop, FaJava } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const certs = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    icon: FaAws,
    iconColor: '#FF9900',
    strip: 'from-orange-400 to-yellow-400',
  },
  {
    title: 'AWS Solutions Architecture Simulation',
    issuer: 'Forage',
    icon: FaAws,
    iconColor: '#FF9900',
    strip: 'from-orange-500 to-red-400',
  },
  {
    title: 'Deloitte Technology Job Simulation',
    issuer: 'Forage',
    icon: MdWork,
    iconColor: '#86EFAC',
    strip: 'from-green-400 to-teal-400',
  },
  {
    title: 'IT Support and Systems Training',
    issuer: 'Wealthy Ways',
    icon: FaLaptop,
    iconColor: '#60A5FA',
    strip: 'from-blue-400 to-purple-400',
  },
  {
    title: 'Java Full Stack Training',
    issuer: 'Q Spider',
    icon: FaJava,
    iconColor: '#ED8B00',
    strip: 'from-red-400 to-orange-400',
  },
];

function Certifications() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-purple-600 font-semibold text-sm tracking-widest uppercase">
          ACHIEVEMENTS
        </p>
        <h2 className="text-5xl font-black text-gray-900 mt-2">Certifications.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certs.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${cert.strip}`} />
                <div className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                    <Icon size={28} color={cert.iconColor} />
                  </div>
                  <h3 className="font-bold text-gray-900 mt-4 text-sm">{cert.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                  <div className="mt-4 mx-auto w-fit bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                    ✓ Certified
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

