import InfoSection from "@/components/InfoSection";

const Microchipping = () => {
  const firstSection = {
    subheading: "Microchipping",
    text: "Each year, thousands of pets go missing, and many don’t make it back home. Many pets (especially indoor pets) don’t wear collars or tags. Even if your pet wears a collar and identification tag, collars can break off and tags can become damaged and unreadable, so these forms of identification may not be enough to ensure your pet’s safe return. Your pet needs a form of identification that is reliable and can’t get lost, stolen, or damaged. A microchip is a safe, simple form of identification that can significantly increase the chance that your pet will return safely. This is especially important during hurricane season.",
  };

  const restContent = (
    <>
      <p>
        A microchip is about the size and shape of a grain of rice and is placed underneath your pet’s skin between the shoulder blades. Microchip implantation takes only a few minutes and is very safe. Each microchip is unique and carries vital information about your pet when—including your name, address, and contact information. When a microchip is implanted, the pet owner is given a registration form to complete. Registering the number on the microchip includes your pet in a national pet recovery database. Veterinary hospitals, animal shelters, and animal control offices across the country are equipped with special electronic scanners that can detect the microchip and read the identification number. If a lost pet is picked up by animal control or found by a good samaritan and presented to a veterinarian, a quick scan of the microchip reveals the identification number. A toll-free phone call to the pet recovery database alerts the microchip company that a lost pet has been identified. The pet owner can then be contacted and reunited with his or her pet!
      </p>
      <p>
        Young puppies and kittens can receive microchips, but even if your pet is already an adult, you should consider microchipping. Even indoor pets can get outside accidentally and lost, so if you’re relying on other forms of identification, you could be placing your pet at risk. Microchipping is a safe, effective way to help ensure your pet’s return if the unthinkable happens.
      </p>
      <p>
        Ask us about microchipping your pet today!
      </p>
    </>
  );

  return (
    <InfoSection
      title="Microchipping"
      image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with an actual image URL
      altText="Microchipping a pet"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default Microchipping;