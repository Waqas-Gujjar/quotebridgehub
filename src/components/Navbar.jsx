import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4  sm:flex-row items-center sm:justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-bold text-center sm:text-left">
          QuoteBridgeHub
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-800 mt-2 sm:mt-0 sm:ml-4 text-center sm:text-left">
          - A non-government entity -
        </p>
      </div>
    </div>
  )
}

export default Navbar
