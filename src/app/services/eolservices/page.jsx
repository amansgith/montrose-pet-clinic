import Image from "next/image";
import Link from "next/link";

const EOLServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Title Section */}
      <h1 className="text-center text-4xl font-bold text-primary">
        End of Life Services
      </h1>

      {/* First Section */}
      <div className="flex flex-col md:flex-row items-start gap-10 text-justify">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/dogflower.jpg"
            alt="image of dog with a white flower in mouth"
            width={300}
            height={150}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Content */}
        <div className="md:w-1/2 text-gray-700 leading-relaxed text-justify">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Compassionate Care During Difficult Times
          </h2>
          <p>
            End of life services at Montrose Pet Clinic focus on providing
            comfort and a peaceful passing of pets. Our services encompass
            palliative care, quality of life assessments, and euthanasia
            services, with options for in-clinic or in-home euthanasia and
            cremation services. We provide the following services to help you
            navigate this journey:
          </p>
          {/* Scale Calculator Link */}
          <p className="mt-6">
            Check Your Pet&apos;s Quality of Life Scale : 
            <Link
              href="https://journeyspet.com/pet-quality-of-life-scale-calculator/"
              target="_blank"
              className="text-primary font-semibold underline hover:text-secondary"
            >Click here
            </Link>
          </p>
        </div>
      </div>

      {/* Rest Content */}
      <div className="text-gray-700 leading-relaxed space-y-6">
        <p>
          <b className="text-secondary">Euthanasia (In Clinic & House Call):</b>{" "}
          Making the decision to say goodbye to a pet is one of the hardest
          moments a pet owner can face. Our euthanasia services are performed
          with the utmost respect and gentleness, whether you choose to be in
          the familiar surroundings of your home or in the quiet comfort of our
          clinic. We prioritize making this process as peaceful as possible for
          your pet and as bearable as it can be for you.
        </p>
        <p>
          <b className="text-secondary">Cremation Services:</b> We provide
          cremation options that honor your wishes for your pet&#39;s final
          arrangements. Whether you choose communal cremation or a private
          cremation where your pet&#39;s ashes are returned to you, we handle
          every step with care and compassion.
        </p>
        <p>
          <b className="text-secondary">Memorial Products and Paw Prints:</b>{" "}
          To help you cherish and commemorate your pet&#39;s memory, we offer a
          selection of memorial products. From customized urns to personalized
          paw print keepsakes, these items can serve as a comforting reminder
          of the love and moments you shared.
        </p>
      </div>
    </div>
  );
};

export default EOLServices;