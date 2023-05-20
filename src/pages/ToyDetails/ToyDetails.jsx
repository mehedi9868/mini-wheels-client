import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useEffect, useRef } from "react";

const ToyDetails = () => {
    const singleCar = useLoaderData();
    const { name, picture, seller, email, category, price, rating, quantity, description } = singleCar;
    const modalCheckboxRef = useRef(null);

    useEffect(() => {
        modalCheckboxRef.current.checked = true;
    }, []);

    // rating
    const renderRatingStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={i < rating ? "text-yellow-400" : "text-gray-300"}
                />
            );
        }
        return stars;
    };

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" ref={modalCheckboxRef} />
            <div className="modal sm:modal-middle">
                <div className="modal-box p-0 rounded-md">
                    <img className="w-full h-auto border" src={picture} alt="" />
                    <div className="p-4 italic">
                        <h2 className="text-xl font-bold text-red-500 my-2" style={{ fontFamily: 'Kalam, cursive' }}>{name}</h2>


                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-600 mb-2">Category: <span className="font-semibold ">{category}</span></p>
                                <p className="text-gray-600 mb-2">Seller: <span className="font-semibold ">{seller}</span></p>
                                <p className="text-gray-600 mb-2">Email: <span className="font-semibold ">{email}</span></p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-2">Available Quantity: <span className="font-semibold ">{quantity}</span></p>
                                <p className="flex items-center gap-1 mb-2">Rating: {renderRatingStars()}</p>
                                <p className="text-gray-600 mb-2">Price: <span className="font-semibold ">{price}</span></p>
                            </div>
                        </div>
                        <p className="text-gray-800 text-justify">Description: {description}</p>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn w-full border-none rounded-none bg-blue-500 hover:bg-blue-600">close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;