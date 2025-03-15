// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import Image from "next/image";

// const slides=[
//     {title:"",
//     description:"",
//     image:"",
//     }
// ];
// const Hero = () => {
//   return (
//     <div></div>
//   )
// }

// export default Hero

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { image: "/slider_1.jpg", text: "Welcome to Montrose Pet Clinic", btntext:"Explore Services" },
  { image: "/slider_3.jpg", text: "Best Care for Your Best Friend", btntext:"Request an Appointment" },
  { image: "/slider_2.jpg", text: "Caring for Pets is Our Passion", btntext:"Meet our Team" },
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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
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
            layout="fill"
            objectFit="cover"
            className="h-[100px] w-full"
            priority
          />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          {slides[current].text}
        </h1>
        <button className="mt-6 px-6 py-3 bg-secondary text-white font-medium rounded-lg shadow-lg hover:bg-opacity-80 transition">
          {slides[current].btntext}
        </button>
      </div>

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div> */}

      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full h-[80px] bg-primary text-white flex items-center">
          <div className="absolute left-0 w-[70%] h-full bg-blue-800 text-center flex items-center justify-center clip-left">
            <h2 className="text-lg font-bold">WELCOME TO MONTROSE PET CLINIC</h2>
          </div>
          <div className="absolute right-0 w-[30%] h-full bg-green-500 text-center flex items-center justify-center clip-right">
            <button className="text-lg font-bold flex items-center gap-2 hover:translate-x-2 transition">
              OUR SERVICES <span className="text-xl">➤</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
