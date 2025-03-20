'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQPage() {
  const faqs = [
    {
      question: 'Why is an exam required before any service in a vet clinic?',
      answer: 'A comprehensive examination allows our veterinarians to assess your pet’s overall health, identify any underlying conditions, and determine the most appropriate treatments or preventive measures tailored to your pet’s specific needs.',
    },
    {
      question: 'My pet is always indoors. Do I still need vaccines or parasite control?',
      answer: 'Yes, even indoor pets are at risk for diseases and parasites. Vaccinations protect against airborne pathogens and parasites like fleas and ticks that can enter your home through various means.',
    },
    {
      question: 'What is the difference between pet store brand food and food available in vet clinics?',
      answer: 'Veterinary diets are scientifically formulated to address specific health conditions and undergo rigorous testing. Pet store brands may not meet these standards or address medical needs.',
    },
    {
      question: 'At what age should I spay or neuter my pet?',
      answer: 'The optimal age varies based on species, breed, and individual health. Consult our veterinarians for personalized guidance.',
    },
    {
      question: 'Can I return medications?',
      answer: 'For safety reasons, dispensed medications cannot be returned as their integrity cannot be guaranteed once they leave the clinic.',
    },
    {
      question: 'Can I return food?',
      answer: 'Unopened, non-expired prescription diets may be returned or exchanged depending on the manufacturer’s policy. Contact reception for details.',
    },
    {
      question: 'Do I have to pay upfront, or can I pay later for an appointment?',
      answer: 'Payments are required after the service. We accept cash, MasterCard, Visa, and debit (no AMEX).',
    },
    {
      question: 'Do I need an appointment for a cat neuter?',
      answer: 'Yes, surgeries like cat neuters require appointments to ensure proper preparation and care. Please contact reception to book.',
    },
  ];

  // ✅ By default, all indexes are open
  const [activeIndexes, setActiveIndexes] = useState(faqs.map((_, index) => index));

  const toggleFAQ = (index) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-blue-700">{faq.question}</h2>
              <FaChevronDown
                className={`text-blue-600 transform transition-transform duration-300 ${
                  activeIndexes.includes(index) ? 'rotate-180' : ''
                }`}
              />
            </div>
            {activeIndexes.includes(index) && (
              <p className="mt-4 text-gray-700 text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
