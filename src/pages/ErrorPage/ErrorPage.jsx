import { Link } from "react-router-dom";
import errorImage from "../../assets/images/error-404.jpg";

const ErrorPage = () => {

    return (
        <div className="flex flex-col items-center my-20">
            <div>
                <img src={errorImage} alt="404 page not found" width={500} />
            </div>
            <Link to="/">
                <button className="text-lg text-white font-semibold bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-400">Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;