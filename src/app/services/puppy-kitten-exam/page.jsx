import InfoSection from "@/components/InfoSection";

const PuppyKittenExam = () => {
  const firstSection = {
    subheading: "",
    text: "Puppy and kitten exams are similar to annual wellness exams with an emphasis to detect congenital defects such as umbilical hernias, retained testicles, poor weight gain or physical abnormalities of organs or body parts. The vaccine protocol for puppies and kittens is as follows:",
  };

  const restContent = (
    <>
      <table className="table-auto w-full text-left text-gray-700 mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2">Age (weeks)</th>
            <th className="px-4 py-2">Puppy</th>
            <th className="px-4 py-2">Kitten</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">8</td>
            <td className="border px-4 py-2">DAPP</td>
            <td className="border px-4 py-2">FRCP</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">12</td>
            <td className="border px-4 py-2">DAPP, Bordetella</td>
            <td className="border px-4 py-2">FRCP, FeLv</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">16</td>
            <td className="border px-4 py-2">DAPP, Rabies</td>
            <td className="border px-4 py-2">FRCP, FeLv, Rabies</td>
          </tr>
        </tbody>
      </table>
      <p>
        The protocol varies between clinics and the area. For example, some institutions start Puppy / Kitten vaccines at the age of 6 weeks (Humane society) because that location may be endemic to some contagious diseases.
      </p>
    </>
  );

  return (
    <InfoSection
      title="Puppy and Kitten Exams at Montrose Pet Clinic"
      altText="Veterinarian examining a puppy"
      firstSection={firstSection}
      restContent={restContent}
    />
  );
};

export default PuppyKittenExam;