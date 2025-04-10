"use client";
import { useState } from "react";
import DOMPurify from "dompurify";

const FileTransfer = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    petNames: "",
    sendingClinic: "",
    receivingClinic: "",
    signature: "",
    date: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setIsLoading(true);

    const sanitizedFormData = {
      firstName : DOMPurify.sanitize(formData.firstName),
      lastName : DOMPurify.sanitize(formData.lastName),
      phoneNumber : DOMPurify.sanitize(formData.phoneNumber),
      address : DOMPurify.sanitize(formData.address),
      petNames : DOMPurify.sanitize(formData.petNames),
      sendingClinic : DOMPurify.sanitize(formData.sendingClinic),
      receivingClinic : DOMPurify.sanitize(formData.receivingClinic),
      signature : DOMPurify.sanitize(formData.signature),
      date : DOMPurify.sanitize(formData.date),
    };


    try {
      const response = await fetch("/api/send-transfer-request",{
        method: "POST",
        headers:{
          "Content-type":"application/json",
        },
        body: JSON.stringify({formData:sanitizedFormData}),
      });

      if(response.ok){
        setFormStatus("success");
        setFormData(initialFormData);
      }else{
        setFormStatus("error");
      }
    } catch (error) {
      console.log("error in form submission", error);
      setFormStatus("error");
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg my-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Medical File Transfer Request Form
        </h1>
        <p className="text-sm mt-4">
          Consent to Transfer Medical Records to and from Montrose pet Clinic.
        </p>
      </div>

      <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-lg font-bold">
            Your Details <span className="text-red-600">*</span>
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              name="lastName"
              placeholder="Last Name"
              className="input-field block w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Primary Phone Number"
              className="input-field block w-full"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 rounded-lg mt-4">
          <legend className="text-lg font-bold">
            Address <span className="text-red-600">*</span>
          </legend>
          <input
            name="address"
            placeholder="Address on Client File"
            className="input-field block w-full"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="border border-gray-300 p-4 rounded-lg mt-4">
          <legend className="text-lg font-bold">
            Pet Details <span className="text-red-600">*</span>
          </legend>
          <input
            name="petNames"
            placeholder="Name of Pet(s) being transferred"
            className="input-field block w-full"
            value={formData.petNames}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="border border-gray-300 p-4 rounded-lg mt-4">
          <legend className="text-lg font-bold">
            Sending Clinic <span className="text-red-600">*</span>
          </legend>
          <input
            type="text"
            name="sendingClinic"
            placeholder="Name of the Veterinary Clinic that the requested files are being sent FROM"
            className="input-field block w-full"
            value={formData.sendingClinic}
            onChange={handleChange}
            required
          />
        </fieldset>

        {/* Receiving Clinic */}
        <fieldset className="border border-gray-300 p-4 rounded-lg mt-4">
          <legend className="text-lg font-bold">
            Receiving Clinic <span className="text-red-600">*</span>
          </legend>
          <input
            type="text"
            name="receivingClinic"
            placeholder="Name of the Veterinary Clinic that the requested files are being sent TO"
            className="input-field block w-full"
            value={formData.receivingClinic}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="border border-gray-300 p-4 rounded-lg mt-4">
          <legend className="text-lg font-bold">
            By signing below I authorize copies or summaries of the medical
            records pertaining to my animal(s) be released from the above listed
            sending clinic to the receiving clinic.{" "}
            <span className="text-red-600">*</span>
          </legend>
          <input
            name="signature"
            placeholder="Sign here"
            className="input-field block w-full"
            value={formData.signature}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="border border-gray-300 p-4 rounded-lg mt-4">
          <legend className="text-lg font-bold">
            Date of Request (mm/dd/yyyy)
          </legend>
          <input
            name="date"
            type="text"
            placeholder="Enter Date of Request here"
            className="input-field block w-full"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </fieldset>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-secondary transition"
          disabled={isLoading}
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
            "Submit"
          )}
        </button>
      </form>

      {formStatus === "success" && (
        <p className="mt-4 text-green-600">File Transfer Request Submitted</p>
      )}
      {formStatus === "error" && (
        <p>Error in Form Submission. Please try again later.</p>
      )}
    </div>
  );
};

export default FileTransfer;
