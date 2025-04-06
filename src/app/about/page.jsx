import Image from "next/image";

export default function AboutMontrose() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Why Choose Us?
          </h1>
          <p className="text-gray-700 leading-relaxed">
            We have served more than <span className="font-semibold">4,250 clients</span> in Beaumont and the surrounding areas. We have:
          </p>
          <ul className="list-decimal list-inside text-gray-700 mt-4 leading-relaxed">
            <li>Experienced veterinarians.</li>
            <li>Award-winning customer service.</li>
            <li>Transparency in our services.</li>
            <li>Easy appointment booking via our website and PetDesk app.</li>
            <li>
              Convenient access to your pet&apos;s medical history by downloading our customised Petdesk app.
            </li>
            <li>Monthly promotions to help you save money.</li>
            <li>Wellness plans for all pets (call us for more details).</li>
            <li>In-clinic lab and pharmacy srvices for faster diagnosis and treatment.</li>
          </ul>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Montrose Pet Clinic always welcomes new clients and patients!
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/counter.jpg"
            alt="Veterinary team at Montrose Pet Clinic"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}