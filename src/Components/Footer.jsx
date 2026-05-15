// Footer.jsx

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-white/10 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">

        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* Logo */}
          <div>

            <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">

              Shahjahan

            </h2>

            <p className="text-gray-400 leading-7">

              Full Stack Developer passionate about
              building modern websites, apps and
              digital experiences.

            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:items-center">

            <h3 className="text-white text-xl font-semibold mb-2">
              Quick Links
            </h3>

            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-all"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-400 hover:text-cyan-400 transition-all"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-all"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-all"
            >
              Contact
            </a>

          </div>

          {/* Social */}
          <div className="md:flex md:flex-col md:items-end">

            <h3 className="text-white text-xl font-semibold mb-5">
              Follow Me
            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-gray-300 hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-gray-300 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-gray-300 hover:bg-pink-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">

            © 2026 Shahjahan. All Rights Reserved.

          </p>

          <p className="flex items-center gap-2 text-gray-500">

            Made With
            <FaHeart className="text-red-500" />
            By Shahjahan

          </p>

        </div>

      </div>

    </footer>
  );
}