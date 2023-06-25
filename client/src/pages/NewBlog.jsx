import { Button, Form, Input, Select } from "antd";
import styles from "../styles/newblog.module.css";
const { TextArea } = Input;

const NewBlogPage = () => {
    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }
    const onFinish = (values)=>{
        console.log(values)
    }
    return (
        <div className={styles.container}>
            <Form className={styles.form} onFinish={onFinish}>
                <div className="h2 text-center">Write New Blog </div>
                <div className={styles.form_item}>
                    <Form.Item name="title" rules={[{ required: true, message: "Title can't be empty" }]}>
                        <Input placeholder="Enter Title" size="large" />
                    </Form.Item>
                </div>
                <div className={styles.form_item}>
                    <Form.Item name="description" rules={[{ required: true, message: "Description can't be empty" }]}>
                        <TextArea
                            placeholder="Enter Description"
                            size="large"
                            rows={10}
                        />
                    </Form.Item>
                </div>
                <div className={styles.form_item}>
                    <Form.Item  name="tags" rules={[{ required: true, message: "Add atleast one tag" }]}>
                        <Select
                            mode="tags"
                            style={{ width: "100%" }}
                            placeholder="Select Tags"
                            size="large"
                            options={options}
                        />
                    </Form.Item>
                </div>
                <div className={styles.form_item} style={{display: "flex",justifyContent: "center"}}>
                    <Button type="primary" size="large" htmlType="submit">
                        Post
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default NewBlogPage;
