import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const SubCategoryCard = ({ car }) => {
    const { picture, name, price, rating, _id } = car;
    const { user } = useContext(AuthContext);
    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                title: '<p>Please Login!</p>',
                text: 'You have to log in first to view details',
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: 'bg-blue-400 px-6 py-3 rounded-md text-white hover:bg-blue-500',
                },
                buttonsStyling: false,
                icon: 'warning',
            });
        }
    }
    return (
        <>
            <div className="mx-auto md:mx-0 md:flex gap-4 items-center px-6 py-2">
                <img src={picture} alt="" className="w-full mb-4 md:w-[300px] md:h-[300px]" />
                <div className="space-y-2">
                    <p className="font-bold">Name: {name}</p>
                    <p className="font-bold">Price: {price}</p>
                    <p className="font-bold">Rating: {rating}</p>
                    <Link to={`/details/${_id}`}>
                        <button onClick={handleViewDetails} className="bg-blue-400 text-white px-6 py-3 mt-2 rounded-md hover:bg-blue-500">View Details</button>
                    </Link>
                </div>
            </div>
            <hr />
        </>
    );
};

export default SubCategoryCard;