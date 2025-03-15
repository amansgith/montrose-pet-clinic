import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white pt-10  border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo & Description */}
        <div className="text-center md:text-left max-w-xs">
          <Image src="/brandlogo.webp" alt="Montrose Pet Clinic" width={150} height={50} className="mx-auto md:mx-0 w-40" />
          <p className="text-gray-600 mt-4">
            Montrose Pet Clinic is proud to serve Beaumont, AB since our opening in 2013.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">Quick Links</h3>
          <ul className="text-gray-700 space-y-2">
            <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-red-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Our Team</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Service</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Gallery</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">Contact Us</h3>
          <p className="text-gray-700">Unit 109, 6002 29 Ave, Beaumont, AB T4X 0H5, Canada</p>
          <p className="text-gray-700 font-bold mt-2">Phone: <span className="font-normal">780-929-7363</span></p>
          <p className="text-gray-700 font-bold">Email: <span className="font-normal">infomontrosepet@gmail.com</span></p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-4">Join Us on Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800 transition"><FaFacebookF /></a>
            <a href="#" className="text-pink-500 text-2xl hover:text-pink-700 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white text-center py-4 mt-10">
        <p>Copyright © 2025 Montrosepetclinic. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
