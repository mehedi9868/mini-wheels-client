import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
    const { _id, seller, name, category, price, quantity } = toy;
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">
                {seller}
            </td>
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4">
                {category}
            </td>
            <td className="px-6 py-4">
                ${price}
            </td>
            <td className="px-6 py-4">
                {quantity}
            </td>
            <td className="px-6 py-4">
                <Link to={`/details/${_id}`}>
                    <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-400">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default ToyRow;