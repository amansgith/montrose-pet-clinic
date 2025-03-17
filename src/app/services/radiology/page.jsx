import InfoSection from "@/components/InfoSection";

const Radiology = () => {
  const firstSection = {
    subheading: "Clear Insights for Your Pet's Health",
    text: "At Montrose Pet Clinic in Beaumont, Alberta, we understand the critical role of advanced imaging in diagnosing and treating pets. Our radiology services provide detailed, non-invasive insights into your pet’s internal health, utilizing state-of-the-art technology to ensure accurate and swift diagnoses. Whether it’s identifying a fracture, diagnosing a disease, or evaluating a chronic condition, our comprehensive imaging capabilities are at the core of our commitment to your pet’s well-being.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Our facility is equipped with the latest in veterinary imaging technology, offering a range of services to meet your pet&rsquo;s needs:
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Whole-Body Digital X-rays:</b> Our digital X-ray equipment provides high-resolution images of your pet&rsquo;s bones, organs, and internal structures, allowing for rapid assessment and diagnosis. Digital X-rays are essential for evaluating a wide array of conditions, from fractures and injuries to detecting foreign objects and assessing organ health.
        </li>
        <li>
          <b>Dental X-rays:</b> Oral health plays a significant role in your pet&rsquo;s overall well-being. Our dental X-ray capabilities enable us to view below the gum line, identifying dental disease, and hidden tooth root issues, and ensuring comprehensive dental care.
        </li>
        <li>
          <b>Referral to Radiologists:</b> For cases requiring specialized interpretation, we collaborate with expert radiologists, ensuring your pet&rsquo;s images are reviewed with the utmost precision, leading to accurate diagnoses and effective treatment plans.
        </li>
        <li>
          <b>Rapid Results:</b> Our advanced imaging technology not only provides superior image quality but also allows for quick results, enabling timely diagnosis and treatment.
        </li>
        <li>
          <b>Expertise and Experience:</b> Our team of veterinary professionals is skilled in radiographic technique and interpretation, ensuring the highest standards of diagnostic care.
        </li>
        <li>
          <b>Non-Invasive Diagnostics:</b> Radiology is a cornerstone of non-invasive diagnostics, offering critical insights without the need for surgical intervention, making it a stress-free experience for your pet.
        </li>
        <li>
          <b>Integrated Care:</b> Radiology is often the first step in a comprehensive diagnostic and treatment plan. At Montrose Pet Clinic, imaging results are integrated with other diagnostic information to provide a complete picture of your pet&rsquo;s health, informing our customized treatment strategies.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">Conclusion</h3>
      <p>
        Radiology services at Montrose Pet Clinic represent our commitment to providing the highest level of care, combining advanced technology with veterinary expertise. By offering detailed insights into your pet&rsquo;s health, we pave the way for accurate diagnoses and effective treatments, ensuring your beloved companion receives the best possible care. For more information on our radiology services or to schedule an appointment, please contact us. Together, we can ensure a healthier, happier life for your pet.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Radiology Services at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with an actual image URL
      altText="Veterinarian performing radiology"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Radiology;