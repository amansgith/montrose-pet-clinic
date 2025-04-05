import { FaCat, FaTooth, FaFlask, FaXRay, FaAppleAlt, FaProcedures, FaUserMd, FaSyringe, FaHeartbeat, FaDog, FaStethoscope, FaAmbulance, FaMicroscope, FaBone, FaPaw, FaHandHoldingHeart, FaMoneyCheckAlt, FaClipboardList } from "react-icons/fa";
import Link from "next/link";

const services = [
  { name: "Annual wellness exam & Preventive care", href: "/services/wellness-exam-and-vaccination", icon: <FaSyringe /> },
  // { name: "Puppy/ Kitten Exam", href: "/services/puppy-kitten-exam", icon: <FaDog /> },
  // { name: "Deworming", href: "/services/deworming", icon: <FaBone /> },
  { name: "Illness Exam", href: "/services/illness-exam", icon: <FaStethoscope /> },
  { name: "Surgery", href: "/services/surgery", icon: <FaUserMd /> },
  // { name: "Emergency Care", href: "/services/emergency-care", icon: <FaAmbulance /> },
  { name: "Laboratory Services", href: "/services/laboratory", icon: <FaMicroscope /> },
  // { name: "Dental Care", href: "/services/dentalcare", icon: <FaTooth /> },
  { name: "End of Life Services", href: "/services/eolservices", icon: <FaHandHoldingHeart /> },
  // { name: "Nutrition Consult", href: "/services/nutrition", icon: <FaAppleAlt /> },
  // { name: "Radiology", href: "/services/radiology", icon: <FaXRay /> },
  { name: "Miscellaneous Services", href: "/services/misc-services", icon: <FaPaw /> },
  // { name: "Geriatric Patient Care", href: "/services/geriatric-care", icon: <FaHeartbeat /> },
  { name: "Pet Insurance & Financing", href: "/services/insurance-finance", icon: <FaMoneyCheckAlt /> },
  { name: "Wellness Plans", href: "/misc/wellness-plans", icon: <FaClipboardList /> },
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-24 text-center bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Services</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link key={index} href={service.href}>
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col pt-10 items-center gap-3 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer h-40">
              <div className="text-primary text-5xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 text-center">{service.name}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* See All Services Button */}
      {/* <Link href="/services">
      <button className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-secondary transition duration-300">
        See All Services
      </button>
      </Link> */}
    </section>
  );
};

export default Services;