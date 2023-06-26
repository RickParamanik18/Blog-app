import { Button, Form, Input } from "antd";

const SigninForm = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Form
            style={{
                padding: "20px 30px",
                boxShadow: "2px 2px 5px var(--ghost)",
            }}
            onFinish={onFinish}
        >
            <div className="h2 text-center">Signin</div>
            <Form.Item
                name="name"
                rules={[{ required: true, message: "Name required!!" }]}
            >
                <Input size="large" placeholder="Enter Name" />
            </Form.Item>
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
            <Form.Item
                name="pic"
                rules={[{ required: true, message: "pic required!!" }]}
            >
                <Input size="large" type="file" />
            </Form.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="primary" htmlType="submit" size="large">
                    Login
                </Button>
            </div>
        </Form>
    );
};

export default SigninForm;
