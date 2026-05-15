import { motion } from "framer-motion";
import Mecaps from "../assets/Mecaps.jpg";
import Hospital from "../assets/Hospital.jpg";
import Game from "../assets/Game.jpg";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
 {
  title: "Mecaps Automation",
  category: "Live mecaps automation Website",

  description:
    "A modern mecaps automation platform with responsive UI, appointment modules and professional dashboard design.",

  image: Mecaps,

  tech: [
    "React",
    "Tailwind Css",
    "JavaScript",
    "DRF",
    "SQL",
    
  ],

  gradient: "from-cyan-500 to-blue-600",

  live: "https://mecaps.in",   
  github: "",
},

  {
    title: "Hospital Discovery",
    category: "Healthcare Platform",

    description:
      "A healthcare discovery platform helping users find hospitals, doctors and healthcare services with clean responsive design.",

    image: Hospital,

    tech: [
      "React",
      "Tailwind css",
      "DRF",
      "MySQL",
      "JavaScript"
    ],

    gradient: "from-purple-500 to-pink-500",

    live: "#",
    github: "https://github.com/Subhanamaroof/hospital_discovery_FE.git",
  },

  {
    title: "FullPyDuck App",
    category: "Mobile Application",

    description:
      "A complete app project with modern UI, authentication system and responsive experience across devices.",

    image: Game,

    tech: [
      "React Native",
      "JavaScript",
      "API",
      "Firebase",
    ],

    gradient: "from-orange-500 to-red-500",

    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-[#020617] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 tracking-[5px] uppercase mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Real-world projects showcasing my frontend,
            full stack and mobile application development
            skills with modern technologies.
          </p>

          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Projects */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* IMAGE */}
              <div
                className={`relative group ${
                  index % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} blur-3xl opacity-20 rounded-3xl`}
                />

                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl hover:border-cyan-400/30 transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full text-white text-sm">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`${
                  index % 2 !== 0 ? "lg:col-start-1" : ""
                }`}
              >
                <p
                  className={`text-lg font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}
                >
                  Featured Project
                </p>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-lg leading-9 mb-10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 mb-10">
                  {project.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl text-gray-300 hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 bg-gradient-to-r ${project.gradient} px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl hover:scale-105 transition-all duration-300`}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl text-gray-300 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-32"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-5xl font-black text-cyan-400 mb-3">
              10+
            </h3>

            <p className="text-gray-400">
              Total Projects
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-5xl font-black text-purple-400 mb-3">
              3+
            </h3>

            <p className="text-gray-400">
              Live Websites
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-5xl font-black text-pink-400 mb-3">
              Full
            </h3>

            <p className="text-gray-400">
              Stack Projects
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-5xl font-black text-orange-400 mb-3">
              App
            </h3>

            <p className="text-gray-400">
              Development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}