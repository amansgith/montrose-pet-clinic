import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="pt-16 px-0 md:px-0 lg:px-0 flex flex-col justify-center items-center gap-10">
      {/* Left - Image */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <Image
              src="/aboutimg.jpg" // Make sure this image exists in the public folder
              alt="Happy Dog at Montrose Pet Clinic"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h3 className="text-xl">ABOUT US</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Montrose Pet Clinic
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We at Montrose Pet Clinic in Beaumont, where we’ve been
            providing top-notch veterinary care for over a decade. Our team of
            licensed veterinarians and skilled Animal Health Technicians and
            support staff are dedicated to ensuring your pet receives the best
            care possible. We’re grateful for the support from the Beaumont
            community and city administration, as well as various pet and
            community organizations. Our goal is to exceed your expectations,
            and we’re always excited to welcome new clients. Our clinic is open
            6 days a week for your convenience.
          </p>
          <p className="text-primary my-4 font-semibold">
            We’re excited to welcome new clients!
          </p>
          <button className="bg-secondary text-white p-2 text-xl font-semibold rounded-md">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full text-center bg-primary text-white py-4 text-2xl font-semibold">
        <Link href="/contact">
        <p>Request an Appointment</p>
        </Link>
      </div>
    </section>
  );
};

export default About;
