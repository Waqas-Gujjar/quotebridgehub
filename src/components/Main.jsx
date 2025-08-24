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
            <p className="text-sm sm:text-base text-gray-600">
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
      <div className="w-full text-gray-600 text-sm px-4 sm:px-6 lg:px-12 py-8">
        <div className="max-w-5xl mx-auto leading-relaxed space-y-4">
          <p>
            This advertisement is a solicitation to sell insurance, and is coming
            from a licensed health insurance agency, and not from CMS or a
            government agency.
          </p>

          <p>
            QuoteBridgeHub.com is a referral source that provides information and
            access to a helpline to match consumers with companies that may
            provide certain insurance coverage to them. QuoteBridgeHub.com does not
            act as an insurance broker and does not make decisions about insurance
            coverage that may be available to you. QuoteBridgeHub.com doesn’t
            promise a specific outcome or the results you may achieve by calling
            the helpline. The helpline is free to call but the services or
            programs that you pursue may have costs associated with them. Neither
            QuoteBridgeHub.com nor any of the Medicare insurance plans to which you
            may be connected to are endorsed by the U.S. Government or the federal
            Medicare program. Calls placed to the helpline will ultimately be
            transferred to a licensed agent who can enroll the caller into a new
            plan.
          </p>

          <p>
            We do not offer every plan available in your area. Currently we
            represent 73 organizations which offer 5,110 products in your area.
            Please contact Medicare.gov or 1-800-MEDICARE or your local State
            Health Insurance Program (SHIP) to get information on all of your
            options.
          </p>

          <p>
            QuoteBridgeHub.com partners may not offer every plan available in your
            area and participating sales agencies represent Medicare Advantage
            HMO, PPO, PFFS and/or part D plan organizations that are contracted
            with Medicare. Enrollment depends on the plan’s contract renewal.
          </p>

          <p>
            By using this site, you acknowledge that you have read and agree to
            the Terms of Service and Privacy Policy. We are committed to
            protecting your privacy. If you do not want to share your information
            please click on Do Not Sell My Personal Information for more details.
          </p>

          <p className="text-xs text-gray-500">
            SMID# MULTI-PLAN_MLSlRp-La0106-CAS01-NON0_C
          </p>

          <p className="text-xs text-gray-500">
            Copyright © 2025 QuoteBridgeHub.com, Owned by MediaLot LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
