import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        axios({
            url: `${import.meta.env.VITE_API_URL}auth/login`,
            method: "get",
            headers: values,
            withCredentials: true,
        }).then(({ data }) => {
            if (data.status) {
                message.success("login successful");
                navigate("/");
            } else {
                message.error("login failed");
            }
        });
    };

    return (
        <Form
            style={{
                padding: "20px 30px",
                boxShadow: "2px 2px 5px var(--ghost)",
            }}
            onFinish={onFinish}
        >
            <div className="h2 text-center">Login</div>
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Email required!!" }]}
            >
                <Input size="large" type="email" placeholder="Enter Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Password required!!" }]}
            >
                <Input size="large" placeholder="Enter Password" />
            </Form.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="primary" htmlType="submit" size="large">
                    Login
                </Button>
            </div>
        </Form>
    );
};

export default LoginForm;
