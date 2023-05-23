import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    console.log(user)
    let location = useLocation();
    if (loading) {

        return <progress className="progress w-56"></progress>

    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRouter;