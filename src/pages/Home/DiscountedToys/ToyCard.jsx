
const ToyCard = ({ toy }) => {
    const { picture, name, price, rating, newPrice } = toy;
    return (
        <div className="mx-auto md:mx-0 md:flex gap-4 items-center px-6 py-2">
            <img src={picture} alt="" className="w-full mb-4 md:w-[300px] md:h-[300px] rounded" />
            <div className="space-y-2">
                <p className="font-bold">Name: {name}</p>
                <p className="font-bold">Price: $<span className="line-through text-red-400 mr-4">{price}</span>${newPrice}</p>
                <p className="font-bold">Rating: {rating}</p>
                <button className="bg-blue-400 text-white px-6 py-3 mt-2 rounded-md hover:bg-blue-500">Get Coupon</button>
            </div>
        </div>
    );
};

export default ToyCard;