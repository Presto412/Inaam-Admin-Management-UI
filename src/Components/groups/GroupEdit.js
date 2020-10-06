import { Button, Input, Divider } from 'antd';
import React, { Component } from "react";

class GroupEdit extends Component {

    constructor(props){
      super(props);
    
    }

    render(){
        return(
            <div>
                <Input placeholder="Id" />
                <Divider />
                <Input placeholder="Group Name" />
                <Divider />
                <Button type="primary">Save</Button>
            </div>
        )
    }
  
}

export default GroupEdit;