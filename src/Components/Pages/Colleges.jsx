import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch college data from the JSON file
        fetch('../../../public/colleges.json')
            .then(response => response.json())
            .then(data => setColleges(data))
            .catch(error => console.error('Error fetching college data:', error));
    }, []);

    const handleDetails = (id) => {
        navigate(`/college-details/${id}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Colleges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {colleges.map((college) => (
                    <div key={college.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={college.image}
                            alt={college.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
                            <p className="text-gray-600">Rating: {college.rating} / 5</p>
                            <p className="text-gray-600">Admission Date: {college.admissionDate}</p>
                            <p className="text-gray-600">Research Works: {college.researchCount}</p>
                            <button
                                onClick={() => handleDetails(college.id)}
                                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colleges;
