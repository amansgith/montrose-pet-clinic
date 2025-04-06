import Image from "next/image";

const MiscellaneousServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Title Section */}
      <h1 className="text-center text-4xl font-bold text-primary">
        Miscellaneous Services
      </h1>

      {/* First Section */}
      <div className="text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Comprehensive care for your pet&apos;s unique needs
        </h2>
        <p>
          At Montrose Pet Clinic, we offer a variety of miscellaneous services
          to ensure your pet&apos;s overall well-being. From routine care to
          specialized treatments, our team is dedicated to providing the highest
          quality of care for your furry friends.
        </p>
      </div>

      {/* Services Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Services List */}
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-semibold text-secondary mb-6">
            Our miscellaneous services include:
          </h3>
          <ul className="list-disc list-outside pl-4 mb-6">
            <li className="mb-2">Nail trim</li>
            <li className="mb-2">Microchip</li>
            <li className="mb-2">Anal sac expression</li>
            <li className="mb-2">Pain management</li>
            <li className="mb-2">Grooming with sedation</li>
          </ul>

          {/* Nutrition Services */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Nutrition services
          </h3>
          <p className="mb-4">
            Nutrition consult at Montrose pet clinic involves our veterinarian
            or veterinary technician assessing your pet&apos;s dietary needs and
            current health status to create a personalized feeding plan,
            ensuring optimal health and addressing specific concerns.
          </p>

          {/* Geriatric Patient Care */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            Geriatric patient care
          </h3>
          <p className="mb-4">
            Geriatric patient care focuses on the unique needs of older animals including regualar wellness exams, early detection of age related conditions and tailored treatment plans to maintain their quality of life.
          </p>

          {/* These Visits Include */}
          <h3 className="text-xl font-semibold text-secondary mb-4">
            These visits include:
          </h3>
          <ul className="list-disc list-outside pl-4">
            <li className="mb-2">Thorough physical exams</li>
            <li className="mb-2">Diagnostic testing</li>
            <li className="mb-2">Thyroid testing</li>
            <li className="mb-2">Dental care</li>
            <li className="mb-2">Vision and hearing assessment</li>
            <li className="mb-2">Cognitive function test</li>
            <li className="mb-2">Nutrition assessment</li>
          </ul>
        </div>

        {/* Image Collage */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="relative w-full h-40">
            <Image
              src="/brush.jpg"
              alt="animal brush image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-full h-60">
            <Image
              src="/Nailcut.jpg"
              alt="nail cutter image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-full h-60">
            <Image
              src="/microchip.jpg"
              alt="Microchip image"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* <div className="relative w-full h-60">
            <Image
              src="/pain-management.jpg"
              alt="Pain management"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-full h-40">
            <Image
              src="/grooming.jpg"
              alt="Grooming with sedation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousServices;
