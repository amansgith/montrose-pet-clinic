import Image from "next/image";

export default function MissionValues() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Mission Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-secondary mb-4">Our Promise to You & Your Pets</h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4">
            {/* Mission */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary">OUR MISSION</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                At Montrose Pet Clinic, we see pets as family. They offer us unconditional love and 
                deserve the highest level of care. Our mission is to foster the best 
                veterinarian-client-patient relationship, ensuring 
                <span className="font-semibold"> The best care for your best friend </span> 
                with the support of modern technology and a professional environment.
              </p>
            </div>

            {/* Vision */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary">OUR VISION</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                To be the leading veterinary care provider in Beaumont and the surrounding areas, 
                leveraging the expertise of our professional team year-round. We envision a future 
                where every pet receives the highest standard of care, and every pet owner feels 
                confident and supported in their pet&rsquo;s health journey. Our vision includes:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 leading-relaxed">
                <li>Expanding our services to include the latest advancements in veterinary medicine.</li>
                <li>Building a community of informed and engaged pet owners through education and outreach.</li>
                <li>Creating a welcoming and stress-free environment for both pets and their owners.</li>
                <li>Continuously improving our facilities and equipment to provide the best possible care.</li>
                <li>Fostering a culture of compassion, respect, and excellence within our team.</li>
              </ul>
            </div>

            {/* Values */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary">OUR VALUES</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700 leading-relaxed">
                <li><span className="font-semibold">Exceptional Care:</span> Advanced veterinary practices with personalized attention.</li>
                <li><span className="font-semibold">Communication:</span> Open dialogue with pet owners to ensure transparency and trust.</li>
                <li><span className="font-semibold">Education:</span> Continuous learning for staff and pet owners to stay updated with the latest in veterinary medicine.</li>
                <li><span className="font-semibold">Compassion:</span> Creating a supportive and positive clinic environment where pets and their owners feel valued and cared for.</li>
                <li><span className="font-semibold">Integrity:</span> Upholding the highest ethical standards in all our practices and interactions.</li>
                <li><span className="font-semibold">Teamwork:</span> Collaborating effectively within our team and with pet owners to achieve the best outcomes for pets.</li>
                <li><span className="font-semibold">Innovation:</span> Embracing new technologies and methods to continuously improve our services.</li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <Image 
              src="/award.jpg" 
              alt="Pet Care" 
              width={300} 
              height={200} 
              className="w-full h-auto rounded-md object-cover mb-4" 
            />
            <Image 
              src="/award2.jpg" 
              alt="Veterinary Team" 
              width={300} 
              height={200} 
              className="w-full h-auto rounded-md object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}