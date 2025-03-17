import InfoSection from "@/components/InfoSection";

const Nutrition = () => {
  const firstSection = {
    subheading: "Nourishing Your Pet's Well-being",
    text: "At Montrose Pet Clinic, nestled in the welcoming community of Beaumont, Alberta, we believe that proper nutrition is a cornerstone of optimal pet health. Our dedicated nutrition services are designed to address the unique dietary needs of your pets, helping them to lead happier, healthier lives. Understanding that every pet is an individual, we offer personalized nutrition plans that support their specific health requirements, life stages, and lifestyles.",
  };

  const restContent = (
    <>
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Tailored Dietary Solutions for Every Pet
      </h3>
      <p>
        Our comprehensive approach to pet nutrition encompasses a range of services aimed at promoting optimal health through diet:
      </p>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
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
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Why Choose Montrose Pet Clinic for Your Pet's Nutritional Needs?
      </h3>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
        <li>
          <b>Expert Guidance:</b> Our veterinary team has extensive knowledge in pet nutrition and is committed to providing you with expert advice tailored to your pet’s individual needs.
        </li>
        <li>
          <b>Personalized Care:</b> We understand that each pet is unique. Our nutritional recommendations are customized to suit your pet’s specific health conditions, age, weight, and activity level.
        </li>
        <li>
          <b>Holistic Approach:</b> Nutrition is an integral part of our holistic approach to pet health. We consider your pet’s entire health profile when recommending diets or supplements, ensuring a well-rounded approach to their care.
        </li>
        <li>
          <b>Quality Products:</b> We recommend and provide access to high-quality, scientifically formulated nutritional products that promote the health and longevity of your pet.
        </li>
      </ul>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        Nourishing Your Pet, Inside and Out
      </h3>
      <p>
        Proper nutrition goes beyond just feeding; it’s about nurturing your pet’s health from the inside out. Our nutrition services are designed not only to address specific health concerns but also to enhance your pet’s immune system, coat quality, energy levels, and overall quality of life.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">
        The Role of Nutrition in Disease Prevention
      </h3>
      <p>
        A balanced diet plays a critical role in disease prevention. By ensuring your pet receives the right nutrients in the correct proportions, you can help fortify their body against illness, manage existing health conditions, and potentially reduce the need for medications.
      </p>
      <br />
      <h3 className="text-2xl font-semibold text-secondary mb-2">Conclusion</h3>
      <p>
        At Montrose Pet Clinic, we’re passionate about the role of nutrition in maintaining and enhancing your pet’s health. Whether you’re seeking advice on the best diet for your growing puppy, need support managing a chronic condition, or want to explore nutritional supplements, our team is here to guide you every step of the way. Reach out to us today to learn more about our nutrition services and how we can help your pet thrive through personalized dietary care.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Nutrition Services at Montrose Pet Clinic"
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with an actual image URL
      altText="Pet nutrition consultation"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Nutrition;