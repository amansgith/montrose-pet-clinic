import InfoSection from "@/components/InfoSection";

const Laboratory = () => {
  const firstSection = {
    subheading: "Precision Diagnostics for Pet Health",
    text: "Montrose Pet Clinic, nestled in Beaumont, Alberta, stands at the forefront of veterinary diagnostics with our comprehensive laboratory services. Our state-of-the-art lab allows us to perform a wide array of tests quickly and accurately, ensuring your pet receives the timely and effective care they need. Understanding the crucial role of diagnostics in animal health, we offer advanced testing capabilities to detect, diagnose, and monitor a variety of conditions.",
  };

  const restContent = (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        We are equipped with Idexx full-service lab in-situ. We have Lasercyte, Catalyst, Snap Reader, Sedi view, Urine strip reader & Microscope.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The In-clinic Lab helps us to diagnose diseases immediately and start treatments in an early time. We perform Complete Blood Count, Bio chemistry, Complete Urinalysis, Ear cytology, Snap tests such as Canine Pancreatic Lipase, Feline Pancreatic Lipase, Feline Infectious Peritonitis, FeLv, Fecal smear and so on.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We collect and send out samples to Idexx Lab or Antech Lab for tests that we are not able to perform in clinic.
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