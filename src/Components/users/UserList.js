import { Table, Space, Button, Divider } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllRealmUsers, deleteUser } from "../../actions/userActions";

const { Column, ColumnGroup } = Table;
const data = [
    {
        id: "asjdajskhdkjhk1j231243user1",
        realm_id: "asjdajskhdkjhk1j231243",
        name: "_mock_user_1",
    },
    {
        id: "asjdajskhdkjhk1j231243user2",
        realm_id: "asjdajskhdkjhk1j231243",
        name: "_mock_user_2",
    },
    {
        id: "asjdajskhdkjhk1j231243user3",
        realm_id: "asjdajskhdkjhk1j231243",
        name: "_mock_user_3",
    },
    {
        id: "asjdajskhdkjhk1j231243user4",
        realm_id: "asjdajskhdkjhk1j231243",
        name: "_mock_user_4",
    },
];

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: data,
        };
    }

    handleDeleteUser = async (id) => {
        await this.props.deleteUser(id);
    };

    async componentDidMount() {
        const {
            match: { params },
        } = this.props;
        console.log(params);
        //await this.props.fetchAllRealmUsers(this.props.realmId);
        //console.log(this.props.realms);
    }

    render() {
        return (
            <div>
                <Table dataSource={this.state.users}>
                    {/* <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup> */}
                    <Column title="Id" dataIndex="id" key="id" />
                    <Column
                        title="Realm Id"
                        dataIndex="realm_id"
                        key="realm_id"
                    />
                    <Column title="Name" dataIndex="name" key="user_name" />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <Button
                                    onClick={() => {
                                        this.props.history.push(
                                            `user/${record.id}/edit`
                                        );
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => {
                                        this.handleDeleteUser(record.id);
                                    }}
                                >
                                    Delete
                                </Button>
                            </Space>
                        )}
                    />
                </Table>
                <Divider />
                <Button
                    type="primary"
                    onClick={() => this.props.history.push(`user/create`)}
                >
                    Create New
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (storeState, ownProps) => {
    return {
        fetching: storeState.user.fetching,
        user: storeState.user.users,
        error: storeState.user.error,
        deleted: storeState.user.deleted,
        deleting: storeState.user.deleting,
    };
};

export default connect(mapStateToProps, {
    fetchAllRealmUsers,
    deleteUser,
})(UserList);
