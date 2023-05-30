/* eslint-disable react/prop-types */

const FoodCard = ({img, recipe, name}) => {
    
    return (
        <div className="card rounded-none card-compact w-96 ">
  <figure><img className="w-full" src={img} alt="food" /></figure>
  <div className="card-body text-center bg-[#F3F3F3]">
    <h2 className="text-2xl font-semibold">{name}</h2>
    <p className="text-left">{recipe}</p>
    <div className="card-actions justify-center mt-2">
      <button className="px-4 py-2 text-[#BB8506] rounded-md border-b-2 bg-[#E8E8E8] border-[#BB8506] hover:bg-black">ADD TO CART</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;