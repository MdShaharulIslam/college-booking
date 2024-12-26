import React, { useEffect, useState } from "react";

const MyCollege = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        // Simulating fetching data from an API for booked colleges
        const fetchColleges = async () => {
            // Replace with your API endpoint
            const response = await fetch("/api/my-colleges");
            const data = await response.json();
            setColleges(data);
        };

        fetchColleges();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-center mb-6">My Colleges</h1>
            {colleges.length === 0 ? (
                <p className="text-center text-gray-500">You have not booked any colleges yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {colleges.map((college) => (
                        <div 
                            key={college.id} 
                            className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                            <h2 className="text-lg font-semibold mb-2">{college.name}</h2>
                            <p className="text-sm text-gray-600 mb-4">Location: {college.location}</p>
                            <p className="text-sm text-gray-600 mb-4">Admission Date: {college.admissionDate}</p>
                            <p className="text-sm text-gray-600">Research Papers: {college.researchPapers}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCollege;
