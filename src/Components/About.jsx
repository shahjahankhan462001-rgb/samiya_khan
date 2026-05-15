import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";
import profile from "../assets/hero.png";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-28 px-6 bg-[#020617] overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />

      {/* Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >

          <p className="text-cyan-400 tracking-[5px] uppercase mb-10 text-lg">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Passionate About
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Web Development
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />

        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative flex justify-center"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl opacity-20 rounded-3xl" />

            {/* Main Card */}
            <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

              <img
                src={profile}
                alt="about"
                className="rounded-2xl object-cover w-full h-[320px] sm:h-[380px] md:h-[450px]"
              />

              {/* Floating Card (hidden on mobile) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -bottom-8 -right-6 hidden sm:block bg-[#0f172a] border border-cyan-400/20 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-xl"
              >

                <h3 className="text-3xl font-bold text-cyan-400">
                  10+
                </h3>

                <p className="text-gray-300">
                  Projects Created
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold text-white leading-tight mb-8">

              Creating
              <span className="text-cyan-400"> Modern</span>{" "}
              and
              <span className="text-purple-400"> Professional</span>{" "}
              Digital Experiences

            </h3>

            <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-9 mb-10">
              I am a Full Stack Developer focused on building modern, responsive web applications with clean UI/UX design and smooth user experiences. I am also continuously learning AI/ML and DSA with Java to strengthen my development and problem-solving skills.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl mb-4">
                  <FaCode />
                </div>

                <h4 className="text-white font-semibold text-xl mb-2">
                  Clean Code
                </h4>

                <p className="text-gray-400 text-sm leading-6">
                  Writing optimized and maintainable code.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-2xl mb-4">
                  <FaLaptopCode />
                </div>

                <h4 className="text-white font-semibold text-xl mb-2">
                  Responsive
                </h4>

                <p className="text-gray-400 text-sm leading-6">
                  Fully responsive modern web applications.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 text-2xl mb-4">
                  <FaPalette />
                </div>

                <h4 className="text-white font-semibold text-xl mb-2">
                  UI Design
                </h4>

                <p className="text-gray-400 text-sm leading-6">
                  Beautiful and attractive user interfaces.
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
}