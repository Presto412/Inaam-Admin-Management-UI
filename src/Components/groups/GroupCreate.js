import { Form, Input, Button, Alert } from 'antd';
import React, { Component } from "react";
import {connect} from 'react-redux';
import {createGroup} from '../../actions/groupActions';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };

class GroupCreate extends Component {

    constructor(props){
      super(props);
    
    }

    handleCreateGroup = async() => {
        console.log('created');
    }

    onFinish = async(values) => {
        console.log('Success:', values);
        await this.props.createGroup();
      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    render(){
    
        return(
            <div>
            <Form
            {...layout}
            name="create_group"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Group Name"
              name="group_name"
              rules={[{ required: true, message: 'Please input group name!' }]}
            >
              <Input />
            </Form.Item>
      
      
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
          {this.props.created && <Alert message="Success Text" type="success" />}
          </div>
        )
    }
  
}

const mapStateToProps = (storeState, ownProps) => {
    return {
      creating: storeState.group.fetching,
      created: storeState.group.fetched,
      group: storeState.group.group,
      error : storeState.group.error
    };
  };
  
  export default connect(
    mapStateToProps,
    {
      createGroup
    },
  )(GroupCreate);