import InfoSection from "@/components/InfoSection";
import { FaInfoCircle } from "react-icons/fa";

const DentalCare = () => {
  const firstSection = {
    subheading: "Bright Smiles for Brighter Futures",
    text: "o	Dental care is a key part of your pet’s every day health. Early dental care such as brush, using a dental food, water additives or gels, and dental scrubs, can help prevent the early appearance of many dental issues. Some breeds, however, are very prone to dental disease, and they may need cleanings at an early age. Dental disease can cause constant pain for your pets, and may lead to other serious problems, like heart disease, later in life. Regular dental exams and preventative care can help keep your pets healthy and happy.",
  };

  const restContent = (
    <>
      <div className="flex flex-col md:flex-row md:justify-between mb-6">
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0 flex items-center">
          <FaInfoCircle className="text-primary text-2xl mr-2" />
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Did You Know?
            </h3>
            <p className="text-gray-700">
              80% of dogs and 70% of cats over the age of 3 have dental disease
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
          <FaInfoCircle className="text-primary text-2xl mr-2" />
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Did You Know?
            </h3>
            <p className="text-gray-700">
              More than 13% of cats with oral disease test positive for FeLV or
              FIV
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Signs of Dental Disease
      </h3>
      <ul className="list-disc list-inside pl-4 text-gray-700 leading-relaxed">
        <li>Bad breath</li>
        <li>Change in chewing habits</li>
        <li>Yellow-brown crust on teeth</li>
        <li>Tooth loss</li>
        <li>Bleeding gums</li>
        <li>Drooling</li>
      </ul>
      <br />
      <p className="text-gray-700 leading-relaxed mb-4">
        Montrose Pet Clinic is well equipped to provide superior dental care for
        your beloved furry friends. Please call us to book an oral health exam for your pet.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Dental Care at Montrose Pet Clinic"
      image="/dentalcare.jpg"
      altText="Veterinarian performing dental care"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default DentalCare;
