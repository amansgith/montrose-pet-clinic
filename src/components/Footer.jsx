import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
            <li>
              <Link href="/">
                <span className="hover:text-red-500 transition">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-red-500 transition">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/about/team">
                <span className="hover:text-red-500 transition">Our Team</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span className="hover:text-red-500 transition">Service</span>
              </Link>
            </li>
            <li>
              <Link href="/misc/gallery">
                <span className="hover:text-red-500 transition">Gallery</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-red-500 transition">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-red-500 mb-4">Contact Us</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Unit 109, 6002 29 Ave, Beaumont, AB T4X 0H5, Canada
          </p>
          <p className="text-gray-700 font-bold mt-2 text-sm md:text-base">
            Phone: <Link href="tel:7809297363"><span className="font-normal text-blue-600 hover:text-red-500 transition">780-929-7363</span></Link>
          </p>
          <p className="text-gray-700 font-bold text-sm md:text-base">
            Email: <Link href="mailto:infomontrosepet@gmail.com"><span className="font-normal text-blue-600 hover:text-red-500 transition">infomontrosepet@gmail.com</span></Link>
          </p>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-red-500 mb-4">Join Us on Social Media</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="https://www.facebook.com/MontrosePetClinic">
              <span className="text-blue-600 text-2xl hover:text-blue-800 transition">
                <FaFacebookF />
              </span>
            </Link>
            <Link href="https://www.instagram.com/montrose_pet_clinic">
              <span className="text-pink-500 text-2xl hover:text-pink-700 transition">
                <FaInstagram />
              </span>
            </Link>
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