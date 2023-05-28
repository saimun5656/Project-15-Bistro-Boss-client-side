/* eslint-disable react/prop-types */
const MenuCard = ({recipe,name,price,image}) => {
    return (
        <div className="flex gap-4">
            <img className="w-[110px] h-[90px] rounded-tr-[50%] rounded-b-[50%] "  src={image} alt="" />
            <div>
                <h1 className="text-2xl ">{name} <span className="text-[16px]">---------------</span></h1>
                <p>{recipe}</p>
            </div>
            <h2 className="text-yellow-500">${price}</h2>
        </div>
    );
};

export default MenuCard;