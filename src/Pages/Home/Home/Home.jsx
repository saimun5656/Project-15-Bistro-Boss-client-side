import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className="max-w-screen-xl mx-auto w-11/12">
           <Slider></Slider>
           </div>
        </div>
    );
};

export default Home;