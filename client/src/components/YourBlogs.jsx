import styles from "../styles/yourblogs.module.css";
import { Link } from "react-router-dom";

const YourBlogs = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className="h3">Your Blogs</div>
                <div className={styles.blogs}>
                    <div className={styles.blog_link}>
                        <Link to="/">This is a log heading about a blog</Link>
                    </div>
                    <div className={styles.blog_link}>
                        <Link to="/">This is a log heading about a blog</Link>
                    </div>
                </div>
                <div className={styles.new_blog}>
                    <Link to="/new">+ New</Link>
                </div>
            </div>
        </div>
    );
};
export default YourBlogs;
