
import { useContext } from 'react';
import { PuffLoader } from "react-spinners";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center mt-5 mb-5'>
                {
                    loading && <PuffLoader color="#2563EB" />
                }
            </div>
        );
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;