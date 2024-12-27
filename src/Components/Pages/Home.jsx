import CollegeCard from "../CollegeCard";
import Banner from "./Banner";

import Graduation from "./Graduation";
import Research from "./Research";
import RatingCard from "./RatingCards/RatingCards";



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

<RatingCard></RatingCard>
        </div>
    );
};

export default Home;