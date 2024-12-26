import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const { id } = useParams();
    const [college, setCollege] = useState(null);

    useEffect(() => {
        // Fetch college details from the JSON file
        fetch('/colleges.json')
            .then(response => response.json())
            .then(data => {
                // Find the college by ID
                const selectedCollege = data.find(college => college.id === parseInt(id));
                setCollege(selectedCollege);
            })
            .catch(error => console.error('Error fetching college details:', error));
    }, [id]);

    // Fallback if the college is not found or still loading
    if (!college) {
        return <p className="text-center text-red-500">College details not found or loading...</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">{college.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
                    <p className="text-gray-600 mb-4">{college.admissionProcess}</p>
                    
                    <h3 className="text-2xl font-semibold mb-4">Events</h3>
                    <p className="text-gray-600 mb-4">{college.events}</p>
                    
                    <h3 className="text-2xl font-semibold mb-4">Research Works</h3>
                    <p className="text-gray-600 mb-4">{college.researchWorks}</p>
                    
                    <h3 className="text-2xl font-semibold mb-4">Sports</h3>
                    <p className="text-gray-600">{college.sports}</p>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
