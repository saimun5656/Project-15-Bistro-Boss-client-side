import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCard from "../../../Components/MenuCard/MenuCard";

const Offer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/public/data/menu.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <section className="offer-section text-center my-10">
            <SectionTitle title={"TODAY'S OFFER"} subTitle={"---Don't miss---"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 max-w-screen-xl mx-auto w-11/12 text-left">
            {
                items.map(item=>item.category==='offered'?<MenuCard key={item.id} recipe={item.recipe} name={item.name} price={item.price} image={item.image}></MenuCard>:'')
            }
           
            </div>
            <button className="border-b-4 px-2 py-2 rounded-b-lg hover:bg-[#1F2937] hover:text-white hover:border-2 hover:rounded-lg hover:border-teal-400		 border-[#1F2937] mt-8">ORDER YOUR FAVOURITE FOOD</button>
        </section>
    );
};

export default Offer;