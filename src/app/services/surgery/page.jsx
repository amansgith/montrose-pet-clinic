import Image from "next/image";

const Surgery = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Surgical Services at Montrose Pet Clinic
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/surgery.jpg"
            alt="Veterinarian performing surgery"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-gray-700 leading-relaxed mb-4 font-bold">
            We perform routine surgeries every day. Here is a list of surgeries we perform in-house:
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default Surgery;