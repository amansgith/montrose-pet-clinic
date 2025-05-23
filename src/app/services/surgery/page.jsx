import Image from "next/image";

const Surgery = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Surgical Services
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
            At Montrose Pet Clinnic, we offer a wide range of surgical services, including routine procedures like spays and neuters, dental work and emergency surgeries.
            Common surgical procudures:
          </p>
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            1. Spaying & Neutering
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To prevent unwanted pregnancies and reduce certain health and behavioural issues.
          </p>
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            2. Dental Surgery
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This includes tooth extractions, scaling and polishing.
          </p>
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            3. Soft Tissue surgery
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This includes lump removal, cyst removal, foreign body removal, bladder stone removal, laceration repair, porcupine quill removal and so on.
          </p>
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            4. Eye surgery
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do cherry eye surgery and eyelid tumor removal.
          </p>
        </div>
      </div>
      <div className="text-md mt-4 text-gray-800">
        <p>We know surgery & anesthesia are very stressful for you and your furry friend and the risks associated with any surgical procedure can cause a lot of stress and anxiety. The risks involved with anesthesia and surgery have decreased to great extend because of scientific advancement in recent years. Here are the precautions followed by us to reduce the risk of anesthesia and surgery. </p>
        <ul className="list-decimal list-inside mt-4 space-y-2 pl-12">
          <li>Thorough pre surgical exam </li>
          <li>Pre anesthetic blood work </li>
          <li>Tailored anesthesia plan for each patient</li>
          <li>Technology assisted monitoring</li>
          <li>Dedicated nurse to monitor patient during and post surgery</li>
        </ul>
        <p className="mt-4">Please do not hesitate to ask any questions at the time of signing surgery consent or prior. <span className="font-bold">We are here to assist and help you</span>. </p>
      </div>
    </div>
  );
};

export default Surgery;
