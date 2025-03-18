export default function MissionValues() {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Mission Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-secondary mb-4">Our Promise to Your Pets</h2>
  
          {/* Mission */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary">OUR MISSION</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              At Montrose Pet Clinic, we see pets as family. They offer us unconditional love and 
              deserve the highest level of care. Our mission is to foster the best 
              veterinarian-client-patient relationship, ensuring 
              <span className="font-semibold"> The best care for your best friend</span> 
              with the support of modern technology and a professional environment.
            </p>
          </div>
  
          {/* Vision */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary">OUR VISION</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              To be the leading veterinary care provider in Beaumont and the surrounding areas, 
              leveraging the expertise of our professional team year-round.
            </p>
          </div>
  
          {/* Values */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary">OUR VALUES</h3>
            <ul className="list-disc pl-6 mt-2 text-gray-700 leading-relaxed">
              <li><span className="font-semibold">Exceptional Care:</span> Advanced veterinary practices with personalized attention.</li>
              <li><span className="font-semibold">Communication:</span> Open dialogue with pet owners.</li>
              <li><span className="font-semibold">Education:</span> Continuous learning for staff and pet owners.</li>
              <li><span className="font-semibold">Compassion:</span> Creating a supportive and positive clinic environment.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }