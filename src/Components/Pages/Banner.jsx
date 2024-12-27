import { Link } from "react-router-dom";
import img1 from "../../assets/clg1.jpg"; // Only one image for display

const Banner = () => {
  return (
    <div className="relative w-full h-[600px]">
      <img src={img1} className="w-full h-full object-cover rounded-xl" alt="College" />
      <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
        <div className="text-white pl-4">
          <h1 className="text-6xl font-bold">Find Your Perfect College</h1>
          <p className="text-lg">Discover top colleges, compare programs, and book your admission online.</p>
          <div className="flex mt-4 space-x-6">
  
  <Link to="/colleges">
  <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
    Browse Colleges
  </button>
  </Link>
 
 
</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
