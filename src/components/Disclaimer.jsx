import React from 'react'

const Disclaimer = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-sm text-gray-800 leading-relaxed space-y-4">
          <p className="font-semibold">
            This advertisement is a solicitation to sell insurance, and its not from CMS or a government agency.
          </p>
          
          <p>
            QuoteBridgeHub.com is a referral service that provides information and connects consumers with companies that may offer certain types of insurance coverage. QuoteBridgeHub.com is not an insurance broker and does not make decisions about insurance coverage. We do not guarantee any specific outcome or results from contacting our helpline.
          </p>
          
          <p>
            Calling the helpline is free of charge; however, the services or insurance programs you choose to pursue may involve costs. Neither QuoteBridgeHub.com nor any Medicare insurance plans you may be connected with are endorsed by the U.S. Government or the federal Medicare program. Calls to the helpline may be transferred to a licensed insurance agent who can provide information and, if you choose, assist with enrollment.
          </p>
          
          <p>
            We do not offer every plan available in your area. Currently, we represent x organizations offering xx products in your area. For a complete list of your options, please visit Medicare.gov, call 1-800-MEDICARE, or contact your local State Health Insurance Program (SHIP).
          </p>
          
          <p>
            QuoteBridgeHub.com partners may not offer every plan available in your area. Participating sales agencies represent Medicare Advantage HMO, PPO, PFFS, and/or Part D plan organizations that are contracted with Medicare. Enrollment in any plan depends on the plan's contract renewal.
          </p>
          
          <p className=" font-medium">
            Please contact <a href="mailto:support@quotebridgehub.com" className="text-blue-600 hover:text-blue-800">support@quotebridgehub.com</a> for any assistance
          </p>
        </div>
        
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-120 mt-8 pt-6 border-t border-gray-200">
          <div className='flex items-center'>
            <img 
            src="/image/logo.png" 
            alt="QuoteBridgeHub Logo" 
            className="h-20 w-auto object-contain"
          />
          <p className='text-2xl font-bold text-blue-600'>QuoteBridgeHub.com</p>
          </div>
          
          

          <img 
            src="/image/securelogos.png" 
            alt="Security Logos" 
            className="h-15 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Disclaimer
