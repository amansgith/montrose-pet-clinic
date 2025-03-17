import React from "react";
import Image from "next/image";

const InfoSection = ({ title, firstSection, restContent, image, altText }) => {
  return (
    <section className="py-12 px-4 md:px-12 bg-gray-100">
      <div className="container mx-auto">
        {/* Main Title */}
        <h2 className="text-4xl font-bold text-primary text-center mb-8">
          {title}
        </h2>

        {/* First Section with Image Floating */}
        <div className={`mb-8 ${image ? 'md:flex items-start gap-6' : ''}`}>
          {image && (
            <div className="md:w-1/3 mb-4 md:mb-0">
              <Image
                src={image}
                alt={altText}
                width={300}
                height={200}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          )}
          <div className={image ? 'md:w-2/3' : 'w-full'}>
            <h3 className="text-2xl font-semibold text-secondary mb-2">
              {firstSection.subheading}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {firstSection.text}
            </p>
          </div>
        </div>

        {/* Rest of the Content */}
        <div className="w-full">
          <div className="text-gray-700 leading-relaxed">{restContent}</div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;