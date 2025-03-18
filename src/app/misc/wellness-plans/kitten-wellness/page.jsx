import InfoSection from "@/components/InfoSection";

const KittenWellness = () => {
  const firstSection = {
    subheading: "Kitten Wellness Plan",
    text: "Congratulations!!! We are so excited to welcome your new kitten to the Montrose Pet family. During the first year of your pet’s life, it is so important to have health checkups and procedures so that you can enjoy many years of love. Don’t worry! We’ve got you covered. Our compassionate and highly skilled staff are here for all of your health concerns for your new kitten. This Kitten Wellness Plan covers all preventative health care at low monthly payments that offer lots of savings. Together we can strive to give your new family member the best chance possible for a long and healthy life.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Kitten Wellness Plan Included Services</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li>2 preventative care exams – A full top-to-tail checkup of your pet at 12 & 16 weeks</li>
        <li>12- & 16-week shots & boosters</li>
        <ul className="list-disc list-inside pl-4 text-gray-700 leading-relaxed mb-4">
          <li>FRCP- Feline Rhinotracheitis, Calici-Panleukopenia, Chlamydia- given at 8, 12 & 16 weeks</li>
          <li>Only the 12- & 16-week boosters are included in this plan</li>
          <li>FeLV- Feline Leukemia Virus – Given at 12 & 16 weeks</li>
          <li>Rabies- given at 16 weeks</li>
        </ul>
        <li>Pre-anesthetic blood work – This will show us how the kidneys and liver are working prior to giving anesthetic medications. It also acts as a baseline for if your kitten becomes sick in the future, we will know where their levels were initially and help us treat them better.</li>
        <li>Blood collection fee</li>
        <li>Spay or neuter surgery</li>
        <li>2 doses of parasite prevention – prevention given will depend on size and age of the kitten</li>
        <li>Microchip Application</li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Kitten Wellness Plan at Montrose Pet Clinic"
      altText="Kitten Wellness Plan"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default KittenWellness;