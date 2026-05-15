import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        formData
      );

      alert("Message Sent Successfully");

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#020617] overflow-hidden"
    >

      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0,y:60 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:1 }}
          viewport={{ once:true }}
          className="text-center mb-24"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Contact Me
          </p>

          <h2 className="text-5xl font-black text-white">

            Let's Build
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Something Amazing
            </span>

          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity:0,x:-80 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:1 }}
          >

            <h3 className="text-4xl font-black text-white mb-8">
              Ready To Turn Your
              <span className="text-cyan-400">
                {" "}Ideas
              </span>
            </h3>

            <div className="space-y-6">

              <div className="flex gap-5 p-6 bg-white/5 rounded-3xl">

                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center text-white">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <h4 className="text-white">
                    shahjahankhan462001@gmail.com
                  </h4>
                </div>

              </div>


              <div className="flex gap-5 p-6 bg-white/5 rounded-3xl">

                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <h4 className="text-white">
                    +91 6264605955
                  </h4>
                </div>

              </div>

              <div className="flex gap-5 p-6 bg-white/5 rounded-3xl">

                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400">
                    Bhopal
                  </p>

                  <h4 className="text-white">
                    India
                  </h4>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              <a href="#">
                <FaGithub className="text-white text-2xl"/>
              </a>

              <a href="#">
                <FaLinkedin className="text-white text-2xl"/>
              </a>

              <a href="#">
                <FaInstagram className="text-white text-2xl"/>
              </a>

            </div>

          </motion.div>


          {/* RIGHT FORM */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity:0,x:80 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:1 }}
            className="bg-white/5 p-10 rounded-[40px]"
          >

            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-[#0f172a] p-5 rounded-2xl text-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-[#0f172a] p-5 rounded-2xl text-white"
              />

            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-[#0f172a] p-5 rounded-2xl text-white mb-6"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Message..."
              className="w-full bg-[#0f172a] p-5 rounded-2xl text-white mb-8"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-5 rounded-2xl text-white flex justify-center items-center gap-3"
            >

              <FaPaperPlane />

              {loading
                ? "Sending..."
                : "Send Message"}

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}