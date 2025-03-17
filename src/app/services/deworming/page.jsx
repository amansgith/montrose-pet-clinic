import InfoSection from "@/components/InfoSection";

const Deworming = () => {
  const firstSection = {
    subheading: "Deworming",
    text: "Deworming is an integral part of preventive care which will protect pets from various kinds of parasites. Ecto and endo parasites are prevalent and some of them are zoonotic (Transfer from pets to humans). They can cause blindness to cysts in brain or abdomen. The common Endo and Ecto parasites are listed below for your information:",
  };

  const restContent = (
    <>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>Round worms</li>
        <li>Hook worms</li>
        <li>Tapeworms</li>
        <li>Pin worms</li>
        <li>Ticks and Fleas</li>
        <li>Lice</li>
        <li>Ear mites and other mites</li>
        <li>Heart worms</li>
      </ul>
      <br />
      <p>
        At Montrose Pet Clinic, we offer deworming protocol for pets of all ages, Fecal PCR tests to detect any Protozoal parasites like Giardia and fecal Ova tests.
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