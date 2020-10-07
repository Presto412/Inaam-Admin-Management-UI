import { Table, Space, Button, Divider } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllRealmGroups, deleteGroup } from "../../actions/groupActions";

const { Column, ColumnGroup } = Table;
const data = [
    {
        id: "asjdajskhdkjhk1j231243group1",
        realm_id: "asjdajskhdkjhk1j231243",
        name: "_mock_group_1",
    },
    {
        id: "asjdajskhdkjhk1j231243group2",
        realm_id: "asjdajskhdkjhk1j231243",
        name: "_mock_group_2",
    },
    {
        id: "asjdajskhdkjhk1j231243group3",
        realm_id: "asjdajskhdkjhk1j231243",
        name: "_mock_group_3",
    },
    {
        id: "asjdajskhdkjhk1j231243group4",
        realm_id: "asjdajskhdkjhk1j231243",
        name: "_mock_group_4",
    },
];

class GroupList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: data,
        };
    }

    handleDeleteGroup = async (id) => {
        await this.props.deleteGroup(id);
    };

    async componentDidMount() {
        //await this.props.fetchAllRealmUsers(this.props.realmId);
        //console.log(this.props.realms);
    }

    render() {
        return (
            <div>
                <Table dataSource={this.state.users}>
                    <Column title="Id" dataIndex="id" key="id" />
                    <Column
                        title="Realm Id"
                        dataIndex="realm_id"
                        key="realm_id"
                    />
                    <Column title="Name" dataIndex="name" key="group_name" />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <Button
                                    onClick={() => {
                                        this.props.history.push(
                                            `group/${record.id}/edit`
                                        );
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => {
                                        this.handleDeleteGroup(record.id);
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
                    onClick={() => this.props.history.push(`group/create`)}
                >
                    Create New
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (storeState, ownProps) => {
    return {
        fetching: storeState.group.fetching,
        group: storeState.group.groups,
        error: storeState.group.error,
        deleted: storeState.group.deleted,
        deleting: storeState.group.deleting,
    };
};

export default connect(mapStateToProps, {
    fetchAllRealmGroups,
    deleteGroup,
})(GroupList);
