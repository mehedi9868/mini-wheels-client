import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddAToy = () => {

    const { user } = useContext(AuthContext)
    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = { name, picture, seller, email, category, price, rating, quantity, description };

        fetch('https://mini-wheels-server.vercel.app/all-toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfull!!',
                        text: 'Your toy has been added',
                        confirmButtonColor: '#3B82F6',
                    })
                }
            })
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Add a Toy </h2>

            <form className="w-3/4 mx-auto mb-20" onSubmit={handleAdd}>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" id="name" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Enter your toy name" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="picture" id="picture" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Enter toy picture URL" required />

                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="seller" id="seller" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" value={user && user?.displayName ? user.displayName : "Display name not found"} required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" value={user && user?.email ? user.email : "Seller email not found"} required />

                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="price" id="price" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Enter your toy price" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="rating" id="rating" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Enter your toy rating" required />

                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <select type="" name="category" id="category" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" required >
                            <option value="SportsCar">Sports Car</option>
                            <option value="RegularCar">Regular Car</option>
                            <option value="PoliceCar">Police Car</option>
                        </select>

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="quantity" id="quantity" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Enter toy available quantity" required />

                    </div>
                </div>
                <div className="relative z-0 mb-6 group">
                    <textarea rows="4" name="description" id="description" className="block placeholder-gray-400 py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Enter your toy detail description" required ></textarea>

                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default AddAToy;