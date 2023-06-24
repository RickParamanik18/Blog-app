import styles from "../styles/navbar.module.css";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const searchResultRef = useRef(null);
    const userSettingsRef = useRef(null);
    const navigate = useNavigate();

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
                <div className={styles.avatar}>
                    <button
                        type="button"
                        onClick={userSettingsHandler}
                        onBlur={() => blurHandler("avatar")}
                    >
                        <img src={avatar} />
                    </button>
                    <div className={styles.user_settings} ref={userSettingsRef}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        di consequatur.
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
