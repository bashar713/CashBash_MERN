import { useSelector } from 'react-redux';
import {Route,Navigate,Outlet} from "react-router-dom";


const ProtectedRoute = () => {
    const userLogin = useSelector(state=>state?.users?.isLogin);
    return (
        userLogin ? <Outlet/> : <Navigate to="/login" />
    )
}

export default ProtectedRoute