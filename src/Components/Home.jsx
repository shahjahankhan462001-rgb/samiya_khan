import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import profile from "../assets/hero.png";

const LINKS = {
  resume: "/resume.pdf",
  contact: "#contact",
  github: "https://github.com/shahjahankhan462001-rgb",
  linkedin: "https://www.linkedin.com/in/shahjahan-850819370/",
  instagram: "https://instagram.com/your-username",
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-cyan-400/30 backdrop-blur-xl px-5 py-2 rounded-full mb-8">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300 tracking-wide">
              Available For Freelance / Internship
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Shahjahan
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-300 mb-8">
            FullStack Developer &{" "}
            <span className="text-cyan-400">UI Designer</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg leading-7 sm:leading-8 max-w-2xl mb-8 md:mb-10 text-gray-400">
            I build modern, responsive and animated web applications using
            React, Tailwind CSS and JavaScript with clean UI/UX design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

            <a
              href="/resume.pdf"
              download
              className="relative px-7 py-3 rounded-2xl font-semibold text-white overflow-hidden
              bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
              shadow-lg shadow-cyan-500/30
              transition-all duration-300 hover:scale-105
              flex items-center justify-center"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition-all duration-500" />
              <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-40 animate-pulse" />
              <span className="relative z-10 text-lg leading-none">
                Download CV
              </span>
            </a>

            <a
              href={LINKS.contact}
              className="border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl text-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-12">

            <a
              href={LINKS.github}
              target="_blank"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-gray-300 hover:bg-black hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href={LINKS.linkedin}
              target="_blank"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-gray-300 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href={LINKS.instagram}
              target="_blank"
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-gray-300 hover:bg-pink-500 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-3xl opacity-40 animate-pulse" />

            {/* Image */}
            <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 p-[5px] shadow-[0_0_80px_rgba(34,211,238,0.4)]">

              <div className="w-full h-full rounded-full bg-[#0f172a] overflow-hidden flex items-center justify-center">

                <img
                  src={profile}
                  alt="profile"
                  className="w-[92%] h-[92%] rounded-full object-cover hover:scale-105 transition-all duration-500"
                />

              </div>

            </div>

            {/* Floating Cards (hidden on mobile) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 -left-10 hidden sm:block bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl"
            >
              <h3 className="text-cyan-400 font-bold text-xl">2+</h3>
              <p className="text-gray-300 text-sm">Years Learning</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-10 -right-10 hidden sm:block bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl"
            >
              <h3 className="text-purple-400 font-bold text-xl">10+</h3>
              <p className="text-gray-300 text-sm">Projects</p>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}