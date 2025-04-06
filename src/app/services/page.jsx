import React from 'react';
import Link from 'next/link';

const services = [
    {
      name: "Annual wellness exam & Preventive care",
      href: "/services/wellness-exam-and-vaccination",
    },
    // { name: "Puppy/ Kitten Exam", href: "/services/puppy-kitten-exam" },
    // { name: "Deworming", href: "/services/deworming" },
    { name: "Illness Exam", href: "/services/illness-exam" },
    { name: "Surgery", href: "/services/surgery" },
    // { name: "Emergency Care", href: "/services/emergency-care" },
    { name: "Laboratory Services", href: "/services/laboratory" },
    // { name: "Dental Care", href: "/services/dentalcare" },
    { name: "Wellness Plans", href: "/misc/wellness-plans" },
    { name: "End of Life Services", href: "/services/eolservices" },
    // { name: "Nutrition Consult", href: "/services/nutrition" },
    // { name: "Radiology", href: "/services/radiology" },
    { name: "Pet Insurance & Financing", href: "/services/insurance-finance" },
    { name: "Miscellaneous Services", href: "/services/misc-services" },
    // { name: "Geriatric Patient Care", href: "/services/geriatric-care" },
  ];

const Services = () => {
  return (
    <div className="container mx-auto px-4 md:px-36 py-8">
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
        We are committed to providing comprehensive and compassionate care for your pets. Whether it&rsquo;s a routine wellness exam or an emergency situation. <br/>
        You can trust Montrose Pet Clinic to be there for you and your furry family members
      </p>
    </div>
  );
};

export default Services;