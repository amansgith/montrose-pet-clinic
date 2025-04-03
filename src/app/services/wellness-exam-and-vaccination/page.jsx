import InfoSection from "@/components/InfoSection";

const WellnessExam = () => {
  const firstSection = {
    subheading: "",
    text: "Annual wellness exams for pets are essential for preventive care, allowing veterinarians to monitor overall health, detect potential problems early, and administer necessary preventive care (vaccinations) and parasite prevention measures (deworming).",
};

const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        A Typical Wellness Visit Includes:
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>Comprehensive physical examination</li>
        <li>Discussion with the pet owner</li>
        <li>Diagnostic testing</li>
        <li>Vaccinations</li>
        <li>Preventive care</li>
        <li>Weight check and dental health assessment</li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Why Are Annual Wellness Visits Important?
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>Early detection of health issues</li>
        <li>Preventive care</li>
        <li>Monitoring overall health</li>
        <li>Peace of mind</li>
        <li>Cost-effectiveness</li>
      </ul>
    </>
);


  return (
    <InfoSection
      title="Annual Wellness Exam and Preventive Care at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      altText="Veterinarian examining a pet"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default WellnessExam;
