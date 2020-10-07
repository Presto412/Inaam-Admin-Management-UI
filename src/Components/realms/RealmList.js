import { Table, Tag, Space, Button, Divider } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllRealms, deleteRealm } from "../../actions/realmActions";

const { Column, ColumnGroup } = Table;
const data = [
    {
        id: "asjdajskhdkjhk1j231243",
        name: "_mock_realm_1",
        currency_symbol: "INR",
    },
    {
        id: "asjdajskhdkjhk1j231244",
        name: "_mock_realm_2",
        currency_symbol: "GBP",
    },
    {
        id: "asjdajskhdkjhk1j231245",
        name: "_mock_realm_3",
        currency_symbol: "USD",
    },
    {
        id: "asjdajskhdkjhk1j231246",
        name: "_mock_realm_4",
        currency_symbol: "INR",
    },
];

class RealmList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            realms: data,
        };
    }

    handleDeleteRealm = async (id) => {
        await this.props.deleteRealm(id);
    };

    async componentDidMount() {
        //await this.props.fetchAllRealms();
        //console.log(this.props.realms);
    }

    render() {
        return (
            <div>
                <Table dataSource={this.state.realms}>
                    {/* <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup> */}
                    <Column title="Id" dataIndex="id" key="id" />
                    <Column title="Name" dataIndex="name" key="realm_name" />
                    <Column
                        title="Currency Symbol"
                        dataIndex="currency_symbol"
                        key="currency_symbol"
                    />
                    {/* <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        /> */}
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <Button
                                    onClick={() => {
                                        this.props.history.push(
                                            `realm/${record.id}/edit`
                                        );
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => {
                                        this.handleDeleteRealm(record.id);
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
                    onClick={() => this.props.history.push(`realm/create`)}
                >
                    Create New
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (storeState, ownProps) => {
    return {
        fetching: storeState.realm.fetching,
        realms: storeState.realm.realms,
        error: storeState.realm.error,
        deleted: storeState.realm.deleted,
        deleting: storeState.realm.deleting,
    };
};

export default connect(mapStateToProps, {
    fetchAllRealms,
    deleteRealm,
})(RealmList);
//export default CrudComponent;
