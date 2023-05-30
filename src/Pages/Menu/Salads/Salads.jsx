import Cover from "../../../Components/Cover/Cover";
import { useEffect, useState } from "react";
import MenuCard from "../../../Components/MenuCard/MenuCard";
const Salads = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/public/data/menu.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <section className="salads-section text-center my-10">
        <Cover url={'/src/assets/home/chef-service.jpg'} title={'SALADS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
       
        <div className="grid md:grid-cols-2 gap-5 max-w-screen-xl mx-auto w-11/12 text-left mt-10">
        {
            items.map(item=>item.category==='salad'?<MenuCard key={item.id} recipe={item.recipe} name={item.name} price={item.price} image={item.image}></MenuCard>:'')
        }
       
        </div>
        <button className="border-b-4 px-2 py-2 rounded-b-lg hover:bg-[#1F2937] hover:text-white hover:border-2 hover:rounded-lg hover:border-teal-400		 border-[#1F2937] mt-8">ORDER YOUR FAVOURITE FOOD</button>
    </section>
    );
};

export default Salads;