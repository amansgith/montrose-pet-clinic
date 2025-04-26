import Image from "next/image";

const WellnessExam = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-center text-4xl font-bold text-primary">
        Annual Wellness Exam and Preventive Care
      </h1>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row text-justify items-center gap-8">
        {/* Image */}
        {/* Content */}
        <div className="md:w-2/3 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Annual wellness exams for pets are essential for preventive care,
            allowing veterinarians to monitor overall health, detect potential
            problems early, and administer necessary preventive care
            (vaccinations) and parasite prevention measures (deworming).
          </p>
          <h3 className="text-2xl font-semibold text-secondary mb-4">
           A typical wellness visit includes:
          </h3>
          <ul className="list-disc list-outside pl-4 mt-4">
          <li>Comprehensive physical examination</li>
          <li>Questionning the owner</li>
          <li>Diagnosetive testing</li>
          <li>Vaccinations</li>
          <li>Preventive care</li>
          <li>Weight check and dental health</li>
        </ul>
          <h3 className="text-2xl font-semibold text-secondary mt-6 mb-4">
            Why Are Annual Wellness Visits Important?
          </h3>
          <ul className="list-disc list-outside pl-4 mt-4">
          <li>Early disease detection</li>
          <li>Preventive care</li>
          <li>Monitoring overall health</li>
          <li>Peace of mind</li>
          <li>Cost-effective</li>
        </ul>
        </div>
        <div className="md:w-1/3">
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Veterinarian examining a pet"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="text-gray-700 leading-relaxed">
        <h3 className="text-2xl font-semibold text-secondary mb-4">
          Puppy and Kitten exams
        </h3>
        <p>
          Puppy and kitten exams are similar to annual wellness exams with an
          emphasis to detect congenital defects such as umbilical hernias, poor
          weight gain or physical abnormailties of organs or body parts.
        </p>
      </div>

      {/* Section 3 */}
      <div className="text-gray-700 leading-relaxed">
        <h3 className="text-2xl font-semibold text-secondary mb-4">
          Parasite Prevention
        </h3>
        <p className="mb-4">
          Parasites prevention in pets is crucial for their health and
          wellbeing, as parasite can cause discomfort, serious diseases and even
          zoonotic infections that can be transmitted to humans. Regular
          preventative measures like medication and hygiene practices are
          essential for protecting both your pet and your family.
        </p>
        <h3 className="text-2xl font-semibold text-secondary mb-4">
          Why parasite prevention is so important?
        </h3>
        <ul className="list-disc list-outside pl-4 mt-4">
          <li>Health risks for pets</li>
          <li>Zoonotic infections</li>
          <li>Prevention is easier and cheaper than treatment</li>
          <li>Year round protection</li>
          <li>Protects your home from parasite infestation</li>
        </ul>
        <h3 className="text-2xl font-semibold text-secondary mb-4 mt-6">
          Parasite preventive measures include
        </h3>
        <ul className="list-disc list-outside pl-4 mt-4">
          <li>Regular deworming</li>
          <li>Monthly preventatives</li>
          <li>Good hygeine</li>
          <li>Regular veterinary check-ups</li>
        </ul>
      </div>

      {/* Section 4 */}
      <div className="text-gray-700 leading-relaxed">
        <h3 className="text-2xl font-semibold text-secondary mb-4">
          Vaccine Reactions in Pets
        </h3>
        <p>
          After vaccination, pets experience mild side effects such as lethargy,
          decreased appetite or a small bump at the injecction site, but serious
          reactions are rare and require immediate veterinary attention. <br />{" "}
          If you notice symptoms such as difficulty in breathing, facial
          swelling, hives, vomiting or diarrhea then seek immediate veterinary
          attention.
        </p>
      </div>
    </div>
  );
};

export default WellnessExam;
