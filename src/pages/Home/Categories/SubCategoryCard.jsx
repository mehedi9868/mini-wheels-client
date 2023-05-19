import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const SubCategoryCard = ({ car }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        if (!user) {
            navigate("/login");
        } else {
            navigate(`/details/${id}`)
        }
    }

    return (
        <>
            <div className="flex gap-4 items-center px-6 py-2">
                <img src={car.img} alt="" className="w-[200px] h-[200px]" />
                <div className="space-y-2">
                    <p className="font-bold">Name:</p>
                    <p className="font-bold">Price:</p>
                    <p className="font-bold">Rating:</p>
                    <button onClick={() => handleViewDetails(car.id)} className="bg-blue-400 text-white px-6 py-3 mt-2 rounded-md hover:bg-blue-500">View Details</button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default SubCategoryCard;