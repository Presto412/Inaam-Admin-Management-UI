import { List } from 'antd';
import React, { Component } from "react";
import { Link } from 'react-router-dom';

const data = [
    {
        "label" : "Users",
        "link" : "/users"
    },
    {
        "label" : "Groups",
        "link" : "/groups"
    },
    {
        "label" : "Coins",
        "link" : "/coins"
    }
];

class RealmHome extends Component {


  makeCompleteLink = (childPath) => {
    const currentPath = this.props.location.pathname;
    const parentPath = currentPath.substr(0,currentPath.lastIndexOf('/'));
    const newPath = parentPath + childPath;
    return newPath;
  }
  
  render() {
    return (
      <div>
       <List
        header={<div>Realm Home</div>}
        bordered
        dataSource={data}
        renderItem={item => (
            <List.Item>
                <h3>
                    <Link to={`${this.makeCompleteLink(item.link)}`}>
                        {item.label}
                    </Link>
                </h3>
            </List.Item>
      )}
    />   
      </div>
    );
  }
}

export default RealmHome;
