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
    name: "DSA with Java",
    icon: <FaBrain />,
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "C++ Basic",
    icon: <SiCplusplus />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Django REST",
    icon: <SiDjango />,
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "SQL / MySQL",
    icon: <SiMysql />,
    color: "from-sky-400 to-blue-600",
  },
  {
    name: "AI / ML learner",
    icon: <FaBrain />,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "React Projects",
    icon: <FaMobileAlt />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Database",
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
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            My Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">

            Technical
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Skills
            </span>

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">

            Full Stack Developer with experience in
            modern frontend, backend, mobile app
            development, AI/ML learning and real-world
            live projects.

          </p>

          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-8 rounded-full" />

        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
          >

            <h3 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              2+
            </h3>

            <h4 className="text-2xl font-semibold text-white mb-3">
              Years Learning
            </h4>

            <p className="text-gray-400 leading-7">
              Continuous learning in frontend,
              backend, AI/ML and app development.
            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
          >

            <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Live
            </h3>

            <h4 className="text-2xl font-semibold text-white mb-3">
              Real Projects
            </h4>

            <p className="text-gray-400 leading-7">
              Worked on Mecaps Automation, Reatuarant management system , Student management system
              Hospital Discovery and FullPyDuck App.
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
          >

            <h3 className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Full
            </h3>

            <h4 className="text-2xl font-semibold text-white mb-3">
              Stack Developer
            </h4>

            <p className="text-gray-400 leading-7">
              Building responsive websites,
              APIs and modern applications.
            </p>

          </motion.div>

        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:border-cyan-400/40 transition-all duration-500"
            >

              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${skill.color} transition-all duration-500`} />

              {/* Icon */}
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-4xl text-white shadow-2xl mb-6`}>

                {skill.icon}

              </div>

              {/* Skill Name */}
              <h3 className="relative text-2xl font-bold text-white mb-4">

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