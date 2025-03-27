import InfoSection from "@/components/InfoSection";

const EmergencyCare = () => {
  const firstSection = {
    subheading: "",
    text: "At Montrose Pet Clinic, we are here to help during emergencies. Our team will assess your pet’s condition, provide initial stabilization, and if needed, arrange transfer to a 24-hour clinic for continued care, further evaluation, and treatment.",
  };

  const restContent = (
    <>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Common emergency situations requiring immediate attention:
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>Hit by a car</li>
        <li>Blocked cat</li>
        <li>Seizures</li>
        <li>Sudden vomiting or diarrhea</li>
        <li>Sudden paralysis or unable to stand</li>
        <li>Wobbling or unsteady pet</li>
        <li>Ingestion of poison or drugs</li>
        <li>Ingestion of toxic foods like onion, chocolate, or grapes</li>
        <li>Heat stroke</li>
        <li>Porcupine quills</li>
        <li>Difficulty breathing or panting</li>
        <li>Sudden loss of appetite</li>
      </ul>
      <br />
      <p className="text-gray-700 leading-relaxed">
        These are some of the most common emergency situations, but not limited
        to. Pets need immediate attention in all of the above situations.
      </p>
      <br />
      <h3 className="text-xl font-semibold text-secondary mb-4">
        Emergency Contacts
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          Pulse Veterinary:{" "}
          <a href="tel:7805709999" className="text-blue-600 hover:underline">
            780-570-9999
          </a>
        </li>
        <li>
          Guardian Veterinary Centre:{" "}
          <a href="tel:7804365880" className="text-blue-600 hover:underline">
            780-436-5880
          </a>
        </li>
        <li>
          Boreal Veterinary Centre:{" "}
          <a href="tel:7803064400" className="text-blue-600 hover:underline">
          780-306-4400
          </a>
        </li>
        <li>
          Vet ER:{" "}
          <a href="tel:8254804881" className="text-blue-600 hover:underline">
            825-480-4881
          </a>
        </li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Emergency Care Services at Montrose Pet Clinic"
      altText="Veterinarian providing emergency care"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default EmergencyCare;
