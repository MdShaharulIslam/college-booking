import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const colleges = [
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
  ]
  ;

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    // Fetch the college details by ID from the static array
    const selectedCollege = colleges.find(college => college.id === parseInt(id));
    setCollege(selectedCollege);
  }, [id]);

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

          <h3 className="text-2xl font-semibold mb-4">Sports</h3>
          <p className="text-gray-600 mb-4">{college.sports}</p>

          <h3 className="text-2xl font-semibold mb-4">Research Works</h3>
          <p className="text-gray-600 mb-4">{college.researchWorks}</p>

          <h3 className="text-2xl font-semibold mb-4">Admission Date</h3>
          <p className="text-gray-600 mb-4">{college.admissionDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
