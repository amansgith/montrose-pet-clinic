"use client";
import { useState } from "react";
import DOMPurify from "dompurify";

export default function AppointmentForm() {
  const initialFormData = {
    lastName: "",
    firstName: "",
    address: "",
    postalCode: "",
    homePhone: "",
    cellPhone: "",
    email: "",
    pet1Name: "",
    pet2Name: "",
    animal1: "Dog",
    animal1Breed: "",
    animal1Sex: "M",
    animal1dob: "",
    animal2: "Dog",
    animal2Breed: "",
    animal2Sex: "M",
    animal2dob: "",
    heardAboutUs: "Google",
    appointmentDate: "",
    appointmentTime: "",
    purpose: "",
    declaration: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(null); // New state for form status
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("You must agree to the declaration before submitting.");
      return;
    }

    setIsLoading(true); // Set loading to true

    // Sanitize form data
    const sanitizedFormData = {
      lastName: DOMPurify.sanitize(formData.lastName),
      firstName: DOMPurify.sanitize(formData.firstName),
      address: DOMPurify.sanitize(formData.address),
      postalCode: DOMPurify.sanitize(formData.postalCode),
      homePhone: DOMPurify.sanitize(formData.homePhone),
      cellPhone: DOMPurify.sanitize(formData.cellPhone),
      email: DOMPurify.sanitize(formData.email),
      pet1Name: DOMPurify.sanitize(formData.pet1Name),
      pet2Name: DOMPurify.sanitize(formData.pet2Name),
      animal1: DOMPurify.sanitize(formData.animal1),
      animal1Breed: DOMPurify.sanitize(formData.animal1Breed),
      animal1Sex: DOMPurify.sanitize(formData.animal1Sex),
      animal1dob: DOMPurify.sanitize(formData.animal1dob),
      animal2: DOMPurify.sanitize(formData.animal2),
      animal2Breed: DOMPurify.sanitize(formData.animal2Breed),
      animal2Sex: DOMPurify.sanitize(formData.animal2Sex),
      animal2dob: DOMPurify.sanitize(formData.animal2dob),
      heardAboutUs: DOMPurify.sanitize(formData.heardAboutUs),
      appointmentDate: DOMPurify.sanitize(formData.appointmentDate),
      appointmentTime: DOMPurify.sanitize(formData.appointmentTime),
      purpose: DOMPurify.sanitize(formData.purpose),
      declaration: formData.declaration,
    };

    try {
      const response = await fetch('/api/send-request', {
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

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Get the date 20 years ago in YYYY-MM-DD format
  const twentyYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 20)).toISOString().split("T")[0];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg my-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">Best Care for your Best Friend</h2>
      <p className="text-lg text-gray-700 mb-6">
      We are happy to book an appointment for you, however, this is not an automatic process. Once we receive your request, we will contact you to confirm a date and time that is as close to your request as possible.
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
              type="text"
              name="address"
              placeholder="Address"
              className="input-field block w-full md:col-span-2"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="input-field block w-full"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="homePhone"
              placeholder="Home Phone No."
              className="input-field block w-full"
              value={formData.homePhone}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="cellPhone"
              placeholder="Cell Phone"
              className="input-field block w-full"
              value={formData.cellPhone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              className="input-field block w-full md:col-span-2"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Pet Details */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Pet Details (Add at max 2 animal details)*</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="pet1Name"
              placeholder="Pet 1 Name"
              className="input-field block w-full"
              value={formData.pet1Name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="pet2Name"
              placeholder="Pet 2 Name"
              className="input-field block w-full"
              value={formData.pet2Name}
              onChange={handleChange}
            />
          </div>

          {/* Animal 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <select name="animal1" className="input-field block w-full" value={formData.animal1} onChange={handleChange} required>
              <option value="animal1">Animal 1</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="animal1Breed" placeholder="Breed of animal 1" className="input-field block w-full" value={formData.animal1Breed} onChange={handleChange} required />
            <select name="animal1Sex" className="input-field block w-full" value={formData.animal1Sex} onChange={handleChange} required>
              <option value="GenderofAnimal1">Gender of Animal 1</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <div>
              <label htmlFor="animal1DOB" className="block text-gray-500 pl-2">Animal 1 D.O.B</label>
              <input type="date" name="animal1dob" className="input-field block w-full" value={formData.animal1dob} onChange={handleChange} required max={today} min={twentyYearsAgo} />
            </div>
          </div>

          {/* Animal 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <select name="animal2" className="input-field block w-full" value={formData.animal2} onChange={handleChange}>
              <option value="GenderofAnimal1">Gender of Animal 2</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" name="animal2Breed" placeholder="Breed of Animal 2" className="input-field block w-full" value={formData.animal2Breed} onChange={handleChange} />
            <select name="animal2Sex" className="input-field block w-full" value={formData.animal2Sex} onChange={handleChange}>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <div>
              <label htmlFor="animal2dob" className="block text-gray-500 pl-2">Animal 2 D.O.B</label>
              <input type="date" name="animal2dob" className="input-field block w-full" value={formData.animal2dob} onChange={handleChange} max={today} min={twentyYearsAgo} />
            </div>
          </div>
        </fieldset>

        {/* Appointment Details */}
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-semibold">Appointment Details</legend>
          <select name="heardAboutUs" className="input-field block w-full" value={formData.heardAboutUs} onChange={handleChange} required>
            <option value="howyouknow">How did you hear about us? </option>
            <option value="Google">Google</option>
            <option value="Friend">Friend</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div>
              <label htmlFor="appointmentDate" className="block text-gray-700">Date of Appointment</label>
              <input type="date" name="appointmentDate" className="input-field block w-full" value={formData.appointmentDate} onChange={handleChange} required min={today} onKeyDown={(e) => e.preventDefault()} onInput={(e) => {
                const date = new Date(e.target.value);
                if (date.getUTCDay() === 0) {
                  e.target.setCustomValidity("Appointments cannot be scheduled on Sundays.");
                } else {
                  e.target.setCustomValidity("");
                }
              }} />
            </div>
            <div>
              <label htmlFor="appointmentTime" className="block text-gray-700">Time of Appointment</label>
              <select name="appointmentTime" className="input-field block w-full" value={formData.appointmentTime} onChange={handleChange} required>
                <option value="">Select Time</option>
                <option value="08:30">08:30 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="09:30">09:30 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="13:30">01:30 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="14:30">02:30 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="15:30">03:30 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>
          </div>

          <textarea
            name="purpose"
            placeholder="Purpose of Appointment *"
            required
            className="input-field block w-full h-24"
            value={formData.purpose}
            onChange={handleChange}
          ></textarea>
        </fieldset>

        {/* Declaration */}
        <div className="flex items-start mb-6">
          <input
            type="checkbox"
            name="declaration"
            className="mt-1 mr-2"
            checked={formData.declaration}
            onChange={handleChange}
            required
          />
          <label htmlFor="declaration" className="text-gray-700">
            If the requested time is not available, one of our client service representatives will contact you within 24 hours. By sending this form, you declare that you are the legal registered owner of the pet or agent assigned by the owner to get the service done through us.
          </label>
        </div>

        {/* Submit */}
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
        <p className="mt-4 text-green-600">Appointment Request Submitted!</p>
      )}
      {formStatus === "error" && (
        <p className="mt-4 text-red-600">Error submitting form. Please try again.</p>
      )}
    </div>
  );
}