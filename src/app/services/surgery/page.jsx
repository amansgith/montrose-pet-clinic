import InfoSection from "@/components/InfoSection";

const Surgery = () => {
  const firstSection = {
    subheading: "Expert Surgical Care for Your Pet",
    text: "We perform routine surgeries every day. Here is a list of surgeries we perform in-house:",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        1. Spay & Neuter
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Reproductive surgeries benefit cats and dogs a lot. These surgeries prevent unwanted litters and also help to reduce the occurrence of certain cancers. These surgeries help for behavioral modifications (Make them calm down, avoid dominance). At Montrose Pet Clinic we do spay and neuter for dogs, cats, and rabbits.
      </p>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        2. Soft Tissue Surgeries
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Laceration repair, wound management, hematoma surgery, cyst or abscess removal/drain, foreign body removal, cystotomy or urinary bladder surgery, cherry eye surgery, etc. come under this category.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Montrose Pet Clinic is equipped with a full-service surgery room, monitoring machines like pulse oximetry, ECG, and veterinary Doppler to provide excellent care for your loved ones. We also have a Baer Hugger system to keep your furry friend warm at the time of surgery.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We refer orthopedic surgeries and other complex surgeries to specialist centers so that our patients get the best care.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Surgical Services at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1599442996649-9aaa85137482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      altText="Veterinarian performing surgery"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Surgery;