import React from 'react';

const Feedback = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">User Feedback</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Feedback 1 */}
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
          <p className="text-gray-600 mb-4">"This platform has made my work so much easier. The user interface is very intuitive and easy to navigate."</p>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Feedback 2 */}
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-600 mb-4">"I love the seamless integration of all the tools. It's a great platform for collaboration and productivity."</p>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Feedback 3 */}
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Sam Wilson</h3>
          <p className="text-gray-600 mb-4">"The customer support is fantastic! They helped me resolve an issue quickly and efficiently. Highly recommend!"</p>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Feedback 4 */}
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Emily Taylor</h3>
          <p className="text-gray-600 mb-4">"An excellent platform for managing projects. The features are robust, and I appreciate the constant updates!"</p>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
