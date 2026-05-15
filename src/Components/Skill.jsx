import { motion } from "framer-motion";

import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaMobileAlt,
  FaBrain,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiCplusplus,
  SiReact,
} from "react-icons/si";

const skills = [
  {
    name: "React JS",
    icon: <FaReact />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "React Native",
    icon: <SiReact />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "from-cyan-400 to-teal-500",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "from-yellow-400 to-blue-500",
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "from-red-400 to-orange-500",
  },
  {
    name: "DSA (Java)",
    icon: <FaBrain />,
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "C++ Basics",
    icon: <SiCplusplus />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Django / DRF",
    icon: <SiDjango />,
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "SQL / MySQL",
    icon: <SiMysql />,
    color: "from-sky-400 to-blue-600",
  },
  {
    name: "AI / ML Fundamentals",
    icon: <FaBrain />,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Mobile App Dev",
    icon: <FaMobileAlt />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Database Systems",
    icon: <FaDatabase />,
    color: "from-indigo-500 to-purple-600",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-[#020617] overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4 text-sm md:text-base">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Technical
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Skills
            </span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-8">
            Full Stack Developer skilled in modern frontend,
            backend development, mobile applications, AI/ML fundamentals
            and real-world project implementation.
          </p>

          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          {[
            {
              title: "Learning Journey",
              value: "2+",
              desc: "Years of consistent learning in development & problem solving.",
              color: "from-cyan-400 to-blue-500",
            },
            {
              title: "Real Projects",
              value: "5+",
              desc: "Built full stack projects like Mecaps, Hospital Discovery & apps.",
              color: "from-purple-400 to-pink-500",
            },
            {
              title: "Full Stack Focus",
              value: "Pro",
              desc: "Frontend + Backend + APIs + UI/UX development.",
              color: "from-yellow-400 to-orange-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
            >
              <h3 className={`text-4xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                {item.value}
              </h3>
              <h4 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-7 text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:border-cyan-400/40 transition-all duration-500"
            >

              {/* Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${skill.color} transition-all duration-500 rounded-3xl`} />

              {/* Icon */}
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-4xl text-white mb-6`}>
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="relative text-xl md:text-2xl font-bold text-white mb-4">
                {skill.name}
              </h3>

              {/* Line */}
              <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${skill.color}`} />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}