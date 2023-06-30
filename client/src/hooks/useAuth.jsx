import Cookies from "js-cookie";
const useAuth = () => {
    return Boolean(Cookies.get("user"));
};

export default useAuth;
