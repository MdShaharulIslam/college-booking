import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch colleges data from the server
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
        setColleges(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  // Filter colleges based on the search query
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDetails = (id) => {
    navigate(`/college-details/${id}`);
  };

  if (loading) {
    return <p className="text-center text-blue-500">Loading colleges...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Colleges</h2>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search colleges by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <div
            key={college._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{college.name}</h3>
              <p className="text-sm text-gray-600">Rating: {college.rating} ⭐</p>
              <p className="text-sm text-gray-600">
                Admission Date: {college.admissionDate}
              </p>
              <button
                onClick={() => handleDetails(college._id)}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
