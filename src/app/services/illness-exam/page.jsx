import InfoSection from "@/components/InfoSection";

const IllnessExam = () => {
  const firstSection = {
    subheading: "Comprehensive Care for Your Pet's Health",
    text: "At Montrose Pet Clinic, our veterinarians provide thorough illness exams to diagnose and treat your pet's health issues. During the exam, we carefully assess your pet, discuss their medical history, and may recommend diagnostic tests such as blood work, fecal testing, or urinalysis to determine the best treatment plan.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl text-secondary font-bold mb-4">
        What Does a Typical Illness Exam Include?
      </h3>
      <ul className="list-disc list-inside pl-4 text-gray-700 leading-relaxed mb-6">
        <li>Thorough physical examination</li>
        <li>Discussion of illness history</li>
        <li>Diagnostic testing</li>
        <li>Diagnosis and treatment plan</li>
        <li>Discussion of treatment options and costs</li>
        <li>Discharge instructions</li>
      </ul>

      <h3 className="text-xl text-secondary font-semibold mb-2">
        Diagnostic Testing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Diagnostic testing may include blood work, fecal testing, urinalysis, X-rays, and other tests. Depending on the specific issue, additional tests such as cultures, cytology, ultrasound, or even surgery may be recommended.
      </p>

      <h3 className="text-xl text-secondary font-semibold mb-2">
        Common Conditions We Treat
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-6">
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

      {/* <h3 className="text-xl text-secondary font-semibold mb-2">
        Why Choose Montrose Pet Clinic?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Montrose Pet Clinic is fully equipped to diagnose and treat the illnesses listed above. Our facility includes a full-service laboratory and digital radiography to quickly identify conditions and begin treatment. We also have an in-house pharmacy to dispense medications immediately, ensuring your pet gets the care they need without delay.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Please note that we only offer hospitalization during clinic hours. Our team is dedicated to providing compassionate and effective care for your pet's health and well-being.
      </p> */}
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