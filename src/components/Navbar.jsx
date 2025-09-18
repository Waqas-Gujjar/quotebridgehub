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
        <div className="mt-4 sm:mt-0 flex items-center justify-center sm:justify-end">
          <a 
            href="tel:8004952740" 
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 shadow-lg transition-colors cursor-pointer"
            aria-label="Call toll-free 8042089767"
          >
            <div className="bg-white rounded-full p-2 mr-3">
              <PhoneCall className="text-blue-500 w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium uppercase tracking-wide">
                CALL  M-F 9AM-5PM EST
              </p>
              <p className="text-lg font-bold">
                8042089767
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* Horizontal line below navbar */}
    <hr className='w-full  text-gray-300' />
    </>
  )
}

export default Navbar
