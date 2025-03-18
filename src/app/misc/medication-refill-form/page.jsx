"use client";
import { useState } from "react";

export default function MedicationRefillForm() {
  const [formData, setFormData] = useState({
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
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Medication Refill Request Submitted!");
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
              onChange={handleChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field block w-full"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="cellPhone"
              placeholder="Cell Phone"
              className="input-field block w-full md:col-span-2"
              onChange={handleChange}
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
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <select name="animal" className="input-field block w-full" onChange={handleChange}>
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
                onChange={handleChange}
              />
            )}
            <input
              type="number"
              name="age"
              placeholder="Age (Years)"
              className="input-field block w-full"
              onChange={handleChange}
            />
            <select name="sex" className="input-field block w-full" onChange={handleChange}>
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
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="quantityRemaining"
            placeholder="Quantity Remaining"
            className="input-field block w-full mt-2"
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition"
        >
          Send
        </button>

        {/* Notes Section */}
        <div className="mt-4 p-4 bg-gray-100 border-l-4 border-yellow-500 text-sm text-gray-700">
          <p>
            <strong>Note:</strong> This form can be used for 1 pet with up to 3
            medications. Medications on backorder will not be filled. Refills
            are for chronic illnesses only, and annual exams are required. A
            complete physical exam may be necessary for other medications.
          </p>
        </div>
      </form>
    </div>
  );
}