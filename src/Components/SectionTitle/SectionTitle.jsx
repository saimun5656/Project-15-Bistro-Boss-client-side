/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SectionTitle = ({title,subTitle}) => {
    return (
        <div className="min-w-[200px] w-2/6 mx-auto text-center my-8">
            <h2 className="text-yellow-500">{subTitle}</h2>
            <h1 className="py-4 border-y-2 border-slate-300 text-3xl mt-4">{title}</h1>
        </div>
    );
};

export default SectionTitle;