import Image from "next/image";
import React from "react";
import { FaCat } from "react-icons/fa";

const ClinicTour = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100">
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Take a Tour of Our Clinic
        </h2>
        <p className="text-lg text-gray-600 mb-6">We’re open Mon-Sat</p>
        <button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition">
          <FaCat /> Request an Appointment
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/cta.jpg"
          alt="Clinic Tour"
          width={500}
          height={300}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ClinicTour;
