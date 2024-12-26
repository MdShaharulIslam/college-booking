
  import React, { useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  const staticColleges = [
    {
      "id": 1,
      "name": "Harvard University",
      "image": "https://i.ibb.co.com/gg5Hgzg/lodge4.jpg",
      "rating": 4.8,
      "admissionDate": "2024-01-15",
      "researchCount": 150,
      "events": "Annual Science Fair, Coding Hackathon",
      "sports": "Basketball, Soccer, Tennis",
      "researchWorks": "AI Research, Quantum Computing",
      "admissionProcess": "Online"
    },
    {
      "id": 2,
      "name": "Stanford University",
      "image": "https://i.postimg.cc/FKNvxzvG/1.jpg",
      "rating": 4.7,
      "admissionDate": "2024-02-01",
      "researchCount": 200,
      "events": "Tech Conference, AI Workshop",
      "sports": "Baseball, Swimming",
      "researchWorks": "Machine Learning, Blockchain",
      "admissionProcess": "Offline"
    },
    {
      "id": 3,
      "name": "MIT",
      "image": "https://i.postimg.cc/prwb5Xkf/3.jpg",
      "rating": 4.9,
      "admissionDate": "2024-03-10",
      "researchCount": 300,
      "events": "Robotics Expo, Data Science Summit",
      "sports": "Rowing, Badminton",
      "researchWorks": "Robotics, Cybersecurity",
      "admissionProcess": "Online"
    },
    {
      "id": 4,
      "name": "Princeton University",
      "image": "https://i.postimg.cc/BbLfv15Z/4.jpg",
      "rating": 4.6,
      "admissionDate": "2024-04-05",
      "researchCount": 180,
      "events": "Global Innovation Summit, Leadership Forum",
      "sports": "Football, Volleyball",
      "researchWorks": "Innovation, Leadership Studies",
      "admissionProcess": "Offline"
    },
    {
      "id": 5,
      "name": "Yale University",
      "image": "https://i.postimg.cc/DfHKMBFS/2.jpg",
      "rating": 4.7,
      "admissionDate": "2024-05-15",
      "researchCount": 210,
      "events": "Business Symposium, Art Exhibition",
      "sports": "Basketball, Soccer",
      "researchWorks": "Business, Arts",
      "admissionProcess": "Online"
    },
    {
      "id": 6,
      "name": "Oxford University",
      "image": "https://i.postimg.cc/prwb5Xkf/3.jpg",
      "rating": 4.8,
      "admissionDate": "2024-06-01",
      "researchCount": 250,
      "events": "Cultural Festival, Scientific Research Conference",
      "sports": "Tennis, Cricket",
      "researchWorks": "Cultural Studies, Scientific Research",
      "admissionProcess": "Offline"
    },
    {
      "id": 7,
      "name": "Cambridge University",
      "image": "https://i.postimg.cc/DfHKMBFS/2.jpg",
      "rating": 4.9,
      "admissionDate": "2024-07-20",
      "researchCount": 320,
      "events": "Robotics Competition, Technology Fair",
      "sports": "Rowing, Hockey",
      "researchWorks": "Engineering, Technology",
      "admissionProcess": "Online"
    },
    {
      "id": 8,
      "name": "Columbia University",
      "image": "https://i.postimg.cc/BbLfv15Z/4.jpg",
      "rating": 4.6,
      "admissionDate": "2024-08-10",
      "researchCount": 220,
      "events": "Public Policy Forum, Entrepreneurship Panel",
      "sports": "Basketball, Tennis",
      "researchWorks": "Public Policy, Entrepreneurship",
      "admissionProcess": "Offline"
    },
    {
      "id": 9,
      "name": "University of Chicago",
      "image": "https://i.postimg.cc/prwb5Xkf/3.jpg",
      "rating": 4.7,
      "admissionDate": "2024-09-15",
      "researchCount": 200,
      "events": "Math Olympiad, Philosophy Symposium",
      "sports": "Soccer, Swimming",
      "researchWorks": "Mathematics, Philosophy",
      "admissionProcess": "Online"
    },
    {
      "id": 10,
      "name": "California Institute of Technology",
      "image": "https://i.postimg.cc/BbLfv15Z/4.jpg",
      "rating": 4.9,
      "admissionDate": "2024-10-01",
      "researchCount": 180,
      "events": "Engineering Conference, Astronomy Workshop",
      "sports": "Baseball, Cricket",
      "researchWorks": "Engineering, Astronomy",
      "admissionProcess": "Offline"
    },
    {
      "id": 11,
      "name": "University of California, Berkeley",
      "image": "https://i.postimg.cc/DfHKMBFS/2.jpg",
      "rating": 4.7,
      "admissionDate": "2024-11-05",
      "researchCount": 230,
      "events": "Environmental Summit, Artificial Intelligence Forum",
      "sports": "Football, Swimming",
      "researchWorks": "Environmental Science, AI",
      "admissionProcess": "Online"
    },
    {
      "id": 12,
      "name": "University of Cambridge",
      "image": "https://i.postimg.cc/BbLfv15Z/4.jpg",
      "rating": 4.8,
      "admissionDate": "2024-12-01",
      "researchCount": 210,
      "events": "International Students Conference, Open Days",
      "sports": "Basketball, Hockey",
      "researchWorks": "International Studies, Open Education",
      "admissionProcess": "Offline"
    },
    {
      "id": 13,
      "name": "University of Toronto",
      "image": "https://i.postimg.cc/prwb5Xkf/3.jpg",
      "rating": 4.6,
      "admissionDate": "2024-01-12",
      "researchCount": 250,
      "events": "Science Expo, Leadership Retreat",
      "sports": "Soccer, Rowing",
      "researchWorks": "Science, Leadership",
      "admissionProcess": "Online"
    },
    {
      "id": 14,
      "name": "University of Oxford",
      "image": "https://i.postimg.cc/DfHKMBFS/2.jpg",
      "rating": 4.7,
      "admissionDate": "2024-02-01",
      "researchCount": 200,
      "events": "Humanities Festival, Business Leadership Event",
      "sports": "Tennis, Swimming",
      "researchWorks": "Humanities, Business",
      "admissionProcess": "Offline"
    },
    {
      "id": 15,
      "name": "Harvard Medical School",
      "image": "https://i.postimg.cc/DfHKMBFS/2.jpg",
      "rating": 4.9,
      "admissionDate": "2024-03-01",
      "researchCount": 300,
      "events": "Medical Research Symposium, Health Innovations Conference",
      "sports": "Soccer, Basketball",
      "researchWorks": "Medical Research, Health Innovations",
      "admissionProcess": "Online"
    },
    {
      "id": 16,
      "name": "Johns Hopkins University",
      "image": "https://i.postimg.cc/BbLfv15Z/4.jpg",
      "rating": 4.8,
      "admissionDate": "2024-04-15",
      "researchCount": 270,
      "events": "Global Health Conference, Cancer Research Forum",
      "sports": "Lacrosse, Swimming",
      "researchWorks": "Health, Cancer Research",
      "admissionProcess": "Offline"
    },
    {
      "id": 17,
      "name": "University of Michigan",
      "image": "https://i.postimg.cc/prwb5Xkf/3.jpg",
      "rating": 4.6,
      "admissionDate": "2024-05-01",
      "researchCount": 190,
      "events": "Engineering Showcase, Marketing Event",
      "sports": "Football, Basketball",
      "researchWorks": "Engineering, Marketing",
      "admissionProcess": "Online"
    },
    {
      "id": 18,
      "name": "University of California, Los Angeles",
      "image": "https://i.postimg.cc/DfHKMBFS/2.jpg",
      "rating": 4.7,
      "admissionDate": "2024-06-15",
      "researchCount": 220,
      "events": "Media Arts Conference, Business Innovation Seminar",
      "sports": "Tennis, Baseball",
      "researchWorks": "Media Arts, Business Innovation",
      "admissionProcess": "Offline"
    },
    {
      "id": 19,
      "name": "Duke University",
      "image": "https://i.postimg.cc/prwb5Xkf/3.jpg",
      "rating": 4.8,
      "admissionDate": "2024-07-01",
      "researchCount": 180,
      "events": "Healthcare Innovations, Tech Entrepreneurship",
      "sports": "Soccer, Swimming",
      "researchWorks": "Healthcare, Tech Entrepreneurship",
      "admissionProcess": "Online"
    },
    {
      "id": 20,
      "name": "University of Pennsylvania",
      "image": "https://i.postimg.cc/BbLfv15Z/4.jpg",
      "rating": 4.7,
      "admissionDate": "2024-08-05",
      "researchCount": 210,
      "events": "Financial Leadership Summit, Technology Forum",
      "sports": "Basketball, Volleyball",
      "researchWorks": "Finance, Technology",
      "admissionProcess": "Offline"
    }
  ];
  
  const Colleges = () => {
      const [colleges, setColleges] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');
      const navigate = useNavigate();
  
      // Populate the colleges state when the component mounts
      useEffect(() => {
          setColleges(staticColleges);
      }, []);
  
      // Filter colleges based on the search query
      const filteredColleges = colleges.filter(college =>
          college.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      const handleSearchChange = (event) => {
          setSearchQuery(event.target.value);
      };
  
      const handleDetails = (id) => {
          navigate(`/college-details/${id}`);
      };
  
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
                  {filteredColleges.map(college => (
                      <div
                          key={college.id}
                          className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                      >
                          <img
                              src={college.image}
                              alt={college.name}
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                              <h3 className="text-xl font-semibold">{college.name}</h3>
                              <p className="text-sm text-gray-600">
                                  Rating: {college.rating} ⭐
                              </p>
                              <p className="text-sm text-gray-600">
                                  Admission Date: {college.admissionDate}
                              </p>
                              <button
                                  onClick={() => handleDetails(college.id)}
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
  
