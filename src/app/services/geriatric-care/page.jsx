import InfoSection from "@/components/InfoSection";

const GeriatricCare = () => {
  const firstSection = {
    subheading: "Caring for Your Aging Pet",
    text: "Pets age faster than people. Age affects health, and pets progress through life stages more rapidly than people.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Feline Life Stages</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li>Kitten: From birth up to 1 year old</li>
        <li>Young Adult: From 1 to 6 years old</li>
        <li>Mature Adult: From 7 to 10 Years Old</li>
        <li>Senior: Over 10 Years Old</li>
      </ul>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Canine Life Stages</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li>Puppy: From birth to cessation of rapid growth (Approximately 6-9 months but vary with breed and size)</li>
        <li>Young Adult: From cessation of rapid growth to 3-4 years of age (Physical and Social maturation)</li>
        <li>Mature Adult: From completion of physical and social maturation until the 25% of estimated life span</li>
        <li>Senior: From that last 25% of estimated lifespan through end of life</li>
      </ul>
      <h3 className="text-2xl font-semibold text-secondary mb-2">A Typical Geriatric Pet Consult Includes:</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li>A physical exam</li>
        <li>Diagnostic Screening Tests</li>
        <li>A review of results</li>
      </ul>
      <h3 className="text-2xl font-semibold text-secondary mb-2">What We Look at in a Geriatric Pet Visit?</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li>Physical changes in your pet’s ears, eyes, teeth, joints, skin, body weight, etc.</li>
        <li>Heart and Lungs</li>
        <li>Liver</li>
        <li>Pancreas and intestine</li>
        <li>Kidneys</li>
        <li>Thyroid</li>
        <li>Blood cells</li>
        <li>Urine</li>
        <li>Feces</li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Geriatric Care at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1587518102280-8d5fdcb68d13?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      altText="Veterinarian examining an elderly pet"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default GeriatricCare;