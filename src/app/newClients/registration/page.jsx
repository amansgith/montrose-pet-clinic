"use client";
import { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    address: "",
    postalCode: "",
    homePhone: "",
    cellPhone: "",
    email: "",
    petNames: "",
    animal1: "Dog",
    animal1Breed: "",
    animal1Sex: "M",
    animal1Age: "",
    animal2: "Dog",
    animal2Breed: "",
    animal2Sex: "M",
    animal2Age: "",
    heardAboutUs: "Google",
    appointmentDate: "",
    appointmentTime: "",
    purpose: "",
    declaration: false,
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("You must agree to the declaration before submitting.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Appointment Request Submitted!");
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Get the date 20 years ago in YYYY-MM-DD format
  const twentyYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 20)).toISOString().split("T")[0];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg my-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">Best Care for your Best Friend</h2>
      <p className="text-lg text-gray-700 mb-6">
        We are happy to book an appointment for you. This is not an automatic process. Once we receive your request, we will contact you to confirm a date and time that is as close to your request as possible.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        This form should only be used for requesting appointments that will take place at least 1 full business day after the time of the submission of this form.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        If your appointment has not been confirmed within 24 hours, please feel free to contact <a className="text-blue-600" href="Tel:17809297363">+1780-929-7363</a> the practice by phone to confirm.
      </p>

      <h2 className="text-2xl font-bold text-secondary text-center mb-6">
        Request an Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Your Details*</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input-field block w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input-field block w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input-field block w-full md:col-span-2"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="input-field block w-full"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="homePhone"
              placeholder="Home Phone No."
              className="input-field block w-full"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="cellPhone"
              placeholder="Cell Phone"
              className="input-field block w-full"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              className="input-field block w-full md:col-span-2"
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Pet Details */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Pet Details (Add at max 2 animal details)*</legend>
          <input
            type="text"
            name="petNames"
            placeholder="Pet Name(s)"
            className="input-field block w-full"
            onChange={handleChange}
            required
          />

          {/* Animal 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <select name="animal1" className="input-field block w-full" onChange={handleChange} required>
              <option value="animal1">Animal 1</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="animal1Breed" placeholder="Breed of animal 1" className="input-field block w-full" onChange={handleChange} required />
            <select name="animal1Sex" className="input-field block w-full" onChange={handleChange} required>
              <option value="GenderofAnimal1">Gender of Animal 1</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <div>
              <label htmlFor="animal1DOB" className="block text-gray-500 pl-2">Animal 1 D.O.B</label>
              <input type="date" name="animal1dob" className="input-field block w-full" onChange={handleChange} required max={today} min={twentyYearsAgo} />
            </div>
          </div>

          {/* Animal 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <select name="animal2" className="input-field block w-full" onChange={handleChange}>
              <option value="GenderofAnimal1">Gender of Animal 2</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="animal2Breed" placeholder="Breed of Animal 2" className="input-field block w-full" onChange={handleChange} />
            <select name="animal2Sex" className="input-field block w-full" onChange={handleChange}>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <div>
              <label htmlFor="animal2Age" className="block text-gray-500 pl-2">Animal 2 D.O.B</label>
              <input type="date" name="animal2Age" className="input-field block w-full" onChange={handleChange} max={today} min={twentyYearsAgo} />
            </div>
          </div>
        </fieldset>

        {/* Appointment Details */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Appointment Details</legend>
          <select name="heardAboutUs" className="input-field block w-full" onChange={handleChange} required>
            <option value="howyouknow">How did you hear about us? </option>
            <option value="Google">Google</option>
            <option value="Friend">Friend</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div>
              <label htmlFor="appointmentDate" className="block text-gray-700">Date of Appointment</label>
              <input type="date" name="appointmentDate" className="input-field block w-full" onChange={handleChange} required min={today} />
            </div>
            <div>
              <label htmlFor="appointmentTime" className="block text-gray-700">Time of Appointment</label>
              <input type="time" name="appointmentTime" className="input-field block w-full" onChange={handleChange} required />
            </div>
          </div>

          <textarea
            name="purpose"
            placeholder="Purpose of Appointment *"
            required
            className="input-field block w-full h-24"
            onChange={handleChange}
          ></textarea>
        </fieldset>

        {/* Declaration */}
        <div className="flex items-start mb-6">
          <input
            type="checkbox"
            name="declaration"
            className="mt-1 mr-2"
            onChange={handleChange}
            required
          />
          <label htmlFor="declaration" className="text-gray-700">
            If the requested time is not available, one of our client service representatives will contact you within 24 hours. By sending this form, you declare that you are the legal registered owner of the pet or agent assigned by the owner to get the service done through us.
          </label>
        </div>

        {/* Submit */}
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition">
          Send
        </button>
      </form>
    </div>
  );
}