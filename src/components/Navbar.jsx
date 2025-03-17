"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTimes, FaChevronDown } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/brandlogo.webp";
import Link from "next/link";

const services = [
  { name: "Wellness Exams", href: "/services/wellness-exam" },
  { name: "Vaccinations", href: "/services/vaccination" },
  { name: "Deworming", href: "/services/deworming" },
  { name: "Surgery", href: "/services/surgery" },
  { name: "Treatments", href: "/services/treatments" },
  { name: "Micro-chipping", href: "/services/microchipping" },
  { name: "Laboratory", href: "/services/laboratory" },
  { name: "Radiology", href: "/services/radiology" },
  { name: "End of Life Services", href: "/services/eolservices" },
  { name: "Emergency", href: "/services/emergency" },
  { name: "Dental Care", href: "/services/dentalcare" },
  { name: "Senior Pet Consultant", href: "/services/seniorpetconsultant" },
  { name: "Nail Trim", href: "/services/nailtrim" },
  { name: "Anal Gland Expersion", href: "/services/analgladexpersion" },
  { name: "Pain Management", href: "/services/painmanagement" },
  { name: "Nutrition", href: "/services/nutrition" },
];

const newClients = [
  { name: "Registration Form", href: "/newClients/registration" },
  { name: "Policies", href: "/newclients/policies" },
  { name: "Insurance", href: "/newclients/insurance" },
  { name: "Puppy/Kitten Plans", href: "/newclients/puppykittenplans" },
  { name: "FAQ", href: "/newclients/faq" },
];

const misc = [
  { name: "Medication Refill form", href: "/misc/medication-refill-form" },
  { name: "Food Order Forms", href: "/misc/food-order-form" },
  { name: "Gallery", href: "/misc/gallery" },
  { name: "Wellness Plans", href: "/misc/wellnessplans" },
  { name: "Monthly Promotions", href: "/misc/monthlypromotions" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", submenu: services },
  { name: "New Clients", href: "/newclients", submenu: newClients },
  { name: "Misc.", href: "/misc", submenu: misc },
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
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const pathname = usePathname();

  const handleMouseEnter = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdown(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdown(null);
    }, 300); // Delay of 300ms before closing
    setDropdownTimeout(timeout);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-sm bg-gray-100">
        <div className="text-primary font-semibold">
          Call Us: <span className="text-secondary">+1 (780) 929 7363</span>
        </div>
        <div className="text-gray-500">
          Visit Us:{" "}
          <span className="font-semibold">
            6002 29 Ave, Beaumont, AB T4X 0H5, Canada
          </span>
        </div>
        <div className="flex gap-3">
          <Link href="#">
            <span className="text-gray-500 hover:text-secondary cursor-pointer">
              <FaFacebookF className="cursor-pointer hover:text-blue-500 transition duration-300" />
            </span>
          </Link>
          <Link href="#">
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
                onMouseEnter={() => handleMouseEnter(index)} // Keep dropdown open when hovering over it
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`text-gray-700 font-medium hover:border-b-2 hover:pb-5 hover:border-blue-800 hover:text-blue-600 ${
                   isActive(item.href) || (item.submenu && item.submenu.some((sub) => pathname.startsWith(sub.href)))
                      ? "border-b-2 pb-5 border-blue-800 text-blue-600"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
                {item.submenu && dropdown === index && (
                  <div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 origin-top transform 
                               max-h-[300px] overflow-y-auto custom-scrollbar z-50"
                  >
                    {item.submenu.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          href={sub.href}
                          className={`block px-4 py-2 text-gray-700 hover:text-secondary ${ isActive(sub.href) ? "text-secondary" : "" }`}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <Link href="/newClients/registration">
          <button className="bg-secondary text-white p-4 rounded-md font-semibold">
            Book an Appointment
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow-md md:hidden relative">
      <div className="flex justify-between items-center px-4 py-2">
        <Link href="/">
          <Image src={logo} alt="Montrose Pet Clinic Logo" width={100} height={30} />
        </Link>
        <button className="bg-secondary text-white px-2 py-2 text-sm rounded-md font-semibold">
          Request an Appointment
        </button>
        <button onClick={toggleMenu} className="text-gray-700 hover:bg-gray-800 hover:text-white p-2 rounded-md">
          <RiBarChartHorizontalLine size={24} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="p-4 h-full">
          <button onClick={toggleMenu} className="text-gray-700 absolute top-4 right-4">
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
                        item.submenu.some((sub) => pathname.startsWith(sub.href)) ? "text-blue-600" : ""
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
                            <Link href={sub.href} className="block text-gray-700 hover:text-secondary">
                              {sub.name}
                            </Link>
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