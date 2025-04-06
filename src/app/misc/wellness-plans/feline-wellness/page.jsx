import InfoSection from "@/components/InfoSection";

const FelineWellness = () => {
  const firstSection = {
    subheading: "Feline Wellness Plan",
    text: "Preventative Care is vital for the overall health of your pet. Providing the necessary vaccinations, exams, and tests, helps us to ensure your pet’s health and greatly increase the chances of finding any potential issues early for better outcomes and lower costs. Montrose Wellness is a preventative Wellness Plan designed to:",
  };

  const restContent = (
    <>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li><b>Reduce the cost of pet ownership</b></li>
        <li><b>Keep your pet healthy and happy with important routine care</b></li>
        <li><b>Reduce the risk of disease by detecting any issues early</b></li>
        <li><b>Provide payment flexibility, ideal for convenience and budgeting</b></li>
      </ul>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Wellness Plan Included Services</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li><b>Annual physical exam</b> – A full top-to-tail checkup of your pet</li>
        <li><b>Annual shots & boosters</b></li>
        <ul className="list-disc list-inside pl-4 text-gray-700 leading-relaxed mb-4">
          <li>FRCP- Feline Rhinotracheitis, Calici-Panleukopenia, Chlamydia</li>
          <li>FeLv- Feline Leukemia Virus</li>
          <li>Rabies- given at 16 weeks and 1 year initially. Every 3 years thereafter</li>
        </ul>
        <li><b>Routine blood work</b></li>
        <ul className="list-disc list-inside pl-4 text-gray-700 leading-relaxed mb-4">
          <li>Complete blood count</li>
          <li>Electrolytes</li>
          <li>Liver values</li>
          <li>Kidney values</li>
          <li>Thyroid level</li>
        </ul>
        <li><b>Urine/fecal tests</b> - used to detect infection, dehydration, disease, and parasites</li>
        <li><b>Collection fee</b> - blood and urine collection</li>
        <li><b>2 doses of parasite prevention</b> – choose between an oral, or topical medication</li>
        <li><b>Nail trim</b> - nail trim done during annual wellness exam (if your animal requires sedation for a nail trim, that is not included in the cost of the Wellness Plan and will be payable prior to sedation being given)</li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Feline Wellness Plan"
      altText="Feline Wellness Plan"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default FelineWellness;