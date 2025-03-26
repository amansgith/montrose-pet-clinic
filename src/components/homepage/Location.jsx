"use client";
import React, { useState } from "react";
import DOMPurify from "dompurify";

const Location = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(null); // New state for form status
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true

    // Sanitize form data
    const sanitizedFormData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      message: DOMPurify.sanitize(formData.message),
    };

    try {
      const response = await fetch('/api/send-query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: sanitizedFormData }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData(initialFormData); // Reset form data
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus("error");
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Ask us Anything
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-3 resize-none border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-md flex justify-center items-center gap-2 hover:bg-secondary transition"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                ) : (
                  "🐶 Send Message"
                )}
              </button>
            </form>
            {formStatus === "success" && (
              <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {formStatus === "error" && (
              <p className="mt-4 text-red-600">Error sending message. Please try again.</p>
            )}
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d327332.3641928253!2d-113.42380164905036!3d53.32930458543105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01cc6146d30b7%3A0x66ba5d38e58fdc80!2sMontrose%20Pet%20Clinic%20Inc!5e1!3m2!1sen!2sus!4v1742122764950!5m2!1sen!2sus"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;