import { Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const SigninForm = () => {
    const onFinish = (values) => {
        axios({
            method: "post",
            url: `${import.meta.env.VITE_API_URL}auth/signin`,
            Credential: true,
            data: values,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(({ data }) => {
            if (data.status) {
                message.success("signin successful");
                navigate("/");
            } else {
                message.error("signin failed");
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
                getValueFromEvent={({ file }) => file.originFileObj}
            >
                {/* <Input size="large" type="file" /> */}
                <Upload
                    accept="image/png, image/jpeg"
                    customRequest={({ file, onSuccess }) => {
                        setTimeout(() => {
                            onSuccess("ok");
                        }, 0);
                    }}
                    maxCount={1}
                >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
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
