import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import RealmList from "../Components/realms/RealmList";
import RealmEdit from "../Components/realms/RealmEdit";
import RealmCreate from "../Components/realms/RealmCreate";
import UserList from '../Components/users/UserList';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="realms" icon={<UserOutlined />} title="Realms">
                <Menu.Item key="1">Users</Menu.Item>
                <Menu.Item key="2">Groups</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="others" icon={<LaptopOutlined />} title="Others">
                <Menu.Item key="5">Transactions</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Realms</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <BrowserRouter>
                <Switch>
                  <Route exact path="/realm" component={RealmList} />
                  <Route exact path="/realm/create" component={RealmCreate} />
                  <Route exact path="/realm/:realmId/edit" component={RealmEdit} />

                  <Route exact path="/realm/:realmId/users" component={UserList} />
                </Switch>
              </BrowserRouter>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
