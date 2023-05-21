import 'flowbite';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import demo from "../../../assets/user.png";
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast("Logout Successful !")
            })
            .catch(error => console.log(error))
    }

    return (

        <nav className="bg-[#262626] border border-gray-200 dark:bg-blue-900">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8 gap-4">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-10 mr-3" alt="Logo" />
                    <h2 className='text-red-500 text-3xl font-bold' style={{ fontFamily: 'Kalam, cursive' }}>Mini Wheeles</h2>
                </Link>
                <div className="flex  flex-row-reverse md:flex-row items-end md:items-center gap-x-4 md:order-2">
                    <div className='flex gap-4'>
                        {
                            !user
                                ?
                                <Link to="/login">
                                    <button className='bg-blue-600 px-6 py-2 rounded-md mr-6 text-white hover:bg-blue-700'>Login</button>
                                </Link>
                                :
                                <div className='flex gap-4 justify-center items-center'>
                                    <img className="w-12 h-12 rounded-full" title={user?.displayName} src={user && user.photoURL == null ? demo : user?.photoURL} alt="user photo" />
                                    <Link to="/">
                                        <button onClick={handleLogout} className='bg-blue-600 px-6 py-2 rounded-md mr-6 text-white hover:bg-blue-700'>Logout</button>
                                    </Link>
                                </div>

                        }
                    </div>

                    {/* mobile view button */}
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-5 space-y-8 md:space-y-0 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-white px-6 py-3 rounded-md bg-blue-600" : "text-white px-6 py-3 rounded-md hover:bg-blue-700"} aria-current="page">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/all-toys" className={({ isActive }) => isActive ? "text-white px-6 py-3 rounded-md bg-blue-600" : "text-white px-6 py-3 rounded-md hover:bg-blue-700"} aria-current="page">All Toys</NavLink>
                        </li>
                        {/* conditional routes */}
                        {user
                            ?
                            <>
                                <li>
                                    <NavLink to="/my-toys" className={({ isActive }) => isActive ? "text-white px-6 py-3 rounded-md bg-blue-600" : "text-white px-6 py-3 rounded-md hover:bg-blue-700"} aria-current="page">My Toys</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/add-a-toy" className={({ isActive }) => isActive ? "text-white px-6 py-3 rounded-md bg-blue-600" : "text-white px-6 py-3 rounded-md hover:bg-blue-700"} aria-current="page">Add A Toy</NavLink>
                                </li>
                            </>
                            :
                            <li>
                                <NavLink to="/register" className={({ isActive }) => isActive ? "text-white px-6 py-3 rounded-md bg-blue-600" : "text-white px-6 py-3 rounded-md hover:bg-blue-700"} aria-current="page">Register</NavLink>
                            </li>
                        }
                        <li>
                            <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-white px-6 py-3 rounded-md bg-blue-600" : "text-white px-6 py-3 rounded-md hover:bg-blue-700"} aria-current="page">Blogs</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;