import { Link, useLocation, useNavigate } from "react-router-dom";
import 'flowbite';
import google from "../../assets/icons/google.svg";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { PuffLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Login = () => {
    const [errMsg, setErrMsg] = useState("");
    const [emailErrMsg, setEmailErrMsg] = useState("");

    const { login, googleLogin, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        setErrMsg("");
        setEmailErrMsg("");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // login 
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    form.reset();
                    toast("Login Successful !")
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/user-not-found).') {
                    setEmailErrMsg('No user found for this email')
                } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
                    setErrMsg('Wrong password')
                } else {
                    setErrMsg('Access to this account has been temporarily disabled due to many failed login attempts.')
                }
                console.log(error);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    toast("Login Successful !")
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <Helmet>
                <title>Mini Wheels | Login</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                {
                    loading && <PuffLoader color="#2563EB" />
                }

                <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-10 mr-2 mt-5" src={logo} alt="logo" />
                    <h2 className='text-red-500 text-3xl font-bold' style={{ fontFamily: 'Kalam, cursive' }}>Mini Wheeles</h2>
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                                <p className="text-red-600"><small>{emailErrMsg}</small></p>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                <p className="text-red-600"><small>{errMsg}</small></p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                            </div>
                            <input type="submit" value="Login" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                            <div className="flex items-center mb-4">
                                <div className="flex-grow h-[2px] bg-gray-200"></div>
                                <div className="px-4 text-gray-500">or</div>
                                <div className="flex-grow h-[2px] bg-gray-200"></div>
                            </div>


                            <button type="button" onClick={handleGoogleLogin} className="w-full flex gap-2 justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                <img src={google} alt="google login" className="w-5" />
                                <span>Log in with Google</span>
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;