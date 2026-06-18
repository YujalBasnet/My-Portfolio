import { useState } from "react";
import axios from "axios";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";


function Contact(){

    const [formData,setFormData] = useState({

        name:"",
        email:"",
        message:""

    });


    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };


    const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    alert("All fields are required");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email.trim())) {
    alert("Please enter a valid email address");
    return;
  }

  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/contact`,
      formData
    );

    alert("Message sent successfully");

    setFormData({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    console.log(error);
    alert("Failed to send message");
  }


    };


    return (
  <section
    id="contact"
    className="py-20 px-6 md:px-20 bg-slate-950 text-white"
  >
    <h2 className="text-4xl font-bold text-center">
      Contact Me
    </h2>

    <div className="flex flex-col md:flex-row justify-center gap-16 mt-12">

      {/* Contact Info */}

      <div className="md:w-1/3">

        <h3 className="text-2xl font-semibold mb-4">
          Let's Connect
        </h3>

        <p className="text-gray-300 mb-8">
          Open to freelance work, internships, and collaboration opportunities.
        </p>

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <a
              href="https://wa.me/9741881756"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              +977 9741881756
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <a
              href="mailto:laxmikhulalbasnet@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              laxmikhulalbasnet@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span>Morang, Nepal</span>
          </div>

        </div>
      </div>

      {/* Contact Form */}

      <form
        onSubmit={handleSubmit}
        className="md:w-1/2"
      >

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="
          w-full
          p-3
          mb-4
          rounded
          bg-white
          text-black
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400
          "
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="
          w-full
          p-3
          mb-4
          rounded
          bg-white
          text-black
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400
          "
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="
          w-full
          p-3
          rounded
          bg-white
          text-black
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400
          "
        />

        <button
          className="
          mt-5
          bg-cyan-400
          px-8
          py-3
          rounded
          text-black
          font-bold
          hover:bg-cyan-300
          transition
          "
        >
          Send Message
        </button>

      </form>

    </div>
  </section>
);
}


export default Contact;