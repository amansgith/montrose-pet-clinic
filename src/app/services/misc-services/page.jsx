import InfoSection from "@/components/InfoSection";
import Image from "next/image";

const MiscellaneousServices = () => {
  const firstSection = {
    subheading: "Comprehensive Care for Your Pet's Unique Needs",
    text: "At Montrose Pet Clinic, we offer a variety of miscellaneous services to ensure your pet's overall well-being. From routine care to specialized treatments, our team is dedicated to providing the highest quality of care for your furry friends.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-6">
        Our Miscellaneous Services
      </h3>
      <div className="flex flex-row gap-20 ">
        {/* Service List */}
        <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
          <li>Nail trim</li>
          <li>Microchip</li>
          <li>Anal sac expression</li>
          <li>Pain management</li>
          <li>Grooming with sedation</li>
        </ul>

        {/* Nail Trim Image and Description */}
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-36">
            <Image
              src="/nailcutter.jpg"
              alt="Nail trim"
              width={112} // Set width in pixels
              height={144} // Set height in pixels
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Nail Trimmer.
          </p>
        </div>

        {/* Microchip Image and Description */}
        <div className="flex flex-col items-center">
          <div className="relative w-56 h-36">
            <Image
              src="/microchip.jpg"
              alt="Microchip"
              width={454} // Set width in pixels
              height={144} // Set height in pixels
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Microchipping equipment.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <InfoSection
      title="Miscellaneous Services at Montrose Pet Clinic"
      altText="Veterinarian performing miscellaneous services"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default MiscellaneousServices;