import React from "react";

const Main = () => {
  return (
    <>
      {/* Top Line with Background */}
      <div className="border-t border-b border-gray-300 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 py-4 gap-4">
          {/* Left side: Logo + Brand */}
          <div className="flex items-center ">
            {/* Logo Image */}
            <img
              src="image/logo.png" // <-- Replace with your logo path
              alt="QuoteBridgeHub Logo"
              className="w-20 h-20 sm:w-20 sm:h-20 object-contain"
            />

            {/* Brand + Subtitle */}
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-bold">
                QuoteBridgeHub
              </h1>
              <p className="text-sm font-semibold text-gray-800">
                - A non-government entity -
              </p>
            </div>
          </div>

          {/* Right side logo */}
          <img
            src="/image/securelogos.png" // <-- Replace with your logo path
            alt="Secure Logos"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>
      </div>

      {/* Disclaimer Content */}
      <div
        className="w-full text-gray-800 text-sm px-4 sm:px-6 lg:px-12 py-8"
        role="contentinfo"
      >
        <div className="max-w-5xl mx-auto leading-relaxed space-y-4">
          <p>
            This advertisement is a solicitation to sell insurance, and its not from CMS or a government agency.
          </p>

          <p>
            QuoteBridgeHub.com is a referral service that provides information and
            connects consumers with companies that may offer certain types of
            insurance coverage. QuoteBridgeHub.com is not an insurance broker and
            does not make decisions about insurance coverage. We do not guarantee
            any specific outcome or results from contacting our helpline.
          </p>

          <p>
            Calling the helpline is free of charge; however, the services or
            insurance programs you choose to pursue may involve costs. Neither
            QuoteBridgeHub.com nor any Medicare insurance plans you may be
            connected with are endorsed by the U.S. Government or the federal
            Medicare program. Calls to the helpline may be transferred to a
            licensed insurance agent who can provide information and, if you
            choose, assist with enrollment.
          </p>

          <p className="font-semibold text-gray-900">
           We do not offer every plan available in your area. Currently we represent [HMO, PPO and PFFS] organizations which offer [Medicare Advantage, Prescription Drug (Part D) and Medicare Supplement Insurance Plans] products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program( SHIP ) to get information on all of your options
          </p>

          <p>
            QuoteBridgeHub.com partners may not offer every plan available in your
            area. Participating sales agencies represent Medicare Advantage HMO,
            PPO, PFFS, and/or Part D plan organizations that are contracted with
            Medicare. Enrollment in any plan depends on the plan’s contract
            renewal.
          </p>

          
          <p>
            please contact <span className="text-green-500">support@quotebridgehub.com</span> for any assistance
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
