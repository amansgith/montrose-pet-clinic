import React from 'react';

const Policies = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Clinic Policies</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        At Montrose Pet Clinic, we aim for a smooth and satisfactory experience with these guidelines:
      </p>
      <ul className="list-decimal list-inside pl-4 text-gray-700 leading-relaxed">
        <li>Please arrive 5 minutes early to update your information at reception.</li>
        <li>Contact our reception for any queries or special requests regarding your appointment.</li>
        <li>Disrespectful behavior towards staff may result in appointment cancellation.</li>
        <li>Payments are required post-service. We accept cash, MasterCard, Visa, and debit (no AMEX).</li>
        <li>Request estimates before procedures to avoid surprises; note that estimates may vary.</li>
        <li>New clients must complete a registration form at the start of their visit.</li>
        <li>We reserve the right to decline services under certain conditions, as do clients.</li>
        <li>Incidents of animal cruelty will be reported to the appropriate authorities.</li>
        <li>An exam fee applies to all appointments, adhering to Alberta Veterinary Medical Association pricing.</li>
        <li>Place food and medicine refill requests 5-7 days in advance.</li>
        <li>Medications are non-returnable/refundable, except for veterinary diets within 10 days of purchase.</li>
        <li>For medical advice, consult our veterinarians directly.</li>
        <li>Surgery and dental care patients must follow specific pre and post-care instructions.</li>
        <li>Pets must be on a leash or in a cage within the clinic.</li>
        <li>Please respect client privacy, especially during sensitive times, and keep noise to a minimum.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mt-4">
        *These rules ensure the safety and comfort of all our clients and their pets.
      </p>
    </div>
  );
};

export default Policies;