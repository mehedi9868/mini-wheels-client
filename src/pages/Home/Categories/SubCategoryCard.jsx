import { Link } from "react-router-dom";

const SubCategoryCard = ({ car }) => {

    return (
        <>
            <div className="flex gap-4 items-center px-6 py-2">
                <img src={car.img} alt="" className="w-[200px] h-[200px]" />
                <div className="space-y-2">
                    <p className="font-bold">Name:</p>
                    <p className="font-bold">Price:</p>
                    <p className="font-bold">Rating:</p>
                    <Link to={`/details/${car.id}`}>
                        <button className="bg-blue-400 text-white px-6 py-3 mt-2 rounded-md hover:bg-blue-500">View Details</button>
                    </Link>
                </div>
            </div>
            <hr />
        </>
    );
};

export default SubCategoryCard;