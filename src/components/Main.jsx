import React from "react";

const Main = () => {
  return (
    <>
      {/* Top Line with Background */}
      <div className="border-t border-b border-gray-300 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 py-4 gap-4">
          {/* Left side text */}
          <div className="text-center sm:text-left">
            <span className="text-blue-600 font-semibold text-2xl sm:text-3xl md:text-4xl">
              QuoteBridgeHub
            </span>
            <p className="text-sm sm:text-base text-gray-800">
              - A non-government entity -
            </p>
          </div>

          {/* Right side logo */}
          <img
            src="/image/securelogos.png" // apna actual logo path yahan daalna hai
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>
      </div>

      {/* Disclaimer Content */}
      <div className="w-full text-gray-800 text-sm px-4 sm:px-6 lg:px-12 py-8">
        <div className="max-w-5xl mx-auto leading-relaxed space-y-4">
          <p>
            This advertisement is a solicitation to sell insurance, and is coming
            from a licensed health insurance agency, and not from CMS or a
            government agency.
          </p>

          {/* 🔹 New Disclaimer Section Added */}
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

          <p className="font-semibold ">
            We do not offer every plan available in your area. Currently, we
            represent x organizations offering xx products in your area. For a
            complete list of your options, please visit Medicare.gov, call
            1-800-MEDICARE, or contact your local State Health Insurance Program
            (SHIP).
          </p>

          <p>
            QuoteBridgeHub.com partners may not offer every plan available in your
            area. Participating sales agencies represent Medicare Advantage HMO,
            PPO, PFFS, and/or Part D plan organizations that are contracted with
            Medicare. Enrollment in any plan depends on the plan’s contract
            renewal.
          </p>

          <p>
            By using this site, you acknowledge that you have read and agree to our
            Terms of Service and Privacy Policy. We are committed to protecting
            your privacy. If you do not want to share your information, please
            click on Do Not Sell My Personal Information for more details.
          </p>
          {/* 🔹 End New Disclaimer Section */}

        
        </div>
      </div>
    </>
  );
};

export default Main;
