"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-1 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Contact Us
      </h1>

      {/* Contact Info & Working Hours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Working Hours */}
        <div className="md:w-full mt-6 md:mt-0">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Opening Hours
            </h3>
            <div className="grid grid-cols-2 md:text-lg text-gray-600 mb-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Contact Information
                </h3>
                <ul className=" text-gray-600 mb-4">
                  <li className="flex items-center gap-2 mb-2">
                    <FaPhone className="text-primary" /> +1 (780) 929 7363
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaEnvelope className="text-primary" />{" "}
                    infomontrosepet@gmail.com
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <FaMapMarkerAlt className="text-primary" /> 6002 29 Ave,
                    Beaumont, AB T4X 0H5, Canada
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  In Case of Emergency
                </h3>
                <ul className="list-outside text-gray-700 leading-relaxed">
                  <li>
                    Pulse Veterinary:{" "}
                    <a
                      href="tel:7805709999"
                      className="text-blue-600 hover:underline"
                    >
                      780-570-9999
                    </a>
                  </li>
                  <li>
                    Guardian Veterinary Centre:{" "}
                    <a
                      href="tel:7804365880"
                      className="text-blue-600 hover:underline"
                    >
                      780-436-5880
                    </a>
                  </li>
                  <li>
                    Boreal Veterinary Centre:{" "}
                    <a
                      href="tel:7803064400"
                      className="text-blue-600 hover:underline"
                    >
                      780-306-4400
                    </a>
                  </li>
                  <li>
                    Vet ER:{" "}
                    <a
                      href="tel:8254804881"
                      className="text-blue-600 hover:underline"
                    >
                      825-480-4881
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
        <h1 className="text-center text-3xl my-2 text-primary font-bold">
          Find us on the Map
        </h1>
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
