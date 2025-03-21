"use client";
import { useState } from "react";

export default function PrescriptionFoodOrderForm() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    pets: [
      { name: "", food: "", bagSize: "", quantity: "", daysLeft: "" },
      { name: "", food: "", bagSize: "", quantity: "", daysLeft: "" },
      { name: "", food: "", bagSize: "", quantity: "", daysLeft: "" },
    ],
  });

  const handleChange = (e, index, field) => {
    const updatedPets = [...formData.pets];
    updatedPets[index][field] = e.target.value;
    setFormData({ ...formData, pets: updatedPets });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Prescription Food Order Submitted!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-lg my-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Prescription Diet/Food Order Online Form
        </h1>
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
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field block w-full"
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="input-field block w-full md:col-span-2"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </fieldset>

        {/* Pet Details */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Pet Details</legend>
          {formData.pets.map((pet, index) => (
            <div key={index} className="mt-4 space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder={`Name of Pet ${index + 1}`}
                  className="input-field block w-full"
                  value={pet.name}
                  onChange={(e) => handleChange(e, index, "name")}
                />
                <input
                  type="text"
                  placeholder={`Name of Pet Food ${index + 1}`}
                  className="input-field block w-full md:col-span-2"
                  value={pet.food}
                  onChange={(e) => handleChange(e, index, "food")}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder={`Size of Bag ${index + 1}`}
                  className="input-field block w-full"
                  value={pet.bagSize}
                  onChange={(e) => handleChange(e, index, "bagSize")}
                />
                <input
                  type="text"
                  placeholder={`How many bags or cans requested? ${index + 1}`}
                  className="input-field block w-full md:col-span-2"
                  value={pet.quantity}
                  onChange={(e) => handleChange(e, index, "quantity")}
                />
              </div>
              <input
                type="text"
                placeholder={`How many days of food left? ${index + 1}`}
                className="input-field block w-full"
                value={pet.daysLeft}
                onChange={(e) => handleChange(e, index, "daysLeft")}
              />
              <hr className="border-gray-300 my-4" />
            </div>
          ))}
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
            <strong>Note:</strong> Up to 3 pet foods can be ordered at a time.
            Once received, we will place the order and contact you when it&rsquo;s
            ready for pickup. Items on backorder will not be ordered, and you
            will be notified. You may also place an order online for home
            delivery or contact us directly for in-clinic pickup.
          </p>
        </div>
      </form>
    </div>
  );
}