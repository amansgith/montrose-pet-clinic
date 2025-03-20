import { FaSnowflake, FaTooth, FaDog, FaBug, FaSun, FaHeartbeat, FaLeaf, FaWeight, FaPaw } from 'react-icons/fa';

export default function MonthlyPromotions() {
  const promotions = [
    { month: 'January', promotion: 'Spay & Neuter Month', icon: <FaSnowflake className="text-blue-500 text-4xl" /> },
    { month: 'February', promotion: 'Dental Month', icon: <FaTooth className="text-yellow-500 text-4xl" /> },
    { month: 'March', promotion: 'Senior Pet Month', icon: <FaDog className="text-purple-500 text-4xl" /> },
    { month: 'April', promotion: 'Parasite Prevention', icon: <FaBug className="text-green-500 text-4xl" /> },
    { month: 'May', promotion: 'Parasite Prevention, Spay & Neuter Month', icon: <FaSun className="text-orange-400 text-4xl" /> },
    { month: 'June', promotion: 'Parasite Awareness Month', icon: <FaBug className="text-green-600 text-4xl" /> },
    { month: 'July', promotion: 'Spay & Neuter Month', icon: <FaSun className="text-yellow-400 text-4xl" /> },
    { month: 'August', promotion: 'Wellness Month', icon: <FaHeartbeat className="text-red-500 text-4xl" /> },
    { month: 'September', promotion: 'Parasite Awareness Month', icon: <FaLeaf className="text-green-700 text-4xl" /> },
    { month: 'October', promotion: 'Overweight Management & Joint Health', icon: <FaWeight className="text-orange-700 text-4xl" /> },
    { month: 'November', promotion: 'Dental Month', icon: <FaTooth className="text-yellow-600 text-4xl" /> },
    { month: 'December', promotion: 'Wellness Month', icon: <FaPaw className="text-blue-700 text-4xl" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Monthly Promotions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2 text-center">{item.month}</h2>
            <p className="text-gray-700 text-lg text-center">{item.promotion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
