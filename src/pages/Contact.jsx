import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
          Contact Me
        </h1>
        <p className="text-gray-600 mb-6 text-center text-sm md:text-base">
          Send me a message, I’d love to connect with you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-sm md:text-base"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-400 transition-colors text-white font-semibold rounded-lg shadow-md text-sm md:text-base"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-xs md:text-sm space-y-1">
          <p>
            Email: <span className="text-blue-500">your.email@example.com</span>
          </p>
          <p>
            Phone: <span className="text-blue-500">+91 1234567890</span>
          </p>
          <p>
            Location: <span className="text-blue-500">Ahmedabad, India</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
