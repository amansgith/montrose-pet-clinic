import InfoSection from "@/components/InfoSection";

const WellnessExam = () => {
  const firstSection = {
    subheading: "",
    text: "At Montrose Pet Clinic, our dedication to wellness and preventive care is at the heart of our practice, offering early intervention and consistent oversight to safeguard your pet’s health. Embracing a comprehensive care approach, we ensure your pet enjoys a fuller, healthier life through regular health assessments, timely vaccinations, and the early identification of health issues. The annual wellness exam include a head to tail physical exam of your furry friend, checking vitals such as body temperature, heart rate, and respiratory rate. This helps the veterinarian provide personalized recommendations for your pet’s well-being, focusing on early detection of potential health issues and timely intervention.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        A Typical Wellness Visit Includes:
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>A Physical Exam:</b> A comprehensive examination to spot abnormalities or early disease indicators.
        </li>
        <li>
          <b>Diagnostic Screening Tests:</b> Utilizing blood panels, urinalysis, and fecal exams to uncover hidden diseases.
        </li>
        <li>
          <b>A Review of Results:</b> Discussing the findings and recommendations for your pet&rsquo;s health.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Vaccinations
      </h3>
      <p>
      Just like in humans, vaccinations provide essential preventive care for pets, protecting them from contagious diseases and helping prevent the spread of infections. Vaccinating your pet can also save you money by reducing the risk of costly treatments. Here are the common pet vaccines used in Alberta:
      </p>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Dogs:</b>
          <ul className="list-disc list-inside pl-4">
            <li>DAPP (Distemper, Adeno, Parvo & Parainfluenza) vaccine</li>
            <li>Rabies vaccine</li>
            <li>Bordetella vaccine</li>
          </ul>
        </li>
        <li>
          <b>Cats:</b>
          <ul className="list-disc list-inside pl-4">
            <li>FRCP (Feline Rhinotracheitis, Calici, Parvo) vaccine</li>
            <li>Rabies vaccine</li>
            <li>Feline Leukemia vaccine</li>
          </ul>
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Vaccine Reactions
      </h3>
      <p>
      Vaccine reactions are rare, but if they occur, symptoms like facial swelling, eye swelling, vomiting, diarrhea, or full-body hives typically appear within a few hours of vaccination. Please contact your pet care facility or an emergency clinic to deal with the reaction.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Wellness Exam and Vaccination Services at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      altText="Veterinarian examining a pet"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default WellnessExam;