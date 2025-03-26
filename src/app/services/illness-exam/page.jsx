import InfoSection from "@/components/InfoSection";

const IllnessExam = () => {
  const firstSection = {
    subheading: "Illness Exam",
    text: "Dogs and cats develop various diseases due to different reasons. In most cases, illnesses occur when their immune system becomes compromised. The most common conditions or diseases we see on a routine basis are the following:",
  };

  const restContent = (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>Ear infections</li>
        <li>Gastroenteritis</li>
        <li>Dental diseases</li>
        <li>Urinary tract infections</li>
        <li>Dermatitis</li>
        <li>Lameness</li>
        <li>Anal gland diseases</li>
        <li>Lacerations and wounds</li>
        <li>Allergic reactions</li>
        <li>Pancreatitis</li>
        <li>Eye infections</li>
        <li>Bladder stones</li>
        <li>Gastritis</li>
        <li>Corneal ulcers</li>
        <li>Foreign body ingestion</li>
        <li>Arthritis</li>
        <li>Accidental drug ingestion</li>
        <li>Poisoning</li>
      </ul>
      <br />
      <p>
        Montrose Pet Clinic is fully equipped to diagnose and treat the illnesses listed above. Our facility includes a full-service laboratory and digital radiography to quickly identify conditions and begin treatment. We also have an in-house pharmacy to dispense medications immediately. We only offer hospitalization during clinic hours.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Illness Exam Services at Montrose Pet Clinic"
      image="https://plus.unsplash.com/premium_photo-1669234114951-82de25da4bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      altText="Veterinarian examining a pet"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default IllnessExam;
