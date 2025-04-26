"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/brandlogo.webp";
import Link from "next/link";

// const services = [
//   // { name: "Radiology", href: "/services/radiology" },
//   // { name: "Puppy/Kitten Exam", href: "/services/puppy-kitten-exam" },
//   // { name: "Deworming", href: "/services/deworming" },
//   { name: "Illness Exam", href: "/services/illness-exam" },
//   { name: "Surgery", href: "/services/surgery" },
//   // { name: "Emergency Care", href: "/services/emergency-care" },
//   { name: "Laboratory Services", href: "/services/laboratory" },
//   // { name: "Dental Care", href: "/services/dentalcare" },
//   { name: "End of Life Services", href: "/services/eolservices" },
//   // { name: "Nutrition Consult", href: "/services/nutrition" },
//   { name: "Pet Insurance & Financing", href: "/services/insurance-finance" },
//   { name: "Miscellaneous Services", href: "/services/misc-services" },
//   // { name: "Geriatric Patient Care", href: "/services/geriatric-care" },

//   {
//     name: "Annual wellness exam & Preventative care",
//     href: "/services/wellness-exam-and-vaccination",
//   },
// ];

const about = [
  { name: "Why choose us?", href: "/about" },
  { name: "Our Mission and Values", href: "/about/mission-values" },
  { name: "Our Team", href: "/about/team" },
  { name: "Monthly Promotions", href: "/about/monthly-promotions" },
  { name: "Gallery", href: "/about/gallery" },
];

const wellnessplans = [
  {
    name: "Kitten Wellness Plans",
    href: "/misc/wellness-plans/kitten-wellness",
  },
  { name: "Puppy Wellness Plans", href: "/misc/wellness-plans/puppy-wellness" },
  {
    name: "Feline Wellness Plans",
    href: "/misc/wellness-plans/feline-wellness",
  },
  {
    name: "Canine Wellness Plans",
    href: "/misc/wellness-plans/canine-wellness",
  },
  { name: "Dental Plans", href: "/misc/wellness-plans/dental-plans" },
  { name: "Geriatric Plans", href: "/misc/wellness-plans/geriatric-plans" },
  {
    name: "Reproductive Surgery Plans",
    href: "/misc/wellness-plans/reproductive-plans",
  },
];

const services = [
  {
    name: "Annual wellness exam & Preventative care",
    href: "/services/wellness-exam-and-vaccination",
  },
  { name: "Illness Exam", href: "/services/illness-exam" },
  { name: "Surgery", href: "/services/surgery" },
  { name: "Laboratory Services", href: "/services/laboratory" },
  {
    name: "Wellness Plans",
    href: "/misc/wellness-plans",
    submenu: wellnessplans,
  },
  { name: "End of Life Services", href: "/services/eolservices" },
  { name: "Pet Insurance & Financing", href: "/services/insurance-finance" },
  { name: "Miscellaneous Services", href: "/services/misc-services" },
];

const newClients = [
  { name: "Registration Form", href: "/newClients/registration" },
  { name: "Medical Record Transfer Form", href: "/newClients/filetransfer" },
  { name: "Policies", href: "/newClients/policies" },
  { name: "FAQ", href: "/newClients/faq" },
];

const requests = [
  { name: "Medication Refill Form", href: "/requests/medication-refill-form" },
  { name: "Food Order Forms", href: "/requests/food-order-form" },
  { name: "Medical Record Transfer Form", href: "/newClients/filetransfer" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", submenu: about },
  { name: "Services", href: "/services", submenu: services },
  { name: "New Clients", submenu: newClients },
  { name: "Requests", submenu: requests },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <DeskNavbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

const DeskNavbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [wellnessDropdown, setWellnessDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const pathname = usePathname();

  const handleMouseEnter = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdown(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdown(null);
      setWellnessDropdown(false);
    }, 300); // Delay of 300ms before closing
    setDropdownTimeout(timeout);
  };

  const handleWellnessMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setWellnessDropdown(true);
  };

  const handleWellnessMouseLeave = () => {
    const timeout = setTimeout(() => {
      setWellnessDropdown(false);
    }, 300); // Delay of 300ms before closing
    setDropdownTimeout(timeout);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-lg bg-gray-100">
        <div className="text-primary font-semibold">
          Call Us:{" "}
          <a href="tel:17809297363" className="text-secondary font-extrabold">
            +1 (780) 929 7363
          </a>
        </div>
        <div className="text-gray-500">
          Visit Us:{" "}
          <span className="font-semibold">
            6002 29 Ave, Beaumont, AB T4X 0H5, Canada
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href="https://app.petdesk.com/sign-up/montrose-pet-clinic-inc/052e6db6-23be-49e2-be8a-4ae4ecec1554">
            <div className="p-2 rounded-md text-white bg-secondary">
              Download Our App
            </div>
          </Link>
          <Link href="https://www.facebook.com/MontrosePetClinic/">
            <span className="text-gray-500 hover:text-secondary cursor-pointer">
              <FaFacebookF className="cursor-pointer hover:text-blue-500 transition duration-300" />
            </span>
          </Link>
          <Link href="https://www.instagram.com/montrose_pet_clinic/">
            <span className="text-gray-500 hover:text-secondary cursor-pointer">
              <FaInstagram className="cursor-pointer hover:text-red-500 transition duration-300" />
            </span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-fluid flex justify-evenly items-center gap-10 px-2 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Montrose Pet Clinic Logo"
              width={150}
              height={50}
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <ul className="flex space-x-6 z-40">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  // Render Link if href exists
                  <Link
                    href={item.href}
                    className={`text-gray-700 font-medium hover:border-b-2 hover:pb-5 hover:border-blue-800 hover:text-blue-600 ${
                      isActive(item.href)
                        ? "border-b-2 pb-5 border-blue-800 text-blue-600"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  // Render span if no href
                  <span className="text-gray-700 font-medium hover:border-b-2 hover:pb-5 hover:border-blue-800 hover:text-blue-600 cursor-pointer">
                    {item.name}
                  </span>
                )}

                {/* First Level Dropdown */}
                {item.submenu && dropdown === index && (
                  <div
                    className={`absolute left-0 mt-2 bg-white text-md shadow-lg rounded-md border border-gray-200 origin-top transform z-50 w-64`}
                  >
                    <div className={`grid grid-cols-1 p-2`}>
                      {item.submenu.map((sub, idx) => (
                        <div
                          key={idx}
                          className="relative group"
                          onMouseEnter={
                            sub.name === "Wellness Plans"
                              ? handleWellnessMouseEnter
                              : null
                          }
                          onMouseLeave={
                            sub.name === "Wellness Plans"
                              ? handleWellnessMouseLeave
                              : null
                          }
                        >
                          <Link
                            href={sub.href}
                            className={`block px-2 py-1 text-gray-700 hover:text-secondary ${
                              isActive(sub.href) ? "text-secondary" : ""
                            }`}
                          >
                            {sub.name}
                          </Link>

                          {/* Nested Dropdown for Wellness Plans */}
                          {sub.submenu && wellnessDropdown && (
                            <div className="absolute left-full top-0 mt-0 ml-1 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                              {sub.submenu.map((wellness, wIdx) => (
                                <Link
                                  key={wIdx}
                                  href={wellness.href}
                                  className={`block px-4 py-2 text-gray-700 hover:text-secondary ${
                                    isActive(wellness.href)
                                      ? "text-secondary"
                                      : ""
                                  }`}
                                >
                                  {wellness.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Appointment Buttons */}
        <div className="flex gap-2">
          <div className="flex items-center">
            <Link href="/newClients/registration">
              <button className="bg-secondary text-white p-4 rounded-md font-semibold">
                Book an Appointment
              </button>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="https://montrosepetclinic.clientvantage.ca/">
              <button className="bg-secondary text-white p-4 rounded-md font-semibold">
                Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [wellnessDropdown, setWellnessDropdown] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdown = (index) =>
    setDropdown(dropdown === index ? null : index);

  const handleWellnessDropdown = (index) =>
    setWellnessDropdown(wellnessDropdown === index ? null : index);

  const isActive = (path) => pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdown(null);
    setWellnessDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md md:hidden relative">
      <div className="flex justify-between items-center px-4 py-2">
        <Link href="/">
          <Image
            src={logo}
            alt="Montrose Pet Clinic Logo"
            width={100}
            height={30}
          />
        </Link>
        <Link href="/newClients/registration">
          <button className="bg-secondary text-white px-2 py-2 text-sm rounded-md font-semibold">
            Request an Appointment
          </button>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:bg-gray-800 hover:text-white p-2 rounded-md"
        >
          <RiBarChartHorizontalLine size={24} />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="  w-1/2 p-4 bg-white">
          <Link href="https://montrosepetclinic.clientvantage.ca/">
            <button className="bg-secondary text-white w-full p-4 rounded-md font-semibold">
              Shop
            </button>
          </Link>
        </div>
        <div className="p-4 h-full">
          <button
            onClick={toggleMenu}
            className="text-gray-700 absolute top-4 right-4"
          >
            <FaTimes size={24} />
          </button>
          <ul className="mt-8 space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdown(index)}
                      className={`w-full flex justify-between items-center text-gray-700 font-medium hover:text-blue-600 ${
                        item.submenu.some((sub) =>
                          pathname.startsWith(sub.href)
                        )
                          ? "text-blue-600"
                          : ""
                      }`}
                    >
                      {item.name}
                      <FaChevronDown
                        className={`transform transition-transform duration-300 ${
                          dropdown === index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {dropdown === index && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((sub, idx) => (
                          <li key={idx}>
                            {sub.submenu ? (
                              <>
                                {/* Handle Wellness nested dropdown */}
                                <button
                                  onClick={() => handleWellnessDropdown(idx)}
                                  className="w-full flex justify-between items-center text-gray-700 font-medium hover:text-blue-600"
                                >
                                  {sub.name}
                                  <FaChevronDown
                                    className={`transform transition-transform duration-300 ${
                                      wellnessDropdown === idx
                                        ? "rotate-180"
                                        : "rotate-0"
                                    }`}
                                  />
                                </button>
                                {wellnessDropdown === idx && (
                                  <ul className="pl-4 mt-2 space-y-2">
                                    {sub.submenu.map((wellness, wIdx) => (
                                      <li key={wIdx}>
                                        <Link
                                          href={wellness.href}
                                          className="block text-gray-700 hover:text-secondary"
                                          onClick={handleLinkClick} // Close sidebar on link click
                                        >
                                          {wellness.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link
                                href={sub.href}
                                className="block text-gray-700 hover:text-secondary"
                                onClick={handleLinkClick} // Close sidebar on link click
                              >
                                {sub.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block text-gray-700 font-medium hover:text-blue-600 ${
                      isActive(item.href) ? "text-blue-600" : ""
                    }`}
                    onClick={handleLinkClick} // Close sidebar on link click
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
