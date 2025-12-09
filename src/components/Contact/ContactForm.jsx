import React from "react";
import bgImage from "../../assets/contact-bg.jpg"; // your local background image

const ContactForm = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

     
      <div className="relative z-10 text-center text-white px-6 md:px-16">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6 text-lg">
          We'd love to hear from you! Fill out the form or contact us directly.
        </p>

        <form className="max-w-lg mx-auto bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 rounded-md outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 rounded-md outline-none resize-none"
            rows={4}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
