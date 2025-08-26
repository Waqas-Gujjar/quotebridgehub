import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 text-gray-700 leading-relaxed">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Information you provide when filling out forms on our site (name,
          phone number, email, zip code, etc.).
        </li>
        <li>Information you provide when calling our helpline.</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p>
        We use your information to connect you with licensed insurance agents or
        companies who may be able to help you with insurance options.
      </p>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Sharing of Information
      </h2>
      <p>We may share your information with:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>
          Licensed insurance agents and agencies that can discuss plan options
          with you.
        </li>
        <li>
          Service providers who help us operate our website and helpline.
        </li>
      </ul>
      <p className="mt-2">
        We do <em>not</em> sell your personal information to unrelated third
        parties for marketing purposes.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Your Privacy Choices
      </h2>
      <p>
        You may request that we do not share your information by clicking on{" "}
        <em>“Do Not Sell My Personal Information”</em> or by contacting us
        directly.
      </p>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p>
        We take reasonable measures to protect your personal information, but we
        cannot guarantee complete security of information transmitted online.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Request access to the information we have about you.</li>
        <li>
          Request corrections or deletion of your information (subject to
          applicable law).
        </li>
      </ul>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Changes to Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy as needed. Updates will be posted on
        this page with a revised “Effective Date.”
      </p>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our Terms of
        Service, please contact us at:
      </p>
      <p className="mt-2 font-semibold">
        Email: <span>support@quotebridgehub.com </span> 
        <br />
      </p>

      
    </div>
  );
};

export default Privacy;
