"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { image: "/slider_1.jpg", text: "Welcome to Montrose Pet Clinic", btntext: "Explore Services", href: "/services" },
  { image: "/slider_3.jpg", text: "Best Care for Your Best Friend", btntext: "Request an Appointment", href:"/newClients/registration" },
  { image: "/slider_2.jpg", text: "Caring for Pets is Our Passion", btntext: "Meet our Team" , href:"/about/team"},
  { image: "/slider_4.jpg", text: "Wellness plans for every pet.", btntext: "Explore more" , href:"/misc/wellness-plans"},
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] md:h-screen overflow-hidden">
      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.text}
            fill
            className=" object-cover w h-full"
            priority
          />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          {slides[current].text}
        </h1>
        <Link href={slides[current].href}>
        <button className="mt-6 px-6 py-3 bg-secondary text-white font-medium rounded-lg shadow-lg hover:bg-opacity-80 transition">
          {slides[current].btntext}
        </button>
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === current ? "bg-white scale-110" : "bg-gray-400 opacity-50"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>

      {/* CTA Section */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="hidden md:flex flex-col md:flex-row w-full bg-primary text-white text-center">
          <div className="hidden md:block w-full md:w-[70%] py-4 md:py-6 bg-blue-800 clip-left">
            <h2 className="text-lg md:text-xl font-bold">WELCOME TO MONTROSE PET CLINIC</h2>
          </div>
          <div className="w-full md:w-[30%] py-4 md:py-6 bg-green-500 flex items-center justify-center clip-right">
            <Link href="/services">
            <button className="text-lg md:text-xl font-bold flex items-center gap-2 hover:translate-x-2 transition">
              OUR SERVICES <span className="text-xl">➤</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;