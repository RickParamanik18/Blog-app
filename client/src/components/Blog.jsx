import { Link } from "react-router-dom";
import pic from "../assets/avatar.png";
import styles from "../styles/blog.module.css";
const Blog = () => {
    return (
        <div className={styles.blog}>
            <div className="h1 text-center">This is a log heading about a blog</div>
            <div className={styles.author}>
                <div className="pic">
                    <img src={pic} alt="" />
                </div>
                <span> Rick paramanik</span>
            </div>
            <div className={styles.content}>
                sapiente! Harum ullam id, non incidunt a voluptatibus
                porro enim iusto animi voluptatem maxime doloremque. Similique
                quos sed quam neque corporis incidunt harum aperiam provident
                error iuo. Aliquid animi blanditiis aperiam! Consectetur
                reprehendniti accusantium, dicta aliquam beatae quasi inventore
                adipisci obcaecati provident. Sint, quasi ullam? Ratione illum
                impedit libero.
            </div>
            <div className={styles.more}>
                <Link to={'/5'}>Read More..</Link>
            </div>
        </div>
    );
};
export default Blog;
