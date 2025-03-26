import InfoSection from "@/components/InfoSection";

const Laboratory = () => {
  const firstSection = {
    subheading: "Precision Diagnostics for Pet Health",
    text: "Montrose Pet Clinic stands at the forefront of veterinary diagnostics with our comprehensive laboratory services. Our state-of-the-art lab allows us to perform a wide array of tests quickly and accurately, ensuring your pet receives the timely and effective care they need. Understanding the crucial role of diagnostics in animal health, we offer advanced testing capabilities to detect, diagnose, and monitor a variety of conditions.",
  };

  const restContent = (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        We are equipped with in-house Idexx full-service lab. Our laboratory
        machines include Lasercyte, Catalyst, Snap Reader, Sedi view, Urine
        strip reader & Microscope.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The in-clinic lab helps us diagnose diseases quickly and start treatment
        without delay. We perform complete blood count, biochemistry, complete
        urinalysis, ear cytology, and snap tests such as canine pancreatic
        lipase, feline pancreatic lipase, feline infectious peritonitis, FeLV,
        fecal smear, and more.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tests we are not able to perform in the clinic are sent out to Idexx Lab
        or Antech Lab for processing.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Laboratory Services at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      altText="Veterinarian performing laboratory tests"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Laboratory;
