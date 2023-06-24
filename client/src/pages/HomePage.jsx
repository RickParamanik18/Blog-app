import Feed from "../components/Feed"
import YourBlogs from "../components/YourBlogs"
import styles from "../styles/homepage.module.css"
const HomePage = ()=>{
    return (
        <div className={styles.container}>
            <YourBlogs/>
            <Feed/>
        </div>
    )
}
export default HomePage