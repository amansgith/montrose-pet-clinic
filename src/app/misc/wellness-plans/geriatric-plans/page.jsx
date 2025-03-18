import InfoSection from "@/components/InfoSection";

const SeniorWellness = () => {
  const firstSection = {
    subheading: "Senior Wellness Plan",
    text: "Welcome to the Golden Years. As your pet steps into their senior years, we want to ensure that you have as much time with them as you possibly can. This Senior Wellness Plan covers all preventative health care at low monthly payments so you can spend your pet’s senior years with a little less stress.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Senior Wellness Plan Included Services</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li><b>2 senior consultations</b> – 1 full top-to-tail checkup of your pet, and 1 follow up consultation within 3 months</li>
        <li>Senior blood work</li>
        <ul className="list-disc list-inside pl-4 text-gray-700 leading-relaxed mb-4">
          <li>Complete blood count</li>
          <li>Electrolytes</li>
          <li>Liver values</li>
          <li>Kidney values</li>
          <li>Thyroid level</li>
        </ul>
        <li>Urinalysis – used to detect infection, dehydration, and disease</li>
        <li>Blood/urine collection fee</li>
        <li>2-view radiographs - Taken of the area that most affects your pet’s mobility to screen for arthritis or other bone abnormalities</li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Senior Wellness Plan at Montrose Pet Clinic"
      altText="Senior Wellness Plan"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default SeniorWellness;