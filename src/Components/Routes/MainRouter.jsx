import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Colleges from "../Pages/Colleges";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";
import Profile from "../Pages/Profile";
import CollegeDetails from "../CollegeDetails";
import CollegeCard from "../CollegeCard";
import SingIn from "../SignIn/SingIn";
import SignUp from "../SignUp/SignUp";


const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/my-college",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/college-details/:id",
        element: <CollegeDetails></CollegeDetails>,
      },
      {
        path: "/collegeCard",
        element: <CollegeCard></CollegeCard>,
      },
      {
        path: "signIn",
        element: <SingIn></SingIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
  
    ],
  },
]);

export default MainRouter;
