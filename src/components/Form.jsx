  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";

  export default function MultiStepQuoteForm() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
      enrolled: null,
      zip: "",
      name: "",
      email: "",
      phone: "",
      consent: false,
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Steps progress: 0%, 50%, 100%
    const PROGRESS = [0, 50, 100];
    const progress = PROGRESS[Math.min(step, PROGRESS.length - 1)];

    const next = () => setStep((s) => Math.min(s + 1, 2));
    const back = () => setStep((s) => Math.max(s - 1, 0));

    const onChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateCurrentStep = () => {
      const newErrors = {};
      if (step === 0 && formData.enrolled === null)
        newErrors.enrolled = "Please select an option";

      if (step === 1 && !formData.zip.trim())
        newErrors.zip = "Zip code is required";

      if (step === 2) {
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.consent) newErrors.consent = "You must agree to the consent";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const Handlenext = (e) => {
      e?.preventDefault();
      if (validateCurrentStep()) next();
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateCurrentStep()) return;
    
      // TrustedForm certificate check
      let trustedFormCertUrl = "";
      if (window.xxTrustedFormCertUrl) {
        trustedFormCertUrl = window.xxTrustedFormCertUrl;
      } else if (window.TrustedForm && typeof window.TrustedForm.getCertUrl === "function") {
        trustedFormCertUrl = window.TrustedForm.getCertUrl();
      } else {
        const trustedFormInput = document.querySelector(
          'input[name="xxTrustedFormCertUrl"]'
        );
        if (trustedFormInput) {
          trustedFormCertUrl = trustedFormInput.value;
        }
      }
    
      // Ab data Google Sheet per bhejna hai
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwW3ANf2zRyf8ZJgZ9-hXpg6A8qupc3LFQnTvWYeaV6nb_zP7KI4e9DA9HYrWXJOEfK3w/exec",
          {
            method: "POST",
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              zip: formData.zip,
              enrolled: formData.enrolled,
              consent: formData.consent,
              trustedFormCertUrl: trustedFormCertUrl,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        const result = await response.json();
        console.log("Google Sheet Response:", result);
    
        // Agar sab sahi ho gaya tu congratulations page
        navigate("/congratulations");
      } catch (error) {
        console.error("Error saving to Google Sheet:", error);
      }
    };
    

    // After successful submit we navigate; no local submitted screen needed here

    return (
      <div className="flex flex-col items-center justify-center mt-12 px-4">
        <h2 className="text-center text-4xl sm:text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
          FIND YOUR MEDICARE COVERAGE OPTIONS THAT MAY MEET YOUR NEEDS
        </h2>

        {/* Progress Bar */}
        <div className="w-full max-w-lg mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {progress}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <form className="w-full max-w-xl items-center p-8 rounded-2xl" onSubmit={handleSubmit}>
          {/* STEP 0 - Enrolled in Medicare */}
          {step === 0 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8">
                Are you currently enrolled in Medicare Parts A & B?
              </h2>
              <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
                <button
                  type="button"
                  className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
                  onClick={() => {
                    setFormData((p) => ({ ...p, enrolled: true }));
                    setErrors({});
                    next();
                  }}
                >
                  YES
                </button>
                <button
                  type="button"
                  className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
                  onClick={() => {
                    setFormData((p) => ({ ...p, enrolled: false }));
                    setErrors({});
                    next();
                  }}
                >
                  NO
                </button>
                {errors.enrolled && (
                  <p className="text-red-500 text-sm mt-2">{errors.enrolled}</p>
                )}
              </div>
            </div>
          )}

          {/* STEP 1 - Zip Code */}
          {step === 1 && (
            <div className="flex flex-col items-center w-full justify-center">
              <h2 className="text-3xl font-bold mb-6 text-center">Enter Your Zip Code</h2>
              <p className="text-gray-600 text-lg mb-6 text-center">
              We verify your information to provide accurate plan availability in your area.
              </p>

              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={onChange}
                placeholder="Zip Code"
                className="w-full border rounded-lg border-gray-300 px-5 outline-none py-4 mb-4"
              />
              {errors.zip && <p className="text-red-500 text-sm mb-2">{errors.zip}</p>}

              {/* Next button */}
              <button
                type="button"
                className="w-full py-5 cursor-pointer rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700"
                onClick={Handlenext}
              >
                NEXT →
              </button>

              {/* Back button */}
              <div className="mt-4">
                <button
                  type="button"
                  className="flex items-start gap-2 font-semibold cursor-pointer text-gray-400 text-xl"
                  onClick={back}
                >
                  ← BACK
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 - Contact Info + Consent Checkbox */}
          {step === 2 && (
            <div className="flex flex-col items-center w-full justify-center">
              <h2 className="text-4xl font-bold mb-6 text-center">What's your contact info?</h2>

              {/* Full Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Full Name"
                className="w-full border rounded-lg border-gray-300 px-5 outline-none py-4 mb-4"
              />
              {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Email Address"
                className="w-full border rounded-lg border-gray-300 px-5 outline-none py-4 mb-4"
              />
              {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                placeholder="Phone Number"
                className="w-full border rounded-lg border-gray-300 px-5 outline-none py-4 mb-4"
              />
              {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

              {/* Consent Checkbox */}
              <div className="flex items-start mt-4 mb-6">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, consent: e.target.checked }))
                  }
                  className="mt-1 mr-3"
                />
                <label className="text-gray-700 text-sm">
                  By checking this box, I agree that QuoteBridgeHub and its marketing
                  Partners may contact me about Medicare plan options at the number and
                  email I provided using an automatic telephone dialing system or
                  prerecorded voice, text message, and email. My consent is not a
                  condition of purchase. Message and data rates may apply. I understand
                  my information may be used only as permitted by CMS rules and will not
                  be shared with other parties without my prior express written consent.
                  I may revoke my consent at any time.
                </label>
              </div>
              {errors.consent && <p className="text-red-500 text-sm mb-2">{errors.consent}</p>}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-5 cursor-pointer rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700"
              >
                SUBMIT →
              </button>

              {/* Back button */}
              <div className="mt-4">
                <button
                  type="button"
                  className="flex items-start gap-2 font-semibold cursor-pointer text-gray-400 text-xl"
                  onClick={back}
                >
                  ← BACK
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
