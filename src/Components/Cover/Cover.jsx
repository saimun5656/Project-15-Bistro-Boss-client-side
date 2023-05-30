// eslint-disable-next-line react/prop-types
const Cover = ({title,url,from}) => {
    console.log(`bg-[url('${url}')]`);
    
    return (
        <div style={ {
            backgroundImage: `url(${ url })`,
            backgroundSize: 'cover',
        } } className={`${from? 'pt-44 pb-28':'py-32'} bg-fixed bg-cover `}>
            <div className=" text-center bg-black bg-opacity-50 md:w-7/12 mx-auto py-28 w-11/12 space-y-4 text-white px-24">
                <h1 className="text-6xl">{title}</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi error dicta placeat soluta. Iusto.</h2>
            </div>
        </div>
    );
};

export default Cover;