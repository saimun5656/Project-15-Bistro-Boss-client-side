import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCard from "../../../Components/MenuCard/MenuCard";

const PopulerMenu = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/public/data/menu.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <section className="mb-16  max-w-screen-xl mx-auto w-11/12">
            <SectionTitle title={'FROM OUR MENU'} subTitle={'---Check it out---'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
             {
                items.map(item=>item.category==='popular'?<MenuCard name={item.name} image={item.image} price={item.price} recipe={item.recipe} key={item._id}></MenuCard>:'')
             }
            </div>
        </section>
    );
};

export default PopulerMenu;