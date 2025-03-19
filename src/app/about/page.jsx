// import Image from "next/image"

// export default function AboutUs() {
//     const teamMembers = [
//       {
//         name: "Dr. Abdul Salam",
//         role: "(Veterinarian)",
//         img: "/member1.webp",
//         description:
//           "Dr. Salam is one of the partners of the clinic. He obtained his DVM in Canada in 2005 and has worked in small animal clinics across Edmonton. He has extensive experience as a zoo veterinarian and consultant for wildlife conservation projects. In his free time, he enjoys hiking and traveling with his family.",
//       },
//       {
//         name: "Dr. Koshy",
//         role: "(Veterinarian)",
//         img: "/member2.webp",
//         description:
//           "Dr. Koshy earned his DVM in 2007 and has since worked in small animal clinics across Alberta. He has a Master's in Business Administration and completed the VSTEP program at the University of Guelph. His areas of interest include small animal internal medicine and surgery.",
//       },
//       {
//         name: "Dr. Aparna Mariyam Thomas",
//         role: "MSc, MVSc (Veterinarian)",
//         img: "/member3.webp",
//         description:
//           "Dr. Aparna is a veterinarian from Kerala, India, with a Master's in Veterinary Parasitology. She has worked in veterinary surgery and animal birth control programs. She now practices in Alberta, specializing in small animal internal medicine and surgery.",
//       },
//       {
//         name: "Amanda O",
//         role: "(Office Manager)",
//         img: "/member4.webp",
//         description:
//           "Amanda transitioned from human medicine to veterinary medicine, rediscovering her passion for advocating for animals. She has a big family and loves spending time with her grandchildren. She dreams of adding chickens and a pig to her household.",
//       },
//       {
//         name: "Jazmine Hiller",
//         role: "(Veterinary Medical Assistant (VMA))",
//         img: "/member5.webp",
//         description:
//           "Jazmine has always loved animals. Her passion grew after she lost her dog, Buddy, in 2018. She previously worked at a dog daycare and enjoys horror movies, music, and traveling in her free time. She has two cats, Misty and Sophie, and a dog named Mrs. Wellington.",
//       },
//       {
//         name: "Rebecca",
//         role: "(Veterinary Office Assistant (VOA))",
//         img: "/member6.webp",
//         description:
//           "Rebecca is a certified VOA from NorQuest College and joined MPC in 2023. She specializes in animal handling and enjoys hiking with her senior dog or playing video games with her cat in her spare time.",
//       },
//     ];
  
//     return (
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         {/* Hero Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Text Content */}
//           <div className="md:w-1/2 text-center md:text-left">
//             <h1 className="text-4xl font-bold text-primary mb-4">
//               Our veterinary team in Beaumont welcomes you & your pet!
//             </h1>
//             <p className="text-gray-700 leading-relaxed">
//               Welcome to <span className="font-semibold">Montrose Pet Clinic</span> in Beaumont, where 
//               we&rsquo;ve been providing top-notch veterinary care for over a decade. Our team of 
//               licensed veterinarians, skilled Animal Health Technicians, and support staff are 
//               dedicated to ensuring your pet receives the best care possible.
//             </p>
//             <p className="text-gray-700 mt-4 leading-relaxed">
//               We&rsquo;re grateful for the support from the Beaumont community and city administration, 
//               as well as various pet and community organizations. Our goal is to exceed your expectations, 
//               and we&rsquo;re always excited to welcome new clients. Our clinic is open 6 days a week for your convenience.
//             </p>
//           </div>
  
//           {/* Image */}
//           <div className="md:w-1/2">
//             <Image
//               src="/clinicfront.webp"
//               alt="Veterinary team at Montrose Pet Clinic"
//               width={500}
//               height={300}
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
  
//         {/* Mission Section */}
//         <div className="mt-16">
//           <h2 className="text-3xl font-semibold text-secondary mb-4">Our Promise to Your Pets</h2>
  
//           {/* Mission */}
//           <div className="mt-8">
//             <h3 className="text-2xl font-bold text-primary">OUR MISSION</h3>
//             <p className="text-gray-700 mt-2 leading-relaxed">
//               At Montrose Pet Clinic, we see pets as family. They offer us unconditional love and 
//               deserve the highest level of care. Our mission is to foster the best 
//               veterinarian-client-patient relationship, ensuring 
//               <span className="font-semibold"> The best care for your best friend</span> 
//               with the support of modern technology and a professional environment.
//             </p>
//           </div>
  
//           {/* Vision */}
//           <div className="mt-8">
//             <h3 className="text-2xl font-bold text-primary">OUR VISION</h3>
//             <p className="text-gray-700 mt-2 leading-relaxed">
//               To be the leading veterinary care provider in Beaumont and the surrounding areas, 
//               leveraging the expertise of our professional team year-round.
//             </p>
//           </div>
  
//           {/* Values */}
//           <div className="mt-8">
//             <h3 className="text-2xl font-bold text-primary">OUR VALUES</h3>
//             <ul className="list-disc pl-6 mt-2 text-gray-700 leading-relaxed">
//               <li><span className="font-semibold">Exceptional Care:</span> Advanced veterinary practices with personalized attention.</li>
//               <li><span className="font-semibold">Communication:</span> Open dialogue with pet owners.</li>
//               <li><span className="font-semibold">Education:</span> Continuous learning for staff and pet owners.</li>
//               <li><span className="font-semibold">Compassion:</span> Creating a supportive and positive clinic environment.</li>
//             </ul>
//           </div>
//         </div>
  
//         {/* Our Team Section */}
//         <div id="team" className="mt-16">
//           <h2 className="text-3xl font-semibold text-secondary text-center mb-8">Our Team</h2>
  
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center hover:shadow-xl transition-shadow duration-300"
//               >
//                 <Image
//                   src={member.img}
//                   alt={member.name}
//                   className="w-36 h-36 mx-auto rounded-full object-[center_20%] object-cover border-4 border-primary"
//                 />
//                 <h3 className="text-xl font-bold text-primary mt-4">{member.name}</h3>
//                 <p className="text-secondary font-medium">{member.role}</p>
//                 <p className="text-gray-600 mt-2 text-sm leading-relaxed">{member.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
  



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