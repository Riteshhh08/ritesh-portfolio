import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Azure Notes App',
    date: 'Jan 2026',
    description:
      'Containerized Node.js app on Azure App Service. Docker images pushed to Docker Hub via GitHub Actions CI/CD. Secure HTTPS public access.',
    tags: ['Docker', 'Azure', 'GitHub Actions', 'Node.js', 'CI/CD'],
    github: 'https://github.com/riteshvishwakarma08',
    live: '',
    gradient: 'from-blue-500 via-cyan-400 to-blue-300',
  },
  {
    title: 'AWS CI/CD Pipeline',
    date: 'Aug 2025',
    description:
      'Automated pipeline using AWS CodeCommit, CodeBuild, CodeArtifact, CodePipeline + SonarCloud quality gates. Reduced deployment effort by ~60%.',
    tags: ['AWS', 'CodePipeline', 'SonarCloud', 'IAM', 'S3', 'DevOps'],
    github: 'https://github.com/riteshvishwakarma08',
    live: '',
    gradient: 'from-orange-500 via-yellow-400 to-orange-300',
  },
  {
    title: 'GitHub User Finder',
    date: 'May 2025',
    description:
      'Responsive GitHub user search app. GitHub API integration for 1000+ profiles. Light/dark mode. API calls optimized — 25% faster load time.',
    tags: ['JavaScript', 'GitHub API', 'HTML', 'CSS', 'REST API'],
    github: 'https://github.com/riteshvishwakarma08',
    live: '',
    gradient: 'from-gray-700 via-gray-600 to-gray-500',
  },
  {
    title: 'Graph Algorithm Visualizer',
    date: 'July 2024',
    description:
      'Grid-based visualization of A*, BFS, DFS algorithms. Real-time shortest path rendering. Used by 100+ students for algorithm learning.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Algorithms', 'DSA'],
    github: 'https://github.com/riteshvishwakarma08',
    live: '',
    gradient: 'from-green-500 via-teal-400 to-emerald-300',
  },
];

function Projects() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-gray-900">Latest Projects.</h2>
        <p className="text-purple-500 text-lg mt-4 max-w-3xl">
          Projects showcasing my expertise in DevOps, Cloud Engineering, and Full Stack Development.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-purple-100/70 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div
                className={`h-52 bg-gradient-to-br ${project.gradient} relative flex items-end justify-start p-4`}
              >
                <span className="text-white font-black text-2xl drop-shadow-lg">
                  {project.title}
                </span>
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-purple-100 transition"
                >
                  <FiExternalLink className="text-gray-700" size={16} />
                </a>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900">{project.title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <span className="text-gray-400 text-xs">{project.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

