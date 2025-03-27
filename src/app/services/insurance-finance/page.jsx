import InfoSection from "@/components/InfoSection";
import Link from "next/link";

const InsuranceFinance = () => {
  const firstSection = {
    subheading: "Care Now and Pay Later",
    text: "We use a third-party platform to help you in financing needs of your pet care. They provide simple payment plans for your immediate and unexpected needs. The application process takes only 90 seconds and finding a plan won’t affect your credit score. Plans range from $35 - $10,000 with no deferred interest or prepayment penalties.",
  };

  const restContent = (
    <>
      <p className="text-gray-700 text-center leading-relaxed mb-4">

        <b>APPLY AT <Link href="https://scratchpay.com/" className="text-blue-600">scratchpay.com</Link> or text PLAN to 97364</b>
      </p>
      <h3 className="text-2xl font-semibold text-secondary mb-2">How does it work?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
      First, start by finding a plan at scratchpay.com that works best for you. When approved, the clinic will be notified and complete the actions required in order to receive the funds that will then be used towards your pet’s medical care. You have the option to split upfront treatment costs into manageable monthly or bi-weekly payments.
      </p>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Get Ready for the Unexpected</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Just like people, pets can face costly health emergencies and chronic illnesses. In fact, nearly 1 in 2 pets need unexpected veterinary care before their first birthday. Over the past 10 years, increased access to advanced veterinary care has led to improved care, but also it increased costs. Pet insurances help to protect your pet and provide peace of mind when unexpected happens. Please contact:
      </p>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li><Link href="https://www.trupanion.com/" className="text-blue-600">trupanion.com</Link> or call 1 855-690-8123</li>
        <li>Petsecure.com or call 1 800-268-1169</li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Pet Insurance and Finance Options at Montrose Pet Clinic"
      altText="Pet insurance and finance options"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default InsuranceFinance;