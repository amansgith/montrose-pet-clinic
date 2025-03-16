"use client"
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jazmin Hiller",
    text: "This is a great vet! They are open and willing to go over things with you so you understand. My 14-year-old dog just got dental, she’s healing very nicely!",
  },
  {
    id: 2,
    name: "Maggie Stanton",
    text: "This amazing clinic is a very friendly, kind, loving, and caring vet. I bring my boy there and he loves them. They explain things very well and in detail. Keep up the amazing work, you guys!",
  },
  {
    id: 3,
    name: "Diann R",
    text: "Dr. Koshy is always so compassionate and takes the time to explain everything. The team is all very friendly and helpful also.",
  },
  {
    id: 4,
    name: "Sudip Punoria",
    text: "The staff is very accommodating and welcoming. The doctor was very helpful and happy to answer all my questions. Reasonable pricing as well for all the vaccines and exams.",
  },
  {
    id: 5,
    name: "Rose Adams",
    text: "Wonderful friendly staff and doctors! My Mini Schnauzer had surgery today. When I took him in this morning, he wasn’t even shaking as the staff were so kind and gentle with him. The atmosphere at this clinic is calming. Highly recommend. Very reasonable prices too compared to other local vets!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center px-6 md:px-12 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="relative w-full bg-white p-6 rounded-lg text-center transition-all duration-500 ease-in-out" style={{ minHeight: '200px' }}>
        <p className="text-lg text-gray-700 italic px-4">
          `{testimonials[currentIndex].text}`
        </p>
        <h3 className="mt-4 text-xl font-semibold text-gray-800">
          - {testimonials[currentIndex].name}
        </h3>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;