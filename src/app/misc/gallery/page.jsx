"use client";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

const galleryData = [
  {
    title: "Pet of the Month",
    images: [
      "/gallery/pet1.webp",
      "/gallery/pet2.webp",
      "/gallery/pet3.webp",
      "/gallery/pet4.jpg",
      "/gallery/pet5.webp",
      "/gallery/pet6.webp",
    ],
  },
  {
    title: "Best Friends",
    images: [
      "/gallery/friend1.webp",
      "/gallery/friend2.webp",
      "/gallery/friend3.jpg",
      "/gallery/friend4.webp",
      "/gallery/friend5.webp",
      "/gallery/friend6.webp",
      "/gallery/friend7.jpg",
      "/gallery/friend8.webp",
      "/gallery/friend9.webp",
      
    ],
  },
  {
    title: "Clinic Pictures",
    images: [
      "/gallery/clinicimg1.webp",
      "/gallery/clinicimg2.webp",
      "/gallery/clinicimg3.webp",
      "/gallery/clinicimg4.webp",
      "/gallery/clinicimg5.webp",
      "/gallery/clinicimg6.webp",
      "/gallery/clinicimg7.webp",
      "/gallery/clinicimg8.webp",
      "/gallery/clinicimg9.webp",
      "/gallery/clinicimg10.jpg",
      "/gallery/clinicimg11.webp",

    ],
  },
];

export default function Gallery() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-6xl text-primary font-bold text-center mb-6">Gallery</h1>

      {galleryData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-4xl text-center text-secondary font-bold mb-4">{section.title}</h2>

          {/* LightGallery Container */}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {section.images.map((img, imgIndex) => (
              <a key={imgIndex} href={img} className="block">
                <Image
                  src={img}
                  alt={`${section.title} ${imgIndex}`}
                  width={500}
                    height={500}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      ))}
    </div>
  );
}
