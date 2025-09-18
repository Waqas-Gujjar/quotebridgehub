import React from "react";
import Disclaimer from "./Disclaimer";

export default function Congratulations() {
  return (
    <>
      <section className="min-h-[70vh] w-full bg-gray-100 flex items-start justify-center py-10 px-4">
        <div className="w-full max-w-xl">
          <div className="bg-white rounded-xl shadow-lg px-6 sm:px-8 py-8 sm:py-10 text-center">
            <h1 className="text-3xl sm:text-[28px] font-extrabold text-gray-900">Congratulations !</h1>
            <p className="text-2xl sm:text-[22px] font-bold text-gray-900 mt-1">You have Options!</p>
            <p className="text-gray-600 mt-3">Call Now For Your Medicare Plan Review!</p>

            <div className="flex items-center justify-center gap-2 mt-4 text-[13px] tracking-wide text-gray-700">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]" />
              <span className="font-semibold uppercase">Licensed insurance agents available now</span>
            </div>

            <a
              href="tel:8004952740"
              className="block mt-6"
              aria-label="Click to call toll-free 804-208-9767"
            >
              <div className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg shadow-xl px-4 sm:px-5 py-4 sm:py-5 neon-call">
                <div className="flex items-center justify-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
                    {/* Phone Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    >
                      <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.86 0 1.613.587 1.82 1.424l.638 2.552a1.875 1.875 0 0 1-.54 1.86l-1.012.95c.586 1.22 1.51 2.466 2.716 3.672 1.206 1.206 2.452 2.13 3.672 2.716l.95-1.012a1.875 1.875 0 0 1 1.86-.54l2.552.638a1.875 1.875 0 0 1 1.424 1.82V19.5a2.25 2.25 0 0 1-2.25 2.25h-1.125C9.436 21.75 2.25 14.564 2.25 5.625V4.5z" />
                    </svg>
                  </span>
                  <div className="text-center">
                    <div className="text-2xl font-extrabold tracking-wide">804-208-9767</div>
                    <div className="text-[12px] sm:text-sm opacity-95 font-semibold">CLICK TO CALL </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Disclaimer />
    </>
  );
}
