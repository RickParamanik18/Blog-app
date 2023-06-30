import styles from "../styles/navbar.module.css";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import useAuth from "../hooks/useAuth";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const Navbar = () => {
    const searchResultRef = useRef(null);
    const userSettingsRef = useRef(null);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const searchHandler = (e) => {
        const query = e.target.value;
        searchResultRef.current.style.display = query?.length
            ? "block"
            : "none";
        searchResultRef.current.style.display == "block"
            ? (userSettingsRef.current.style.display = "none")
            : null;
    };
    const userSettingsHandler = () => {
        userSettingsRef.current.style.display =
            userSettingsRef.current.style.display == "block" ? "none" : "block";
        userSettingsRef.current.style.display == "block"
            ? (searchResultRef.current.style.display = "none")
            : null;
    };
    const blurHandler = (type) => {
        type == "avatar"
            ? (userSettingsRef.current.style.display = "none")
            : (searchResultRef.current.style.display = "none");
    };
    const logOut = () => {
        console.log("logout");
        Cookies.remove("user");
        navigate("/");
    };
    useEffect(() => {
        const userCookie = Cookies.get("user");
        if (userCookie) {
            const { data } = jwt_decode(userCookie);
            setUserData(data);
        }
    }, []);
    console.log(`${import.meta.env.VITE_SERVER_URL}${userData?.pic}`)
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} onClick={() => navigate("/")} />
            </div>
            <div className={styles.sub_container}>
                <div className={styles.search}>
                    <input
                        type="search"
                        placeholder="Search.."
                        onChange={searchHandler}
                        onBlur={() => blurHandler("search")}
                    />
                    <div
                        className={styles.search_results}
                        ref={searchResultRef}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Blanditiis veritatis dolore recusandae harum
                        cupiditate quas quidem maiores soluta commodi in error,
                        aut vero ullam. Perspiciatis exercitationem impedit
                        aperiam molestias voluptatem?
                    </div>
                </div>
                {!useAuth() ? (
                    <div className="button">
                        <Button
                            type="primary"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                        &nbsp;
                        <Button
                            type="primary"
                            onClick={() => navigate("/signin")}
                        >
                            Signin
                        </Button>
                    </div>
                ) : (
                    <div className={styles.avatar}>
                        <button
                            type="button"
                            onClick={userSettingsHandler}
                            onBlur={() => blurHandler("avatar")}
                        >
                            <img src={`${import.meta.env.VITE_SERVER_URL}${userData?.pic}`} />
                        </button>
                        <div
                            className={styles.user_settings}
                            ref={userSettingsRef}
                        >
                            <ul>
                                <li onClick={logOut}>Log out</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Navbar;
