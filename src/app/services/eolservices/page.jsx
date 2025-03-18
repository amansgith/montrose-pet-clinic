import InfoSection from "@/components/InfoSection";

const EOLServices = () => {
  const firstSection = {
    subheading: "Compassionate Care During Difficult Times",
    text: "At Montrose Pet Clinic, we understand that the final stages of your pet’s life are a challenging and emotional time. Our end-of-life services are designed with compassion and sensitivity to support both you and your beloved companion during this difficult period. We believe in providing dignified, respectful care that honors the bond you share with your pet, ensuring their comfort and preserving your memories together.",
  };

  const restContent = (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <b>Euthanasia (In Clinic & House Call):</b> Making the decision to say goodbye to a pet is one of the hardest moments a pet owner can face. Our euthanasia services are performed with the utmost respect and gentleness, whether you choose to be in the familiar surroundings of your home or in the quiet comfort of our clinic. We prioritize making this process as peaceful as possible for your pet and as bearable as it can be for you.
      </p>
      <p>
        <b>Cremation Services:</b> We offer cremation options that respect your wishes for your pet’s remains. Whether you prefer a communal cremation or a private one where you receive your pet’s ashes back, we handle every detail with care and sensitivity.
      </p>
      <p>
        <b>Memorial Products and Paw Prints:</b> To help you cherish and commemorate your pet’s memory, we offer a selection of memorial products. From customized urns to personalized paw print keepsakes, these items can serve as a comforting reminder of the love and moments you shared.
      </p>
    </div>
  );

  return (
    <InfoSection
      title="End of Life Services at Montrose Pet Clinic"
      image="/endoflife.jpg"
      altText="Veterinarian providing end-of-life care"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default EOLServices;
