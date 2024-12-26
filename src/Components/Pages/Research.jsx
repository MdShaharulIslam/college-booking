import React from 'react';
import webimg from "../../assets/webimg.jpeg"
import seoimg from "../../assets/seoimg.jpeg"
import markimg from "../../assets/mark.jpeg"
const Research = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Research Papers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* SEO Research */}
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">SEO Research</h3>
         <img src={seoimg} alt="" />
          <p className="text-gray-600 mb-2">Contact: <a href="mailto:jenkins@company.com" className="text-blue-500">jenkins@company.com</a></p>
          <p className="text-gray-600">Phone: <span className="text-blue-500">+35 381 57 983</span></p>
        </div>

        {/* Web Development */}
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
         <img src={webimg} alt="" />
          <p className="text-gray-600 mb-2">Contact: <a href="mailto:leroy@company.com" className="text-blue-500">leroy@company.com</a></p>
          <p className="text-gray-600">Phone: <span className="text-blue-500">+48 381 77 983</span></p>
        </div>

        {/* Marketing Research */}
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Marketing Research</h3>
          <img src={markimg} alt="" />
          <p className="text-gray-600 mb-2">Contact: <a href="mailto:markey@company.com" className="text-blue-500">markey@company.com</a></p>
          <p className="text-gray-600">Phone: <span className="text-blue-500">+24 85 381 77 983</span></p>
        </div>
      </div>
    </div>
  );
};

export default Research;
