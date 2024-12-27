import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const CollegeCard = () => {
  const staticColleges = [
    {
      id: 1,
      name: 'Harvard University',
      image: 'https://i.ibb.co.com/gg5Hgzg/lodge4.jpg',
      rating: 4.8,
      admissionDate: '2024-01-15',
      researchCount: 150,
      events: 'Annual Science Fair, Coding Hackathon',
      sports: 'Basketball, Soccer, Tennis',
      researchWorks: 'AI Research, Quantum Computing',
      admissionProcess: 'Online',
    },
    {
      id: 2,
      name: 'Stanford University',
      image: 'https://i.postimg.cc/FKNvxzvG/1.jpg',
      rating: 4.7,
      admissionDate: '2024-02-01',
      researchCount: 200,
      events: 'Tech Conference, AI Workshop',
      sports: 'Baseball, Swimming',
      researchWorks: 'Machine Learning, Blockchain',
      admissionProcess: 'Offline',
    },
    {
      id: 3,
      name: 'MIT',
      image: 'https://i.postimg.cc/prwb5Xkf/3.jpg',
      rating: 4.9,
      admissionDate: '2024-03-10',
      researchCount: 300,
      events: 'Robotics Expo, Data Science Summit',
      sports: 'Rowing, Badminton',
      researchWorks: 'Robotics, Cybersecurity',
      admissionProcess: 'Online',
    }  ];

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staticColleges.map((college) => (
          <div key={college.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-4">{college.name}</h3>
              <div className='flex gap-9'>
                <p className="text-gray-600 font-extrabold bg-blue-500 rounded-md mb-4">Admission Date: {college.admissionDate}</p>
                <p className="text-gray-600 bg-orange-400 rounded-md font-extrabold mb-4">Rating: {college.rating}</p>
              </div>

              <p className="text-gray-600 mb-4">Research Count: {college.researchCount}</p>
              <p className="text-gray-600 mb-4">Events: {college.events}</p>
              <p className="text-gray-600 mb-4">Sports: {college.sports}</p>
              <p className="text-gray-600 mb-4">Research Works: {college.researchWorks}</p>
              <p className="text-gray-600 mb-4">Admission Process: {college.admissionProcess}</p>  
              <Link to="colleges">
               <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                View More
              </button>
              </Link>
             
            </div>



          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;
