import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams(); // Get the college ID from the URL
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch(
          "https://college-booking-server-self.vercel.app/colleges"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch colleges data");
        }
        const data = await response.json();

        // Filter the college based on the 'id' from the URL
        const foundCollege = data.find((college) => college._id === id);
        setCollege(foundCollege);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchColleges();
  }, [id]); // Run this effect whenever 'id' changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!college) {
    return <div>College not found.</div>;
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

          <h3 className="text-2xl font-semibold mb-4">Sports</h3>
          <p className="text-gray-600 mb-4">{college.sports}</p>

          <h3 className="text-2xl font-semibold mb-4">Research Works</h3>
          <p className="text-gray-600 mb-4">{college.researchWorks}</p>

          <h3 className="text-2xl font-semibold mb-4">Admission Date</h3>
          <p className="text-gray-600 mb-4">{college.admissionDate}</p>
          <Link to="/admission">
            <button className="btn bg-orange-300 hover:bg-orange-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Admission
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
