import InfoSection from "@/components/InfoSection";

const DentalCare = () => {
  const firstSection = {
    subheading: "Bright Smiles for Brighter Futures",
    text: "Dental care is a key part of your pet’s everyday health and vitality. Early dental care such as regular teeth brushing, use of dental food, water additives, gels, and dental scrubs prevent early appearance of dental issues. Some breeds are very prone to dental diseases and they may need dental cleaning at an early age. Dental diseases bring constant pain for our lovely ones and also it can cause other serious impacts like heart disease. Dental exams and early preventive care help to keep them healthy and happy.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Did You Know?</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>80% of dogs & 70% cats over 3 years of age have dental disease.</li>
        <li>More than 13% of cats with oral disease tested positive for FeLv or FIV.</li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">Signs of Dental Disease</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>Bad Breath</li>
        <li>Change in chewing habits</li>
        <li>Yellow Brown crust on Teeth</li>
        <li>Tooth Loss</li>
        <li>Bleeding Gums</li>
        <li>Drooling</li>
      </ul>
      <br />
      <p className="text-gray-700 leading-relaxed mb-4">
        Montrose Pet Clinic is well equipped to provide superior dental care for your loved furry friends. Please call us for a dental exam for an oral health assessment.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Dental Care at Montrose Pet Clinic"
      image="/dentalcare.jpg"
      altText="Veterinarian performing dental care"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default DentalCare;