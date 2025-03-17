import InfoSection from "@/components/InfoSection";

const WellnessExam = () => {
  const firstSection = {
    subheading: "Essential for Pet Health",
    text: "We recommend that your pet minimally be seen semiannually to ensure the best health! With your pet’s wellness exam you might also want to have bloodwork done; for pets over 7 we recommend a geriatric blood profile. Make sure to discuss your pet’s bloodwork options with our doctors while your pet is here. Along with your pet’s annual wellness exam, we recommend you have your pet vaccinated. Call us to find out which vaccines your pet should have and to schedule your pet’s appointment. Your pet can benefit greatly from regular wellness examinations or checkups. Whether your pet is a youngster, a “senior citizen,” or any age in between, wellness examinations provide an excellent opportunity for us to conduct a thorough physical examination and develop a health profile for your pet. This information will help us identify medical problems and any other issues that can affect your pet’s health and quality of life. A wellness examination includes an evaluation of all your pet’s major organ systems. We’ll use the wellness visit to ask you questions about your pet’s behavior, appetite, exercise habits, and regular activities at home. This is also an excellent time for us to discuss any routine diagnostic testing that may benefit your pet or to recommend any vaccinations that may be due. If your pet seems healthy, a wellness examination is a good opportunity to note any changes, such as weight gain or loss or other subtle changes that may not be evident at home. Sometimes, information obtained during a wellness examination can help detect early signs of illness and address health issues before they progress. A wellness examination is also your chance to have us address your questions or concerns about your pet. We welcome your questions. No question is too small or too silly, and it is our pleasure to address your concerns. We strive to help you understand your pet’s health considerations, and we encourage you to be involved in decisions regarding your pet’s health care. Finally, wellness examinations help us establish a relationship with you and your pet. Through your pet’s physical examinations, other wellness procedures, and our consultations with you, we get to know your pet and learn about his or her lifestyle, personality, health risks, home environment, and other important information. We encourage you to use wellness examinations to take an active role in your pet’s health care.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Core Elements of Our Wellness Checks
      </h3>
      <p>
        Our wellness checks are central to preventive health care, providing a
        detailed examination of your pet’s health, establishing health
        baselines, and identifying early signs of potential issues. These
        essential checks include:
      </p>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Thorough Health Evaluation:</b> A comprehensive examination to spot
          abnormalities or early disease indicators.
        </li>
        <li>
          <b>Vital Signs Monitoring:</b> Checking heart rate, respiratory rate,
          and temperature to ensure normalcy.
        </li>
        <li>
          <b>Diagnostic Screening:</b> Utilizing blood panels, urinalysis, and
          fecal exams to uncover hidden diseases.
        </li>
        <li>
          <b>Vaccination Updates:</b> Customized vaccinations based on your
          pet’s age and health status.
        </li>
        <li>
          <b>Guidance on Parasite Prevention:</b> Expert advice on preventing
          fleas, ticks, heartworms and intestinal worms.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Montrose Pet Clinic’s Wellness Services
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Wellness Exam:</b> Our cornerstone service, providing a thorough
          health status assessment and a personalized care plan.
        </li>
        <li>
          <b>Annual Exam and Vaccinations:</b> Essential annual check-ups and
          vaccinations tailored to your pet’s specific needs.
        </li>
        <li>
          <b>Parasite Prevention:</b> Comprehensive programs to shield your pet
          from parasites.
        </li>
        <li>
          <b>Nutritional Consultation:</b> Custom advice to optimize your pet’s
          health through nutrition.
        </li>
        <li>
          <b>Health Certificates for Travel and Export:</b> Ensuring your pet is
          prepared for travel or relocation with all necessary health
          certifications.
        </li>
        <li>
          <b>Nail Trim & Anal Gland Check:</b> Regular care to prevent
          discomfort and health issues.
        </li>
        <li>
          <b>Microchip Implantation:</b> A quick, simple procedure for pet
          identification.
        </li>
        <li>
          <b>Behavioural Consult and Palliative Care:</b> Specialized support
          for behavioral issues and end-of-life care.
        </li>
        <li>
          <b>Referral to Specialists:</b> Access to expert care within our
          network for specialized treatment needs.
        </li>
        <li>
          <b>Hospitalization and IV Med Care:</b> Advanced treatment and
          monitoring for pets in need of intensive care.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        The Importance of Early Detection
      </h3>
      <p>
        Early identification of health issues is crucial, often resulting in
        simpler, more cost-effective treatments and preventing the progression
        of diseases. Our routine wellness visits are key to catching conditions
        early, leading to significantly better outcomes for your pet.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Personalized Care Across All Life Stages
      </h3>
      <p>
        Recognizing that pets age faster than humans, we adapt our wellness and
        preventive care to meet their evolving health needs, from youth through
        to their senior years. Tailored care plans address age-specific
        concerns, ensuring your pet’s health and happiness at every stage.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        The Role of Pet Owners
      </h3>
      <p>
        Pet guardians play a vital role in the success of our wellness programs.
        By keeping up with regular vet visits, vaccination schedules, and
        preventive measures, you contribute greatly to your pet’s well-being.
        Awareness of illness signs and prompt action further enhances the
        chances of early treatment success.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">Conclusion</h3>
      <p>
        At Montrose Pet Clinic, we believe in laying a foundation for a long,
        vibrant life for pets through dedicated wellness and preventive care.
        This strategy, emphasizing regular health checks, preventive measures,
        and early illness detection, is essential for maintaining your pet’s
        health and joy. Your commitment as a pet guardian is invaluable to this
        mission, ensuring a lasting, positive impact on your pet’s life.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Wellness Services at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      altText="Veterinarian examining a pet"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default WellnessExam;
