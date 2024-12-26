import CollegeCard from "../CollegeCard";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Graduation from "./Graduation";
import Research from "./Research";



const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div>
                <CollegeCard></CollegeCard>

            </div>
            <div className="mx-0 ">
  <Graduation />
</div>
<Research></Research>
<Feedback></Feedback>
        </div>
    );
};

export default Home;