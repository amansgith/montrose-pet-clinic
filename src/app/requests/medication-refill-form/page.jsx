"use client";
import { useState } from "react";
import DOMPurify from "dompurify";

export default function MedicationRefillForm() {
  const initialFormData = {
    lastName: "",
    firstName: "",
    cellPhone: "",
    petName: "",
    animal: "Dog",
    otherAnimal: "",
    age: "",
    sex: "M",
    medicationDetails: "",
    quantityRemaining: "",
    contactNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(null); // New state for form status
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true

    // Sanitize form data
    const sanitizedFormData = {
      lastName: DOMPurify.sanitize(formData.lastName),
      firstName: DOMPurify.sanitize(formData.firstName),
      cellPhone: DOMPurify.sanitize(formData.cellPhone),
      petName: DOMPurify.sanitize(formData.petName),
      animal: DOMPurify.sanitize(formData.animal),
      otherAnimal: DOMPurify.sanitize(formData.otherAnimal),
      age: DOMPurify.sanitize(formData.age),
      sex: DOMPurify.sanitize(formData.sex),
      medicationDetails: DOMPurify.sanitize(formData.medicationDetails),
      quantityRemaining: DOMPurify.sanitize(formData.quantityRemaining),
      contactNumber: DOMPurify.sanitize(formData.contactNumber),
    };

    // send the form data to the email API
    try {
      const response = await fetch('/api/send-refill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: sanitizedFormData }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData(initialFormData); // Reset form data
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus("error");
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg my-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Medication Refill Request Form
        </h1>
        <p className="text-sm text-red-600 mt-2">
          (Requests for medication refills may take up to 5-7 days to be
          completed)
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        {/* Personal Info */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Your Details</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field block w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field block w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="cellPhone"
              placeholder="Cell Phone"
              className="input-field block w-full md:col-span-2"
              value={formData.cellPhone}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        {/* Pet Details */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Pet Details</legend>
          <input
            type="text"
            name="petName"
            placeholder="Name of Pet"
            className="input-field block w-full"
            value={formData.petName}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <select name="animal" className="input-field block w-full" value={formData.animal} onChange={handleChange} required>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
            {formData.animal === "Other" && (
              <input
                type="text"
                name="otherAnimal"
                placeholder="Specify Animal"
                className="input-field block w-full md:col-span-2"
                value={formData.otherAnimal}
                onChange={handleChange}
                required
              />
            )}
            <input
              type="number"
              name="age"
              placeholder="Age (Years)"
              className="input-field block w-full"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <select name="sex" className="input-field block w-full" value={formData.sex} onChange={handleChange} required>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
        </fieldset>

        {/* Medication Details */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Medication Details</legend>
          <textarea
            name="medicationDetails"
            placeholder="Name of Medication(s), Dose, and Frequency of Administration"
            className="input-field block w-full h-24"
            value={formData.medicationDetails}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            name="quantityRemaining"
            placeholder="Quantity Remaining"
            className="input-field block w-full mt-2"
            value={formData.quantityRemaining}
            onChange={handleChange}
            required
          />
        </fieldset>

        {/* Contact for Pickup */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Pickup Contact</legend>
          <input
            type="tel"
            name="contactNumber"
            placeholder="Best phone number for pickup"
            className="input-field block w-full"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-secondary transition"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : (
            "Send"
          )}
        </button>
      </form>
      {formStatus === "success" && (
        <p className="mt-4 text-green-600">Medication Refill Request Submitted!</p>
      )}
      {formStatus === "error" && (
        <p className="mt-4 text-red-600">Error submitting form. Please try again.</p>
      )}

      {/* Notes Section */}
      <div className="mt-4 p-4 bg-gray-100 border-l-4 border-yellow-500 text-sm text-gray-700">
        <p>
          <strong>Note:</strong> This form can be used for 1 pet with up to 3
          medications. Medications on backorder will not be filled. Refills
          are for chronic illnesses only, and annual exams are required. A
          complete physical exam may be necessary for other medications.
        </p>
      </div>
    </div>
  );
}