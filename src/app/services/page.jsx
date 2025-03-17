import React from 'react';
import Link from 'next/link';

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

const Services = () => {
  return (
    <div className="container mx-auto px-36 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        At Montrose Pet Clinic, we offer a variety of services to care for your pet. If you have any questions or would like more information on how we can care for your pet, please <Link href="/contact" className='text-blue-600'>contact us</Link> today.
      </p>
      <ul className="list-disc list-inside pl-8 text-gray-700 leading-relaxed mb-6">
        {services.map((service, index) => (
          <li key={index} className="mb-2">
            <Link href={service.href}>
              <span className="text-blue-600 hover:underline">{service.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-lg text-gray-700">
        We are committed to providing comprehensive and compassionate care for your pets. Whether it&rsquo;s a routine wellness exam or an emergency situation, you can trust Montrose Pet Clinic to be there for you and your furry family members. <br /> <Link className='text-blue-600' href="/newClients/registration"> Request an Appointment</Link> Today.
      </p>
    </div>
  );
};

export default Services;