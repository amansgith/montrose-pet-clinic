import Image from "next/image";

export default function AboutMontrose() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Our veterinary team in Beaumont welcomes you & your pet!
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">Montrose Pet Clinic</span> in Beaumont, where 
            we’ve been providing top-notch veterinary care for over a decade. Our team of 
            licensed veterinarians, skilled Animal Health Technicians, and support staff are 
            dedicated to ensuring your pet receives the best care possible.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We’re grateful for the support from the Beaumont community and city administration, 
            as well as various pet and community organizations. Our goal is to exceed your expectations, 
            and we’re always excited to welcome new clients. Our clinic is open 6 days a week for your convenience.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/counter.jpg"
            alt="Veterinary team at Montrose Pet Clinic"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}