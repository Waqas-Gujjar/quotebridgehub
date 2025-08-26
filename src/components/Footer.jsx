import React from "react";

const Footer = () => {
  return (
    <div className="bg-white fixed bottom-0 left-0 right-0 border-t border-gray-200 shadow-[0_-2px_6px_rgba(0,0,0,0.1)]">
      <div className="max-w-5xl mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        
        {/* Copyright */}
        <p className="text-center sm:text-left">
          © 2025 QuoteBridgeHub.com, Owned by Fluxa Growth LLC. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a 
            href="/TermsConditions" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600"
          >
            Terms & Conditions
          </a>
          <a 
            href="/Privacy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600"
          >
            Privacy Policy
          </a>
          <a 
            href="/do-not-sell" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600"
          >
            Do Not Sell My Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
