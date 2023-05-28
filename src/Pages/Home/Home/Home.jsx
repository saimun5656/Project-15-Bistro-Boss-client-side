import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div>
           <Slider></Slider>
           <PopulerMenu></PopulerMenu>
           <Featured></Featured>
           </div>
        </div>
    );
};

export default Home;