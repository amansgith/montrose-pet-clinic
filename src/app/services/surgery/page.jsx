import InfoSection from "@/components/InfoSection";

const Surgery = () => {
  const firstSection = {
    subheading: "Expert Surgical Care for Your Pet",
    text: "Montrose Pet Clinic in Beaumont, Alberta, provides a comprehensive range of surgical services, from routine procedures like spaying and neutering to more advanced soft tissue surgeries. Our dedicated team employs the latest surgical techniques and technology to ensure your pet receives the highest level of care.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Our Surgical Services Include
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Spay and Neuter:</b> Essential for preventing unwanted litters and
          reducing the risk of certain health issues, our spay and neuter
          services are performed with your pet&rsquo;s safety and comfort in mind.
        </li>
        <li>
          <b>Soft Tissue Surgeries:</b> We offer a variety of soft tissue
          surgeries, including those for the digestive, respiratory, and urinary
          systems, addressing conditions that affect your pet&rsquo;s quality of life.
        </li>
        <li>
          <b>Lump Removal:</b> Early removal and biopsy of lumps can
          significantly impact your pet&rsquo;s health, potentially preventing the
          spread of cancer.
        </li>
        <li>
          <b>Laceration and Wound Care:</b> Our clinic is equipped to handle all
          types of wounds, providing careful treatment to ensure proper healing
          and prevent infection.
        </li>
        <li>
          <b>Urinary Bladder Surgery (Cystotomy):</b> For pets suffering from
          bladder stones or other urinary issues, we offer specialized surgical
          solutions to restore health and comfort.
        </li>
        <li>
          <b>Foreign Body Removal:</b> If your pet has ingested something they
          shouldn&rsquo;t have, our surgical team can safely remove the item,
          preventing serious gastrointestinal complications.
        </li>
        <li>
          <b>Rabbit Neuter & Spay:</b> Recognizing the unique needs of rabbit
          owners, we provide specialized spay and neuter services to improve the
          health and behavior of these pets.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Why Choose Montrose Pet Clinic for Surgical Care?
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Safety First:</b> We adhere to the highest safety standards,
          employing advanced monitoring equipment and practices to ensure your
          pet&rsquo;s well-being throughout the surgical process.
        </li>
        <li>
          <b>Experienced Veterinarians:</b> Our skilled veterinary surgeons have
          extensive experience in performing a wide range of surgical
          procedures, ensuring the best outcomes for your pet.
        </li>
        <li>
          <b>Post-Surgical Care:</b> We provide comprehensive post-operative
          care instructions and support, ensuring your pet&rsquo;s recovery is smooth
          and comfortable.
        </li>
        <li>
          <b>Compassionate Approach:</b> Understanding the anxiety that can
          accompany pet surgery, our team offers compassionate care and clear
          communication before, during, and after the procedure.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        The Importance of Timely Surgical Intervention
      </h3>
      <p>
        Prompt surgical intervention can be crucial in preventing more serious
        health issues for your pet. Whether it&rsquo;s a routine procedure or an
        emergency surgery, timely care can alleviate pain, improve quality of
        life, and in many cases, be life-saving.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Customized Care for Every Pet
      </h3>
      <p>
        At Montrose Pet Clinic, we understand that every pet is unique. That&rsquo;s
        why we tailor our surgical plans to the individual needs of each animal,
        ensuring the best possible care and outcomes.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">Conclusion</h3>
      <p>
        Our commitment to providing exceptional surgical care is a cornerstone
        of our practice at Montrose Pet Clinic. With a focus on safety,
        expertise, and compassion, we strive to ensure every surgical procedure
        improves your pet&rsquo;s health and well-being. If you have concerns about
        your pet&rsquo;s health or believe they may need surgical intervention,
        contact us to discuss how we can help.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Surgical Services at Montrose Pet Clinic"
      altText="Veterinarian performing surgery"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Surgery;