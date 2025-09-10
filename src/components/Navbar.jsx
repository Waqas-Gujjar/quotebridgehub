import React from 'react'
import { PhoneCall } from 'lucide-react' // using lucide-react for modern icons

const Navbar = () => {
  return (
    <>
    <div className="bg-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo + Brand + Subtitle */}
        <div className="flex items-center">
          {/* Logo Image */}
          <img
            src="/image/logo.png" // Use absolute path from public/ so it works on all routes
            alt="QuoteBridgeHub Logo"
            className="w-20 h-20 sm:w-20 sm:h-20 object-contain"
          />

          {/* Brand + Subtitle */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-bold">
              QuoteBridgeHub
            </h1>
            <p className="text-sm font-semibold text-gray-800 ">
              - A non-government entity -
            </p>
          </div>
        </div>

        {/* Contact CTA (right side) */}
        <div className="mt-4 sm:mt-0 text-center sm:text-right">
          <p className="text-base text-gray-800">
            Need a quote? <span className="font-bold">Call toll free:</span>
          </p>

          <div className="flex items-center justify-center sm:justify-end space-x-2 mt-1">
            <PhoneCall className="text-blue-600 w-6 h-6" />
            <span className="text-lg font-semibold text-gray-900">
              800-495-2740
            </span>
            <span className="text-gray-700">TTY: 711</span>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            Mon – Fri 9 AM – 5 PM EST
          </p>
        </div>
      </div>
    </div>
    {/* Horizontal line below navbar */}
    <hr className='w-full  text-gray-300' />
    </>
  )
}

export default Navbar
