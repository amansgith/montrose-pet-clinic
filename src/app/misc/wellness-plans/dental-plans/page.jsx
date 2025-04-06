import InfoSection from "@/components/InfoSection";

const DentalPlan = () => {
  const firstSection = {
    subheading: "Dental Plan",
    text: "Dental disease affects 80% of pets by 3 years old, and if left unchecked, can lead to organ damage later in life. Our goal is to keep your pet as happy and healthy for as long as possible, but we also know that some preventative care can be costly. The Montrose Dental Plan will help you provide your pet the necessary dental care at low monthly payments so the burden of cost does not seem so daunting.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Dental Plan Included Services</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li><b>2 free dental exams</b> - 1 performed on the day of enrollment of this plan, and 1 performed 3 months prior to your scheduled dental to assess the level of cleaning that may be needed</li>
        <li><b>Pre-anesthetic bloodwork</b> - This will show us how the kidneys and liver are working prior to giving anesthetic medications.</li>
        <li><b>Blood collection fee</b></li>
        <li><b>Anesthesia induction & maintenance (60 min)</b></li>
        <li><b>Catheter IV placement</b></li>
        <li><b>IV fluids</b></li>
        <li><b>Dental cleaning</b></li>
        <li><b>Dental radiographs</b> - Allows us to see what is happening below the gumline</li>
        <li><b>Day hospitalization</b></li>
        <li><b>Post dental pain medication</b></li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Dental Plan"
      altText="Dental Plan"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default DentalPlan;