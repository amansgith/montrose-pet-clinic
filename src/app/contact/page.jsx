"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Contact Us
      </h1>

      {/* Contact Info & Working Hours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Working Hours */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Working Days</h3>
          <div className="grid grid-cols-2 gap-4 text-lg text-gray-600 mb-6">
            <div>
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div>
              <p>8:30AM – 4:30PM</p>
              <p>8:30AM – 4:30PM</p>
              <p>8:30AM – 4:30PM</p>
              <p>8:30AM – 4:30PM</p>
              <p>8:30AM – 4:30PM</p>
              <p>9:00AM – 1:00PM</p>
              <p>Closed</p>
            </div>
          </div>
          <p className="text-sm text-red-600 mb-6">
            *We are closed for statutory holidays.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Information
          </h3>
          <ul className="text-lg text-gray-600">
            <li className="flex items-center gap-2 mb-2">
              <FaPhone className="text-primary" /> +1 (780) 929 7363
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-primary" /> info@montrosepetclinic.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> 6002 29 Ave, Beaumont, AB T4X 0H5, Canada
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 uppercase">
            Please Send Us a Review
          </h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded-md flex justify-center items-center gap-2 hover:bg-secondary transition"
            >
              🐶 Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12 w-full h-[400px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d327332.3641928253!2d-113.42380164905036!3d53.32930458543105!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01cc6146d30b7%3A0x66ba5d38e58fdc80!2sMontrose%20Pet%20Clinic%20Inc!5e1!3m2!1sen!2sus!4v1742122764950!5m2!1sen!2sus"
          className="w-full h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
