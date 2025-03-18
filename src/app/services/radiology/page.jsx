import InfoSection from "@/components/InfoSection";

const Radiology = () => {
  const firstSection = {
    subheading: "Clear Insights for Your Pet's Health",
    text: "At Montrose Pet Clinic in Beaumont, Alberta, we understand the critical role of advanced imaging in diagnosing and treating pets. Our radiology services provide detailed, non-invasive insights into your pet’s internal health, utilizing state-of-the-art technology to ensure accurate and swift diagnoses. Whether it’s identifying a fracture, diagnosing a disease, or evaluating a chronic condition, our comprehensive imaging capabilities are at the core of our commitment to your pet’s well-being.",
  };

  const restContent = (
    <>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Whole-Body Digital X-rays:</b> Our digital X-ray equipment provides high-resolution images of your pet’s bones, organs, and internal structures, allowing for rapid assessment and diagnosis. Digital X-rays are essential for evaluating a wide array of conditions, from fractures and injuries to detecting foreign objects and assessing organ health.
        </li>
        <li>
          <b>Dental X-rays:</b> Oral health plays a significant role in your pet’s overall well-being. Our dental X-ray capabilities enable us to view below the gum line, identifying dental disease, and hidden tooth root issues, and ensuring comprehensive dental care.
        </li>
        <li>
          <b>Referral to Radiologists:</b> For cases requiring specialized interpretation, we collaborate with expert radiologists, ensuring your pet’s images are reviewed with the utmost precision, leading to accurate diagnoses and effective treatment plans.
        </li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Radiology Services at Montrose Pet Clinic"
      image="/radiology.jpg"
      altText="Veterinarian performing radiology"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Radiology;