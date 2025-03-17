import InfoSection from "@/components/InfoSection";

const WellnessExam = () => {
  const firstSection = {
    subheading: "Annual Wellness Exam & Vaccinations",
    text: "At Montrose Pet Clinic, our dedication to wellness and preventive care is at the heart of our practice, offering early intervention and consistent oversight to safeguard your pet’s health. Embracing a comprehensive care approach, we ensure your pet enjoys a fuller, healthier life through regular health assessments, timely vaccinations, and the early identification of health issues. Annual Wellness Exam include a head to tail physical exam of your furry friend, checking the vitals such as body temp, Heart rate and respiratory rate. This will help the veterinarian to discuss recommendations for wellbeing of your furry friend aiming early detection of disease conditions and to take appropriate actions.",
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
        Just like in humans, vaccinations provide preventive care for pets and so they are protected from sufferings from some contagious diseases and also prevent spreading of the diseases. It saves money because you can avoid expenses from treatments of the pet. Here is the common Pet vaccines used in Alberta:
      </p>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Dogs:</b>
          <ul className="list-disc list-inside pl-4">
            <li>DAPP (Distemper, Adeno, Parvo & Parainfluenza) Vaccine</li>
            <li>Rabies</li>
            <li>Bordetella Vaccine</li>
          </ul>
        </li>
        <li>
          <b>Cats:</b>
          <ul className="list-disc list-inside pl-4">
            <li>FRCP (Feline Rhinotracheitis, Calici, Parvo) Vaccine</li>
            <li>Rabies</li>
            <li>Feline Leukemia</li>
          </ul>
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Vaccine Reactions
      </h3>
      <p>
        Vaccine reactions are very uncommon. Pets exhibit swelling around their face, eyes, vomiting, diarrhea, and full body hives are the symptoms and it usually happens within few hours of vaccinations. Please contact your pet care facility or an emergency clinic to deal with the reaction.
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