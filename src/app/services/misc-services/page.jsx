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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-1">
        <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
          <li>Nail trim</li>
          <li>Microchip</li>
          <li>Anal sac Expression</li>
          <li>Pain management</li>
          <li>Grooming with sedation (We are not groomers)</li>
        </ul>
        <div className="relative w-36 h-36">
          <Image
            src="/nailcutter.jpg"
            alt="Nail trim"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg object-[center_20%]"
          />
        </div>
        <div className="relative w-36 h-36">
          <Image
            src="/microchip.jpg"
            alt="Microchip"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
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
