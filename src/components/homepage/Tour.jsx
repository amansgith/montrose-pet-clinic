"use client"
import Image from "next/image";
import React from "react";
import {
  FaCat,
  FaDog,
  FaPaw,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const ClinicTour = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center text-xl md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Take a Tour of Our Clinic
        </h2>
        <p className="text-lg text-gray-600 mb-6">We’re open Mon-Sat</p>
        <Link href="/newClients/registration">
          <button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition mb-4">
            <FaCat /> Request an Appointment
          </button>
        </Link>
        <Link href="/virtual-tour">
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition mb-4">
            <FaDog /> Take a Virtual Tour
          </button>
        </Link>
        <Link href="/contact">
          <button className="flex items-center gap-2 bg-green-400 text-white px-6 py-3 rounded-md hover:bg-secondary transition">
            <FaPaw /> Send us a Review
          </button>
        </Link>
      </div>

      {/* Right Side - Image */}
      {/* <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/cta.jpg"
          alt="Clinic Tour"
          width={500}
          height={300}
          className="w-full rounded-lg shadow-lg"
        />
      </div> */}

      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Opening Hours
          </h3>
          <div className="grid grid-cols-2 gap-4 md:text-lg text-gray-600 mb-6">
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
          <ul className="text-lg text-gray-600 mb-4">
            <li className="flex items-center gap-2 mb-2">
              <FaPhone className="text-primary" /> +1 (780) 929 7363
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-primary" /> infomontrosepet@gmail.com
            </li>
            <li className="flex items-center gap-2 mb-4">
              <FaMapMarkerAlt className="text-primary" /> 6002 29 Ave, Beaumont,
              AB T4X 0H5, Canada
            </li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            In Case of Emergency (24/7 Available)
          </h3>
          <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
            <li>Pulse Veterinary: <a href="tel:7805709999" className="text-blue-600 hover:underline">780-570-9999</a></li>
            <li>Guardian Veterinary Centre: <a href="tel:7804365880" className="text-blue-600 hover:underline">780-436-5880</a></li>
            <li>Boreal Veterinary Centre Vet ER: <a href="tel:8254804881" className="text-blue-600 hover:underline">825-480-4881</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClinicTour;