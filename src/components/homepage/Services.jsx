import { FaCat, FaTooth, FaFlask, FaXRay, FaAppleAlt, FaProcedures, FaUserMd, FaSyringe } from "react-icons/fa";
import { MdPets } from "react-icons/md";

const services = [
  { name: "Wellness Programs", icon: <MdPets /> },
  { name: "Surgical Services", icon: <FaUserMd /> },
  { name: "Dental Care", icon: <FaTooth /> },
  { name: "Laboratory Services", icon: <FaFlask /> },
  { name: "Radiology Service", icon: <FaXRay /> },
  { name: "Nutrition Services", icon: <FaAppleAlt /> },
  { name: "End of Life Services", icon: <FaProcedures /> },
  { name: "Vaccination Services", icon: <FaSyringe /> },
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-24 text-center bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Services</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center gap-3 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="text-primary text-4xl">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 ">{service.name}</h3>
          </div>
        ))}
      </div>

      {/* See All Services Button */}
      <button className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-secondary transition duration-300">
        See All Services
      </button>
    </section>
  );
};

export default Services;