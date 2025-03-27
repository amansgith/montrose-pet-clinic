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
      name: "Dr. Rajpreet Kaur",
      role: "(Veterinarian)",
      img: "/member3.jpg",
      description:
        "Completed her DVM from India in 2018 and has a Master’s in veterinary microbiology & immunology. Moved to Canada in 2022 and focusing in the process of finishing up her licensing to practice veterinary medicine in Canada. She works in Montrose Pet Clinic as a temporary licensed vet. Her goal is to provide compassionate and dedicated quality care to pets. Her area of interest are veterinary medicine and surgery. Outside work she likes painting, hiking and reading.",
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
        name: "Dr. Daisy",
        role: "(Clinic Cat)",
        img: "/daisy.jpg",
        description:
          "Daisy is one of our founding members and takes her job as front window security very seriously. She can often be found having a nap in her hammock, having a nap on the front desk, or having a nap on one of the exam room tables. While she often stares at the birds outside and plots the best way to escape and capture them, she knows that her life inside the clinic where she is exceptionally loved and well taken care of, is the best place of all. ",
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