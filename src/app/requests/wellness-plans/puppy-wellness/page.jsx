import InfoSection from "@/components/InfoSection";

const PuppyWellness = () => {
  const firstSection = {
    subheading: "Puppy Wellness Plan",
    text: "Congratulations!!! We are so excited to welcome your new puppy to the Montrose Pet family. During the first year of your pet’s life, it is so important to have health checkups and procedures so that you can enjoy many years of love. Don’t worry! We’ve got you covered. Our compassionate and highly skilled staff are here for all of your health concerns for your new puppy. This Puppy Wellness Plan covers all preventative health care at low monthly payments that offer lots of savings. Together we can strive to give your new family member the best chance possible for a long and healthy life.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">Puppy Wellness Plan Included Services</h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li>2 preventative care exams – A full top-to-tail checkup of your pet at 12 & 16 weeks</li>
        <li>12- & 16-week shots & boosters</li>
        <ul className="list-disc list-inside pl-4 text-gray-700 leading-relaxed mb-4">
          <li>DAPP- Distemper, Adenovirus Type 2, Parainfluenza, Parvovirus- Given at 8, 12, & 16 weeks</li>
          <li>Most breeders handle the first dose of this vaccine at 8 weeks</li>
          <li>Bordetella- Commonly known as Kennel cough- Given at 12 weeks</li>
          <li>Rabies- given at 16 weeks</li>
        </ul>
        <li>Pre-anesthetic blood work – This will show us how the kidneys and liver are working prior to giving anesthetic medications. It also acts as a baseline for if your puppy becomes sick in the future, we will know where their levels were initially and help us treat them better.</li>
        <li>Blood collection fee</li>
        <li>Spay or neuter surgery</li>
        <li>2 doses of parasite prevention – prevention given will depend on size and age of puppy</li>
        <li>Microchip Application</li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Puppy Wellness Plan"
      altText="Puppy Wellness Plan"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default PuppyWellness;