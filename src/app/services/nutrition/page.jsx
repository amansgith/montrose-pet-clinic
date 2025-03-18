import InfoSection from "@/components/InfoSection";

const Nutrition = () => {
  const firstSection = {
    subheading: "Nourishing Your Pet's Well-being",
    text: "Our dedicated nutrition services are designed to address the unique dietary needs of your pets, helping them to lead happier, healthier lives. Understanding that every pet is an individual, we offer personalized nutrition plans that support their specific health requirements, life stages, and lifestyles.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Tailored Dietary Solutions for Every Pet
      </h3>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed">
        <li>
          <b>Life-Stage Food Consultation:</b> Recognizing that nutritional needs change over time, we provide guidance on selecting the appropriate diet for every stage of your pet’s life—from the growth demands of puppies and kittens to the maintenance and support needed by seniors.
        </li>
        <li>
          <b>Overweight Management:</b> With pet obesity on the rise, our clinic offers specialized diets and weight management plans to help your pet reach and maintain a healthy weight. This not only enhances their quality of life but also reduces the risk of obesity-related health issues.
        </li>
        <li>
          <b>Prescription Diets:</b> For pets with specific medical conditions, such as kidney disease, diabetes, or allergies, we prescribe specialized diets that support their treatment and overall health management.
        </li>
        <li>
          <b>Supplements and Wellness Products:</b> We also offer a carefully selected range of supplements and wellness products that complement your pet’s diet, addressing any nutritional gaps and supporting their overall well-being.
        </li>
      </ul>
    </>
  );

  return (
    <InfoSection
      title="Nutrition Services at Montrose Pet Clinic"
      image="/nutritionstore.jpg"
      altText="Pet nutrition consultation"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Nutrition;