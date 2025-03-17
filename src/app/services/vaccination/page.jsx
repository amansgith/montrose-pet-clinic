import InfoSection from "@/components/InfoSection";

const Vaccination = () => {
  const firstSection = {
    subheading: "Vaccination",
    text: "Pets today can live longer, healthier lives than ever before—in part because of vaccines that help protect them from deadly infectious diseases. Over the years, vaccines against dangerous diseases have saved millions of pets and virtually eliminated some fatal diseases that were once common. Unfortunately, many infectious diseases still pose a significant threat to dogs and cats that are unvaccinated. Although vaccine programs have been highly successful and vaccines are considered routine today, we (as caregivers) and you (as pet parents) cannot afford to become complacent about keeping pets up-to-date on their vaccinations.",
  };

  const restContent = (
    <>
      <p>
        Many vaccines are available for use in dogs and cats, but not every pet needs every available vaccine. Some vaccines are considered core vaccines and should be administered to all pets, whereas other vaccines are conditional and may be recommended for pets based on a variety of factors, such as their risk for exposure to disease. Vaccine recommendations can also change throughout a pet&rsquo;s life, as travel habits and other variables change. We will consider all these factors as we determine which vaccines your pet should have.
      </p>
      <br />
      <p>
        We understand that your pet is unique and that no single vaccine program will be ideal for every pet in every situation. Our doctors and other staff members are well-educated about veterinary vaccines, and our goal is to give you the best advice for keeping your pet healthy. Let us develop a vaccination schedule and ongoing booster routine that accounts for your pet&rsquo;s lifestyle, overall health, risk for exposure to infectious disease, and other factors.
      </p>
      <br />
      <p>
        Vaccines help pets live longer, healthier lives. Protecting your pet is our primary goal, so developing an appropriate vaccine schedule for your pet is important to us. Call us today to set up an appointment to discuss your pet&rsquo;s vaccination needs.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Vaccination Services at Montrose Pet Clinic"
      altText="Veterinarian administering a vaccine"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Vaccination;