import React from 'react';

const Graduation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Graduates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
         {/* 4 Small Images */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="col-span-1">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Graduate"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Graduate"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Graduate"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Graduate"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
        </div>{/* Large Image */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Graduate"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

       
      </div>
    </div>
  );
};

export default Graduation;
