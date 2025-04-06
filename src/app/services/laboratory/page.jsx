import Image from "next/image";

const Laboratory = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Title Section */}
      <h1 className="text-center text-4xl font-bold text-primary">
        Laboratory services
      </h1>

      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 text-justify">
        {/* Image */}
        <div className="md:w-1/3">
          <Image
            src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="veterinarian performing laboratory tests"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Precision diagnostics for pet health
          </h2>
          <p>
            Montrose pet clinic offers a wide range of laboratory services,
            including in-house testing for quick results and outside lab
            services for more comprehensive analysis, to help diagnose and
            monitor pet health.
          </p>
        </div>
      </div>

      {/* Rest Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        {/* Content */}
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            In-house laboratory services
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Complete blood count (CBC)</li>
            <li className="mb-2">Biochemistry panel</li>
            <li className="mb-2">Urinalysis</li>
            <li className="mb-2">Fecal analysis</li>
            <li className="mb-2">Cytology</li>
            <li className="mb-2">Snap tests</li>
          </ul>

          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Outside laboratory services
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Biopsy and histopathology</li>
            <li className="mb-2">Culture and sensitivity</li>
            <li className="mb-2">
              Specialized tests for thyroid problems, cushing&apos;s or
              Addison&apos;s
            </li>
            <li className="mb-2">Drug tests</li>
          </ul>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/radiology.jpg"
            alt="laboratory equipment"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Radiology Section */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-2">
          Radiology services
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We are equipped with a whole-body digital X-RAY machine which allows
          us to diagnose various conditions such as fractures, tumors, and heart
          diseases.
        </p>
      </div>
    </div>
  );
};

export default Laboratory;