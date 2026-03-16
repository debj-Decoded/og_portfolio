// DocumentLayout.js - Reusable wrapper for all policy pages
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DocumentLayout = ({ title, children, lastUpdated = "November 01, 2018" }) => {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {children}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Debashish Jena. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentLayout;

// Usage in Privacy.js:
const Privacy = () => (
  <DocumentLayout title="Privacy Policy">
    <p>Debashish ("us", "we", or "our") operates the codewithDev.com website (the "Service")...</p>
    {/* Rest of content with proper formatting */}
  </DocumentLayout>
);