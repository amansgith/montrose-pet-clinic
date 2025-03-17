import InfoSection from "@/components/InfoSection";

const EmergencyCare = () => {
  const firstSection = {
    subheading: "Emergency Care",
    text: "We at Montrose Pet Clinic, encourage you to approach us in an emergency. We triage the patient and will try to stabilize the patient. Once stabilized we transfer you to a 24-hour clinic for overnight care, further assessments and treatments.",
  };

  const restContent = (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>Hit by a Car (HBC)</li>
        <li>Blocked Cat</li>
        <li>Seizures in Pets</li>
        <li>Sudden vomiting/ diarrhea</li>
        <li>Sudden Paralysis or Recumbent</li>
        <li>Wobbling Pet</li>
        <li>Ingestion Of Poison/ Drugs</li>
        <li>Ingestion of food like Onion, Chocolate, Grapes</li>
        <li>Heat Stroke</li>
        <li>Porcupine Quills</li>
        <li>Difficulty in Breathing or Panting</li>
        <li>Sudden onset of Anorexia</li>
      </ul>
      <br />
      <p>
        These are some of the common emergency conditions but not limited to. Pets need immediate attention in all the above situations.
      </p>
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