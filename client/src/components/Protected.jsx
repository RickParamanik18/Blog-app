import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Protected = () => {
    return !useAuth() ? <Outlet /> : <Navigate to={"/"} />;
};

export default Protected;
