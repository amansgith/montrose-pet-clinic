import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CTA = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-blue-100">
      {/* Left Side - Text and Buttons */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Request an Appointment and Download Our App
        </h2>
        <p className="text-lg text-gray-600 mb-6">
        Schedule your pet’s appointment quickly and easily with our online booking system. Download our app for seamless access to appointments, pet care tips, and more on the go. Enjoy convenient, comprehensive care for your furry friends at your fingertips.
        </p>
        <div className="flex gap-4 justify-center md:justify-start font-semibold">
          <Link href="/newClients/registration">
          <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition">
            Request an Appointment
          </button>
          </Link>

          <button className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition">
            Sign Up To Get Our App
          </button>
        </div>
      </div>

      {/* Right Side - App Image */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/appcta.webp"
          alt="App Preview"
          width={300}
          height={500}
          className="w-full max-w-xs mx-auto md:max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>
    
    </>
  )
}

export default CTA