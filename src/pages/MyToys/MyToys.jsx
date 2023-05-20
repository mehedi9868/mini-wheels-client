import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/toys-by-email?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);

    return (

        <div>
            <div className="mb-20">
                <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>My Toys</h2>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Seller
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Toy Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sub-category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Available Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(toy => <MyToyRow
                                    key={toy._id}
                                    toy={toy}
                                ></MyToyRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;