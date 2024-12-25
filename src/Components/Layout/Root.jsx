import { Outlet, useLocation } from "react-router-dom";

import { useEffect } from "react";
import Navber from "../../Components/Navber";
import Footer from "../Footer";
import CollegeCard from "../CollegeCard";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "College-Booking";
    } else {
      document.title = `College-Booking ${location.pathname.replace("/", " | ")}`;
    }
  }, [location]);

  return (
    <div>
   <Navber></Navber>
      <Outlet></Outlet>
      <CollegeCard></CollegeCard>
      <Footer></Footer>
    </div>
  );
};

export default Root;
