import InfoSection from "@/components/InfoSection";

const DentalCare = () => {
  const firstSection = {
    subheading: "Bright Smiles for Brighter Futures",
    text: "Good dental health is crucial to your pet&rsquo;s overall well-being. At Montrose Pet Clinic, located in the heart of Beaumont, Alberta, we&rsquo;re dedicated to providing comprehensive dental care that ensures your furry family members have healthy teeth and gums. Our state-of-the-art clinic offers a wide range of dental services, from routine cleanings to more complex procedures, all designed to prevent dental disease and its complications.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Our Comprehensive Dental Services Include:
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Dental Cleaning, Scaling, Probing, &amp; Polishing:</b> Regular professional dental cleanings are essential for maintaining your pet&rsquo;s oral health. Our thorough cleaning process removes plaque and tartar, both above and below the gumline, preventing periodontal disease.
        </li>
        <li>
          <b>Dental Extractions:</b> Sometimes, the best way to resolve pain and prevent further oral health issues is to remove a tooth. We perform safe and effective dental extractions, prioritizing your pet&rsquo;s comfort throughout the process.
        </li>
        <li>
          <b>Oral Mass Removal:</b> If your pet has an oral tumor, early detection and removal can be life-saving. Our team is skilled in the delicate task of removing oral masses, ensuring thorough care and analysis.
        </li>
        <li>
          <b>Dental Radiographs and Evaluations:</b> Advanced dental X-rays allow us to see below the surface of your pet&rsquo;s gums, identifying any hidden problems that need to be addressed, ensuring comprehensive oral health care.
        </li>
        <li>
          <b>Dental Products:</b> In addition to our services, we offer a selection of dental care products, including specially formulated foods, treats, and toys that help maintain oral hygiene between professional cleanings.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Why Choose Montrose Pet Clinic for Your Pet&rsquo;s Dental Needs?
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Expertise:</b> Our veterinary team has extensive training in pet dental care, employing the latest techniques and technologies to ensure the best outcomes.
        </li>
        <li>
          <b>Comprehensive Care:</b> From preventative cleanings to advanced surgeries, we offer all the dental services your pet might need under one roof.
        </li>
        <li>
          <b>Comfort and Compassion:</b> We understand that dental procedures can be stressful for pets and their owners. Our clinic is designed to be a calm, comforting environment, and our staff is dedicated to making the experience as stress-free as possible.
        </li>
        <li>
          <b>Education:</b> We believe in empowering pet owners with knowledge. Our team guides at-home dental care routines, helping you keep your pet&rsquo;s teeth clean and healthy between visits.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        The Importance of Dental Care for Pets
      </h3>
      <p>
        Dental disease is one of the most common health issues in pets, with many dogs and cats showing signs by age three. Without proper dental care, plaque and tartar can lead to painful infections, loss of teeth, and can even harm your pet&rsquo;s internal organs. Our goal at Montrose Pet Clinic is to prevent these issues before they start, ensuring your pet can eat, play, and live comfortably.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Partnering with Pet Owners for Optimal Dental Health
      </h3>
      <p>
        At Montrose Pet Clinic, we view dental care as a partnership between our clinic and pet owners. We&rsquo;re here to provide professional dental services and education, but the daily care you provide at home is equally important. Together, we can ensure your pet enjoys a lifetime of healthy smiles.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">Conclusion</h3>
      <p>
        Maintaining your pet&rsquo;s dental health is a critical aspect of their overall care. At Montrose Pet Clinic, we&rsquo;re committed to providing the comprehensive dental services your pet needs to live a happy, healthy life. If you&rsquo;ve noticed bad breath or any changes in your pet&rsquo;s oral health, don&rsquo;t wait. Contact us today to schedule a dental evaluation and take the first step towards a brighter, healthier future for your pet.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Dental Care at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=2069&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with an actual image URL
      altText="Veterinarian performing dental care"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default DentalCare;