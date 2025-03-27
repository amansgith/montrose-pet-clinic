import InfoSection from "@/components/InfoSection";

const Deworming = () => {
  const firstSection = {
    subheading: "",
    text: "Deworming is an important part of preventive care that helps protect pets from different types of parasites. Some live inside the body, while others live on the skin or fur. Certain parasites can also spread from pets to humans and cause serious health problems, including blindness or cysts in the brain or abdomen. Some common parasites are listed below:",
  };

  const restContent = (
    <>
      <ul className="list-disc list z-outside pl-4 text-gray-700 leading-relaxed">
        <li>Round worms</li>
        <li>Hook worms</li>
        <li>Tapeworms</li>
        <li>Pin worms</li>
        <li>Ticks and fleas</li>
        <li>Lice</li>
        <li>Ear mites and other mites</li>
        <li>Heart worms</li>
      </ul>
      <br />
      <p>
        At Montrose Pet Clinic, we offer deworming programs for pets of all
        ages, along with Fecal PCR tests to detect parasites like Giardia and
        fecal ova tests to check for other internal parasites.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Deworming Services at Montrose Pet Clinic"
      altText="Veterinarian examining a pet"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Deworming;
