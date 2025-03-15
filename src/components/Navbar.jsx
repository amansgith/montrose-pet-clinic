"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/brandlogo.webp";
import Link from "next/link";

const services = [
  { name: "Wellness Exams", href: "/services/wellness-exams" },
  { name: "Vaccinations", href: "/services/vaccinations" },
  { name: "Deworming", href: "/services/deworming" },
  { name: "Surgery", href: "/services/surgery" },
  { name: "Treatments", href: "/services/treatments" },
  { name: "Micro-chipping", href: "/services/microchipping" },
  { name: "Laboratory", href: "/services/laboratory" },
  { name: "Radiology", href: "/services/deworming" },
  { name: "End of Life Services", href: "/services/eodservices" },
  { name: "Emergency", href: "/services/emergency" },
  { name: "Dental Care", href: "/services/dentalcare" },
  { name: "Senior Pet Consultant", href: "/services/seniorpetconsultant" },
  { name: "Nail Trim", href: "/services/nailtrim" },
  { name: "Anal Gland Expersion", href: "/services/analgladexpersion" },
  { name: "Pain Management", href: "/services/painmanagement" },
  { name: "Nutrition", href: "/services/nutrition" },
];

const newClients = [
  { name: "Registration Form", href: "/newclients/registerform" },
  { name: "Policies", href: "/newclients/policies" },
  { name: "Insurance", href: "/newclients/insurance" },
  { name: "Puppy/Kitten Plans", href: "/newclients/puppykittenplans" },
  { name: "FAQ", href: "/newclients/faq" },
];

const misc = [
  { name: "Medication Refill form", href: "/misc/medicationrefillform" },
  { name: "Food Order Forms", href: "/misc/foodorderforms" },
  { name: "Gallery", href: "/misc/petgallery" },
  { name: "Wellness Plans", href: "/misc/wellnessplans" },
  { name: "Monthly Promotions", href: "/misc/monthlypromotions" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", submenu: services },
  { name: "New Clients", submenu: newClients },
  { name: "Misc.", submenu: misc },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <Desknavbar />
      </div>
      {/* mobile navbar  */}
    </>
  );
};

const Desknavbar = () => {
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
    <nav className="bg-white shadow-md">
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

        {/* Menu */}
        {/* <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <Link href="/" className="text-primary hover:text-secondary">
            HOME
          </Link>
          <Link href="/about" className="hover:text-secondary">
            ABOUT CLINIC
          </Link>
          <Link href="/features" className="hover:text-secondary">
            FEATURES
          </Link>
          <Link href="/services" className="hover:text-secondary">
            SERVICES
          </Link>
          <Link href="/blog" className="hover:text-secondary">
            OUR BLOG
          </Link>
          <Link href="/contact" className="hover:text-secondary">
            CONTACTS
          </Link>
        </div> */}

        <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
        <ul className="flex space-x-6 z-40">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)} // Keep dropdown open when hovering over it
                onMouseLeave={handleMouseLeave}
              >
                {/* If item has a submenu, show the dropdown */}
                {item.submenu ? (
                  <>
                    <Link
                      href="#"
                      className={`text-gray-700 font-medium hover:border-b-2 hover:pb-5 hover:border-blue-800 hover:text-blue-600 ${
                        item.submenu.some((sub) =>
                          pathname.startsWith(sub.href)
                        )
                          ? "border-b-2 pb-5 border-blue-800 text-blue-600"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                    {dropdown === index && (
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
                              className="block px-4 py-2 text-gray-700 hover:text-secondary"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // If no submenu, it's a simple link
                  <Link
                    href={item.href}
                    className={`text-gray-700 font-medium hover:text-blue-600 ${
                      isActive(item.href)
                        ? "border-b-2 pb-5 border-blue-800 text-blue-600"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <button className="bg-secondary text-white p-4 rounded-md font-semibold">
            Book an Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
