import Link from "next/link";
import Image from "next/image";

const Blog1 = () => {
  const relatedBlogs = [
    { title: "Understanding and Managing Your Pet’s Anal Gland Health", href: "/blogs/blog2", image: "https://plus.unsplash.com/premium_photo-1661961347317-41f7a010a441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Protect Your Pets and Family: The Imperative of Regular Deworming for Dogs and Cats", href: "/blogs/blog3", image: "https://images.unsplash.com/photo-1596854331442-3cf47265cefb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Safeguarding Your Pets’ Health: The Critical Role of Vaccinations", href: "/blogs/blog4", image: "https://images.unsplash.com/photo-1494913148647-353ae514b35e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Best Pet Care at Montrose Pet Clinic</h1>
      <Image src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Montrose Pet Clinic" width={800} height={400} className="w-full h-auto rounded-md object-cover mb-6" />
      <p className="text-gray-700 leading-relaxed mb-6">
        At Montrose Pet Clinic in Beaumont, we know that pets are family. That’s why we’re dedicated to providing top-notch care for your beloved animals, from routine check-ups to emergency services. Our experienced team is passionate about ensuring that every pet that walks through our doors receives the love, attention, and medical care they deserve.
      </p>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Comprehensive Services for All Your Pet’s Needs</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you have a playful pup, a curious cat, or a more exotic pet, Montrose Pet Clinic offers a wide range of services to meet their needs:
      </p>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li><b>Wellness Exams:</b> Regular check-ups are essential for keeping your pet healthy. We offer comprehensive wellness exams to catch any potential health issues early.</li>
        <li><b>Vaccinations:</b> Protect your pets from common diseases with our up-to-date vaccination services. We follow the latest guidelines to ensure your pet’s safety.</li>
        <li><b>Dental Care:</b> Oral health is crucial for your pet’s overall well-being. Our dental services help prevent problems like gum disease and tooth decay.</li>
        <li><b>Surgery:</b> From routine spays and neuters to more complex procedures, our skilled veterinarians are equipped to handle all surgical needs.</li>
        <li><b>Emergency Care:</b> We know that accidents happen. Our clinic is ready to provide urgent care when your pet needs it most.</li>
        <li><b>Nutritional Counseling:</b> Every pet has unique dietary needs. We offer personalized nutritional advice to keep your pet at their healthiest weight.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Why Choose Montrose Pet Clinic?</h2>
      <ul className="list-disc list-outside pl-4 text-gray-700 leading-relaxed mb-4">
        <li><b>Experienced Veterinarians:</b> Our team brings years of experience and a genuine love for animals to every appointment.</li>
        <li><b>State-of-the-Art Facility:</b> We’ve equipped our clinic with the latest technology to ensure accurate diagnoses and effective treatments.</li>
        <li><b>Compassionate Care:</b> We treat your pets like our own, with gentle hands and kind hearts.</li>
        <li><b>Convenient Location:</b> Located right here in Beaumont, Montrose Pet Clinic is easily accessible for all your pet care needs.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Join the Montrose Pet Clinic Family Today!</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        We believe that every pet deserves the best care, and we’re here to provide it. Whether you’re a new pet owner or a long-time animal lover, Montrose Pet Clinic is your partner in keeping your pets happy and healthy.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Give us a call today to schedule an appointment, or stop by to meet our friendly team and tour our facility. We can’t wait to welcome you and your furry friends to the Montrose Pet Clinic family!
      </p>

      <h2 className="text-2xl font-semibold text-secondary mb-4">Related Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedBlogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
              <Link href={blog.href}>
                <span className="text-blue-600 hover:underline mt-2 block">Read More</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog1;