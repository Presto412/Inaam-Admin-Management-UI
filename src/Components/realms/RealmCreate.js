import { Form, Input, Button, Alert } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createRealm } from "../../actions/realmActions";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

class RealmCreate extends Component {
    constructor(props) {
        super(props);
    }

    handleCreateRealm = async () => {
        console.log("created");
    };

    onFinish = async (values) => {
        console.log("Success:", values);
        await this.props.createRealm();
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        return (
            <div>
                <Form
                    {...layout}
                    name="create_realm"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Realm Name"
                        name="realm_name"
                        rules={[
                            {
                                required: true,
                                message: "Please input realm name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Currency Symbol"
                        name="currency_symbol"
                        rules={[
                            {
                                required: true,
                                message: "Please input currency symbol!",
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
        creating: storeState.realm.fetching,
        created: storeState.realm.fetched,
        realm: storeState.realm.realm,
        error: storeState.realm.error,
    };
};

export default connect(mapStateToProps, {
    createRealm,
})(RealmCreate);
//export default RealmCreate;
