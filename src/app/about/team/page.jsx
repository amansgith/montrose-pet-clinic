import Image from "next/image";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Dr. Abdul Salam",
      role: "(Veterinarian)",
      img: "/member1.webp",
      description:
        "Dr. Salam is one of the partners of the clinic. He obtained his DVM in Canada in 2005 and has worked in small animal clinics across Edmonton. He has extensive experience as a zoo veterinarian and consultant for wildlife conservation projects. In his free time, he enjoys hiking and traveling with his family.",
    },
    {
      name: "Dr. Koshy",
      role: "(Veterinarian)",
      img: "/member2.webp",
      description:
        "Dr. Koshy earned his DVM in 2007 and has since worked in small animal clinics across Alberta. He has a Master's in Business Administration and completed the VSTEP program at the University of Guelph. His areas of interest include small animal internal medicine and surgery.",
    },
    {
      name: "Dr. Aparna Mariyam Thomas",
      role: "MSc, MVSc (Veterinarian)",
      img: "/aparna.webp",
      description:
        "Dr. Aparna is a veterinarian from Kerala, India, with a Master's in Veterinary Parasitology. She has worked in veterinary surgery and animal birth control programs. She now practices in Alberta, specializing in small animal internal medicine and surgery.",
    },
    {
      name: "Amanda O",
      role: "(Office Manager)",
      img: "/member4.webp",
      description:
        "Amanda transitioned from human medicine to veterinary medicine, rediscovering her passion for advocating for animals. She has a big family and loves spending time with her grandchildren. She dreams of adding chickens and a pig to her household.",
    },
    {
      name: "Jazmine Hiller",
      role: "(Veterinary Medical Assistant (VMA))",
      img: "/member5.webp",
      description:
        "Jazmine has always loved animals. Her passion grew after she lost her dog, Buddy, in 2018. She previously worked at a dog daycare and enjoys horror movies, music, and traveling in her free time. She has two cats, Misty and Sophie, and a dog named Mrs. Wellington.",
    },
    {
      name: "Rebecca",
      role: "(Veterinary Office Assistant (VOA))",
      img: "/member6.webp",
      description:
        "Rebecca is a certified VOA from NorQuest College and joined MPC in 2023. She specializes in animal handling and enjoys hiking with her senior dog or playing video games with her cat in her spare time.",
    },
    {
        name: "Dr. Rajpreet Kour",
        img: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Coming Soon",
      },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Our Team Section */}
      <div id="team" className="mt-16">
        <h2 className="text-3xl font-semibold text-secondary text-center mb-8">Our Team</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={144}
                height={144}
                className="w-36 h-36 mx-auto rounded-full object-[center_20%] object-cover border-4 border-primary"
              />
              <h3 className="text-xl font-bold text-primary mt-4">{member.name}</h3>
              <p className="text-secondary font-medium">{member.role}</p>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}