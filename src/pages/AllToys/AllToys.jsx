import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { useEffect, useState } from "react";

const AllToys = () => {
    const allToys = useLoaderData(); // by default max 20 data
    const [toys, setToys] = useState(allToys);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`https://mini-wheels-server.vercel.app/searchByName/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [searchText]);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.search.value;
        setSearchText(text);
        form.reset();
    }

    return (
        <div className="mb-20 w-4/5 mx-auto">
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center mt-20" style={{ fontFamily: 'Kalam, cursive' }}>All Toys</h2>
            {/* search  */}
            <form onSubmit={handleSearch}>
                <div className="relative w-1/4 mx-auto my-10">
                    <input type="search" id="search" name="search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search your toy here" required />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>
            {/* search  */}
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
                                Details
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;