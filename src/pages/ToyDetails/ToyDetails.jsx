import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const singleCar = useLoaderData()
    return (
        <div>
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Single Car Details</h2>
            <p>Name: {singleCar.name}</p>
        </div>
    );
};

export default ToyDetails;