"use client"
import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Image from "next/image";
// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Array of image filenames
const images = [
  "clinicfront.webp",, "IMG_6660.jpg", "IMG_6657.jpg", "IMG_6644.jpg", "IMG_6645.jpg", "IMG_6647.jpg", "IMG_6648.jpg",
  "IMG_6649.jpg", "IMG_6643.jpg","IMG_6650.jpg", "IMG_6653.jpg", "IMG_6654.jpg",
  "IMG_6656.jpg", "IMG_6659.jpg", "IMG_6668.jpg",
  "IMG_6669.jpg", "IMG_6671.jpg"
];

const ClinicTourGallery = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Clinic Tour</h1>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {images.map((img, index) => (
          <a
            key={index}
            href={`/clinictour/${img}`}
            className="block overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={`/clinictour/${img}`}
              alt={`Clinic Picture ${index + 1}`}
              width={500}
              height={300}
              className="object-cover w-full h-60 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
};

export default ClinicTourGallery;
