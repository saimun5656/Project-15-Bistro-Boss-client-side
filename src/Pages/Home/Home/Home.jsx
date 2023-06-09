import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Slider from "../Slider/Slider";

const Home = () => {
    useEffect(() => {
        document.title = 'Bisstro||Home';
        console.log(document)
       
      }, []);
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