import InfoSection from "@/components/InfoSection";

const EOLServices = () => {
  const firstSection = {
    subheading: "Compassionate Care During Difficult Times",
    text: "At Montrose Pet Clinic in Beaumont, Alberta, we understand that the final stages of your pet’s life are a challenging and emotional time. Our end-of-life services are designed with compassion and sensitivity to support both you and your beloved companion during this difficult period. We believe in providing dignified, respectful care that honors the bond you share with your pet, ensuring their comfort and preserving your memories together.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Our End of Life Care Services
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Euthanasia (In Clinic & House Call):</b> Making the decision to say goodbye to a pet is one of the hardest moments a pet owner can face. Our euthanasia services are performed with the utmost respect and gentleness, whether you choose to be in the familiar surroundings of your home or in the quiet comfort of our clinic. We prioritize making this process as peaceful as possible for your pet and as bearable as it can be for you.
        </li>
        <li>
          <b>Cremation Services:</b> We offer cremation options that respect your wishes for your pet&rsquo;s remains. Whether you prefer a communal cremation or a private one where you receive your pet&rsquo;s ashes back, we handle every detail with care and sensitivity.
        </li>
        <li>
          <b>Memorial Products and Paw Prints:</b> To help you cherish and commemorate your pet&rsquo;s memory, we offer a selection of memorial products. From customized urns to personalized paw print keepsakes, these items can serve as a comforting reminder of the love and moments you shared.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        The Montrose Pet Clinic Approach to End of Life Care
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Compassionate Support:</b> Our staff is here to provide not only medical care but also emotional support. We understand the depth of your loss and offer resources to help you through the grieving process.
        </li>
        <li>
          <b>Personalized Guidance:</b> We&rsquo;re here to help you assess your pet&rsquo;s quality of life and make informed decisions about their care. Our approach is always to prioritize what is best for your pet, helping you navigate the difficult choices with compassion and understanding.
        </li>
        <li>
          <b>Peaceful and Respectful Atmosphere:</b> We ensure that your pet&rsquo;s final moments are as calm and comfortable as possible, providing a serene environment for you to say goodbye.
        </li>
        <li>
          <b>Ongoing Support:</b> Grieving the loss of a pet is a journey, and it doesn&rsquo;t end with a final goodbye. Montrose Pet Clinic is committed to providing ongoing support, offering resources and guidance to help you cope with your loss.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        The Importance of Saying Goodbye with Love
      </h3>
      <p>
        Saying goodbye is a deeply personal experience, and we honor your need to do so in a way that feels right for you and your family. Our team is here to accommodate your wishes, ensuring that your pet&rsquo;s last moments are filled with peace and love.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Understanding When It&rsquo;s Time
      </h3>
      <p>
        Deciding when it&rsquo;s time to say goodbye is incredibly difficult. We provide assessments of your pet&rsquo;s comfort and quality of life, offering guidance based on medical insight and deep compassion. Our goal is to support you in making the decision that is right for your pet and your family.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">Conclusion</h3>
      <p>
        At Montrose Pet Clinic, we consider it a privilege to be part of your pet&rsquo;s journey, even in its final stages. Our end of life services are provided with the deepest respect for the bond you share with your pet, ensuring their dignity and your comfort during this tender time. If you are facing the prospect of saying goodbye to your pet, please reach out to us. We are here to support you with compassionate care every step of the way.
      </p>
    </>
  );

  return (
    <InfoSection
      title="End of Life Services at Montrose Pet Clinic"
      altText="Veterinarian providing end-of-life care"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default EOLServices;