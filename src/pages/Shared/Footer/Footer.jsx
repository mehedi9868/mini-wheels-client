import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer className="bg-[#262626] shadow p-4">
            <div className="w-full mx-auto p-4 md:py-8">
                <div className="grid md:grid-cols-4 items-center justify-center">
                    <div>
                        <Link to="/" className="flex items-center mb-4 sm:mb-0">
                            <img src={logo} className="h-10 mr-3" alt="Logo" />
                            <h2 className='text-red-500 text-3xl font-bold' style={{ fontFamily: 'Kalam, cursive' }}>Mini Wheeles</h2>
                        </Link>
                    </div>
                    <div className="mb-3">
                        <p className="text-gray-400">Address:</p>
                        <p className="text-gray-400">
                            Haemayetpur Pabna, Bangladesh,
                        </p>
                        <p className="text-gray-400">
                            Postal Code: 6602
                        </p>
                    </div>

                    <div className="text-gray-400 mb-3">
                        <p className="mt-2">Contact Information:</p>
                        <p className="text-gray-400">Phone: +880-1797-XXXXXX</p>
                        <p className="text-gray-400">Email: info@gmail.com</p>
                    </div>
                    <div >
                        <p className="text-gray-400 mb-1">Follow Us:</p>
                        <div className="flex space-x-4">
                            <Link to="https://www.facebook.com/" className="text-gray-400 hover:text-gray-300">
                                <FaFacebook size={24} />
                            </Link>
                            <Link to="https://twitter.com/" className="text-gray-400 hover:text-gray-300">
                                <FaTwitter size={24} />
                            </Link>
                            <Link to="https://www.instagram.com/" className="text-gray-400 hover:text-gray-300">
                                <FaInstagram size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-400 text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Mini Wheels</Link>. All Rights Reserved.</span>
            </div>
        </footer>


    );
};

export default Footer;