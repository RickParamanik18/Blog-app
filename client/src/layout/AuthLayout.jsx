import styles from "../styles/authlayout.module.css";

const AuthLayout = (props) => {
    return <div className={styles.container}>{props.children}</div>;
};

export default AuthLayout;
