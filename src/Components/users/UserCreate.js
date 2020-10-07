import { Form, Input, Button, Alert } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/userActions";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

class UserCreate extends Component {
    constructor(props) {
        super(props);
    }

    handleCreateUser = async () => {
        console.log("created");
    };

    onFinish = async (values) => {
        console.log("Success:", values);
        await this.props.createUser();
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        return (
            <div>
                <Form
                    {...layout}
                    name="create_user"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="User Name"
                        name="user_name"
                        rules={[
                            {
                                required: true,
                                message: "Please input user name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
                {this.props.created && (
                    <Alert message="Success Text" type="success" />
                )}
            </div>
        );
    }
}

const mapStateToProps = (storeState, ownProps) => {
    return {
        creating: storeState.user.fetching,
        created: storeState.user.fetched,
        user: storeState.user.user,
        error: storeState.user.error,
    };
};

export default connect(mapStateToProps, {
    createUser,
})(UserCreate);
