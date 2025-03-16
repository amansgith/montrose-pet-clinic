import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 border-t">
      <div className="container mx-auto px-4 lg:px-12 flex flex-wrap gap-1 justify-between items-center md:items-start space-y-10 md:space-y-0">
        
        {/* Logo & Description */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <Image 
            src="/brandlogo.webp" 
            alt="Montrose Pet Clinic" 
            width={250} 
            height={100} 
            className="mx-auto md:mx-0 w-40"
          />
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Montrose Pet Clinic is proud to serve Beaumont, AB since our opening in 2013.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-red-500 mb-4">Quick Links</h3>
          <ul className="text-gray-700 space-y-2">
            {["Home", "About Us", "Our Team", "Service", "Gallery", "Contact Us"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-red-500 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-red-500 mb-4">Contact Us</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Unit 109, 6002 29 Ave, Beaumont, AB T4X 0H5, Canada
          </p>
          <p className="text-gray-700 font-bold mt-2 text-sm md:text-base">
            Phone: <span className="font-normal">780-929-7363</span>
          </p>
          <p className="text-gray-700 font-bold text-sm md:text-base">
            Email: <span className="font-normal">infomontrosepet@gmail.com</span>
          </p>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-red-500 mb-4">Join Us on Social Media</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-pink-500 text-2xl hover:text-pink-700 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white text-center py-4 mt-10">
        <p className="text-sm md:text-base">
          Copyright © {new Date().getFullYear()} Montrose Pet Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
