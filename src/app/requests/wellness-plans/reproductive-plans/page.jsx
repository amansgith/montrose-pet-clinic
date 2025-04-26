import InfoSection from "@/components/InfoSection";

const PrePaymentPlan = () => {
  const firstSection = {
    subheading: "Pre-Payment Plan for Reproductive Surgeries",
    text: "At Montrose Pet Clinic, we understand that the cost of preventative care for your pet can be costly. To help with those costs, we offer a Pre-Payment Plan for reproductive surgeries, allowing you to break down the cost of spay or neuter surgery into manageable monthly payment installments.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Included and Additional Services</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Below is a list of services included in our spay and neuter estimates. Please indicate your choices at the time of signing the agreement:
      </p>
      <ul className=" list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li>_______ <b>Elective reproductive surgery</b> (spay or neuter)</li>
        <li>_______ Pre-anesthetic bloodwork (Mini panel included and full panel available upon request)</li>
        <li>_______ Microchip application</li>
      </ul>
      <h3 className="text-xl font-semibold text-secondary mb-2">Optional Additional Services</h3>
      <ul className=" list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li>_______ Vaccinations if due (cost varies, please inquire)</li>
        <li>_______ Complementary nail trim</li>
        <li>_______ Anal gland expression</li>
        <li>_______ Ear cleaning</li>
        <li>_______ Dew claw removal</li>
        <li>_______ Dewormer/flea & tick medication (cost varies, please inquire)</li>
        <li>_______ Extraction of baby teeth (cost varies, please inquire)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        – For female pets, additional costs may apply if your pet is in heat or pregnant at the time of surgery due to the additional time, material, and risk involved. These costs will not be included in this pre-payment plan and will be due at the time of surgical discharge.
      </p>
      <h3 className="text-xl font-semibold text-secondary mb-2">Payment Details</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        – The total amount payable for this plan will depend on the selected services. Upon entering into this agreement, your pet’s elective reproductive surgery must be booked.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Reproductive Surgery Plan"
      altText="Pre-Payment Plan"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default PrePaymentPlan;
