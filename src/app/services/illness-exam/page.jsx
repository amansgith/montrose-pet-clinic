import InfoSection from "@/components/InfoSection";

const IllnessExam = () => {
  const firstSection = {
    subheading: "Illness Exam",
    text: "Dogs and cats get various diseases due to different reasons. Most of the illness happens when their immunity gets compromised. Most common conditions or diseases that came to us on a routine basis are the following:",
  };

  const restContent = (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>Ear Infections</li>
        <li>Gastroenteritis</li>
        <li>Dental diseases</li>
        <li>Urinary tract infections</li>
        <li>Dermatitis</li>
        <li>Lameness</li>
        <li>Anal gland diseases</li>
        <li>Laceration, Wounds</li>
        <li>Allergic reactions</li>
        <li>Pancreatitis</li>
        <li>Eye infections</li>
        <li>Bladder stones</li>
        <li>Gastritis</li>
        <li>Corneal ulcers</li>
        <li>Foreign body ingestion</li>
        <li>Arthritis</li>
        <li>Drug ingestion</li>
        <li>Poisoning</li>
      </ul>
      <br />
      <p>
        Montrose Pet Clinic is well equipped to diagnose and treat various illnesses mentioned above. We have a full-service laboratory in place and digital radiography to diagnose the conditions and start treatment at the earliest. We have an in-situ pharmacy to dispense meds right away. We hospitalize patients for day time and transfer them to a 24-hour clinic for the night.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Illness Exam Services at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1601758123927-1a9f0b6c7d5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      altText="Veterinarian examining a pet"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default IllnessExam;