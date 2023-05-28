import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Featured = () => {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return (
        <div className="bg-[url('/src/assets/home/chef-service.jpg')] px-0 py-0 text-white bg-opacity-40 my-16 bg-no-repeat bg-cover bg-fixed">
            <div className="pb-32 pt-8   bg-black bg-opacity-60">
            <SectionTitle title={'FROM OUR MENU'} subTitle={'---Check it out---'}></SectionTitle>
            <div className="md:flex gap-10 space-y-8 max-w-screen-xl mx-auto w-11/12 ">
                <div>
                    <img src="/src/assets/home/featured.jpg" alt="" />
                </div>
                <div className="space-y-1">
                    <p>{formattedDate}</p>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime, necessitatibus nesciunt corrupti ut, fugit consequatur reprehenderit eveniet doloremque unde fuga illum totam molestias saepe. Quam eaque doloremque debitis quaerat.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;