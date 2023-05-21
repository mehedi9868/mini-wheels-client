import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');

    const { user } = useContext(AuthContext);
    //get by email
    const url = `https://mini-wheels-server.vercel.app/toys-by-email?email=${user?.email}&sort=${sortDirection}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);

    // delete one
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3B82F6',
            cancelButtonColor: '#EF4444',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://mini-wheels-server.vercel.app/all-toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'The toy has been deleted.',
                                icon: 'success',
                                confirmButtonColor: '#3B82F6',
                            });
                            // updated ui
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                        }
                    })
            }
            else {
                Swal.fire({
                    title: 'Cancelled',
                    text: 'The delete operation was cancelled.',
                    icon: 'error',
                    confirmButtonColor: '#3B82F6'
                });
            }
        });
    }
    return (

        <div className="w-4/5 mx-auto">
            <Helmet>
                <title>Mini Wheels | My Toys</title>
            </Helmet>
            <div className="mb-20">
                <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>My Toys</h2>
                {/* sorting button */}
                <div className="flex justify-end items-center gap-4">
                    <p className="font-bold">Sort: </p>
                    <div className="mb-4 text-right">
                        <button onClick={() => setSortDirection('dec')} className="bg-blue-500 text-white font-semibold px-6 py-3 rounded mr-4 hover:bg-blue-400">
                            Descending
                        </button>
                        <button onClick={() => setSortDirection('asc')} className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-400">
                            Ascending
                        </button>
                    </div>
                </div>
                {/* sorting button */}
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
                                    handleDelete={handleDelete}
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