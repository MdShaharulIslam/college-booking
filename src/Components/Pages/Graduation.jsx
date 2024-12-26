import React from 'react';
import img1 from "../../assets/g1.jpeg";
import img2 from "../../assets/g2.jpeg";
import img3 from "../../assets/g3.jpeg";
import img4 from "../../assets/g4.jpeg";
import img5 from "../../assets/g5.jpg";

const Graduation = () => {
  return (
    <div className="container mx-auto px-4 py-8 m-auto flex justify-center items-center">
      <div className="text-center w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Graduates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* 4 Small Images */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src={img1}
                alt="Graduate"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src={img2}
                alt="Graduate"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src={img3}
                alt="Graduate"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src={img4}
                alt="Graduate"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Large Image */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src={img5}
              alt="Graduate"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
           {/* 4 Small Images */}
           <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src={img1}
                alt="Graduate"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src={img2}
                alt="Graduate"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src={img3}
                alt="Graduate"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src={img4}
                alt="Graduate"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Graduation;
