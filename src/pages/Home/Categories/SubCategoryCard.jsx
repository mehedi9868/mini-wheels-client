import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SubCategoryCard = ({ car }) => {

    const handleViewDetails = () => {
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
    return (
        <>
            <div className="flex gap-4 items-center px-6 py-2">
                <img src={car.img} alt="" className="w-[200px] h-[200px]" />
                <div className="space-y-2">
                    <p className="font-bold">Name:</p>
                    <p className="font-bold">Price:</p>
                    <p className="font-bold">Rating:</p>
                    <Link to={`/details/${car.id}`}>
                        <button onClick={handleViewDetails} className="bg-blue-400 text-white px-6 py-3 mt-2 rounded-md hover:bg-blue-500">View Details</button>
                    </Link>
                </div>
            </div>
            <hr />
        </>
    );
};

export default SubCategoryCard;