"use client";
import { useState } from "react";
import DOMPurify from "dompurify";

export default function PrescriptionFoodOrderForm() {
  const initialFormData = {
    lastName: "",
    firstName: "",
    phone: "",
    pets: [
      { name: "", food: "", bagSize: "", quantity: "", daysLeft: "" },
      { name: "", food: "", bagSize: "", quantity: "", daysLeft: "" },
      { name: "", food: "", bagSize: "", quantity: "", daysLeft: "" },
    ],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(null); // New state for form status
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleChange = (e, index, field) => {
    const updatedPets = [...formData.pets];
    updatedPets[index][field] = e.target.value;
    setFormData({ ...formData, pets: updatedPets });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true

    // Sanitize form data
    const sanitizedFormData = {
      lastName: DOMPurify.sanitize(formData.lastName),
      firstName: DOMPurify.sanitize(formData.firstName),
      phone: DOMPurify.sanitize(formData.phone),
      pets: formData.pets.map((pet) => ({
        name: DOMPurify.sanitize(pet.name),
        food: DOMPurify.sanitize(pet.food),
        bagSize: DOMPurify.sanitize(pet.bagSize),
        quantity: DOMPurify.sanitize(pet.quantity),
        daysLeft: DOMPurify.sanitize(pet.daysLeft),
      })),
    };

    try {
      const response = await fetch('/api/send-order', {
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
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field block w-full"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="input-field block w-full md:col-span-2"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
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
                  required={index === 0} // Only required for the first pet
                />
                <input
                  type="text"
                  placeholder={`Name of Pet Food ${index + 1}`}
                  className="input-field block w-full md:col-span-2"
                  value={pet.food}
                  onChange={(e) => handleChange(e, index, "food")}
                  required={index === 0} // Only required for the first pet
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder={`Size of Bag ${index + 1}`}
                  className="input-field block w-full"
                  value={pet.bagSize}
                  onChange={(e) => handleChange(e, index, "bagSize")}
                  required={index === 0} // Only required for the first pet
                />
                <input
                  type="text"
                  placeholder={`How many bags or cans requested? ${index + 1}`}
                  className="input-field block w-full md:col-span-2"
                  value={pet.quantity}
                  onChange={(e) => handleChange(e, index, "quantity")}
                  required={index === 0} // Only required for the first pet
                />
              </div>
              <input
                type="text"
                placeholder={`How many days of food left? ${index + 1}`}
                className="input-field block w-full"
                value={pet.daysLeft}
                onChange={(e) => handleChange(e, index, "daysLeft")}
                required={index === 0} // Only required for the first pet
              />
              <hr className="border-gray-300 my-4" />
            </div>
          ))}
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
        <p className="mt-4 text-green-600">Prescription Food Order Submitted!</p>
      )}
      {formStatus === "error" && (
        <p className="mt-4 text-red-600">Error submitting form. Please try again.</p>
      )}

      {/* Notes Section */}
      <div className="mt-4 p-4 bg-gray-100 border-l-4 border-yellow-500 text-sm text-gray-700">
        <p>
          <strong>Note:</strong> Up to 3 pet foods can be ordered at a time.
          Once received, we will place the order and contact you when it’s
          ready for pickup. Items on backorder will not be ordered, and you
          will be notified. You may also place an order online for home
          delivery or contact us directly for in-clinic pickup.
        </p>
      </div>
    </div>
  );
}