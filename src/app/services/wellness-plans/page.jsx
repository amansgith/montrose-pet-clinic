import Link from "next/link";

const WellnessPlans = () => {
  const plans = [
    { name: "Kitten Wellness Plans", href: "/services/wellness-plans/kitten-wellness" },
    { name: "Puppy Wellness Plans", href: "/services/wellness-plans/puppy-wellness" },
    { name: "Feline Wellness Plans", href: "/services/wellness-plans/feline-wellness" },
    { name: "Canine Wellness Plans", href: "/services/wellness-plans/canine-wellness" },
    { name: "Senior Wellness Plans", href: "/services/wellness-plans/geriatric-plans" },
    { name: "Dental Plans", href: "/services/wellness-plans/dental-plans" },
    { name: "Reproductive Surgery Plans", href: "/services/wellness-plans/reproductive-plans" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Wellness Plans</h1>
      <p className="text-gray-700 leading-relaxed mb-6">
        At Montrose Pet Clinic, we offer a variety of wellness plans to ensure your pet receives the best care possible. Our wellness plans are designed to provide comprehensive preventative care at affordable monthly payments, helping you keep your pet healthy and happy throughout their life stages. Here are some of the wellness plans we offer:
      </p>
      <ul className="list-disc list-inside pl-4 text-gray-700 leading-relaxed">
        {plans.map((plan, index) => (
          <li key={index} className="mb-2">
            <Link href={plan.href}>
              <span className="text-blue-600 hover:underline">{plan.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p>Please contact us for more details.</p>
    </div>
  );
};

export default WellnessPlans;