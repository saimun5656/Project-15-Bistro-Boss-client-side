/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../../Components/Cover/Cover";
import MenuCard from "../../../Components/MenuCard/MenuCard";

const MenuCategory = ({title,url, menu}) => {
    return (
        <section className="text-center my-10">
        {title && <Cover title={title} url={url}></Cover>}
       <div className="grid md:grid-cols-2 gap-5 max-w-screen-xl mx-auto w-11/12 text-left mt-10">
        {
            menu.map(mn=><MenuCard recipe={mn.recipe} name={mn.name} price={mn.price} image={mn.image} key={mn.id} ></MenuCard>)
        }
       </div>
      <Link to={`/orders/${menu[0]?.category}`}> <button className="border-b-4 px-2 py-2 rounded-b-lg hover:bg-[#1F2937] hover:text-white hover:border-2 hover:rounded-lg hover:border-teal-400		 border-[#1F2937] mt-8">ORDER YOUR FAVOURITE FOOD</button></Link>
        </section>
    );
};

export default MenuCategory;