import { Button, Input, Divider } from 'antd';
import React, { Component } from "react";

class RealmEdit extends Component {

    constructor(props){
      super(props);
    
    }

    render(){
        return(
            <div>
                <Input placeholder="Id" />
                <Divider />
                <Input placeholder="Realm Name" />
                <Divider />
                <Input placeholder="Currency Symbol" />
                <Divider />
                <Button type="primary">Save</Button>
            </div>
        )
    }
  
}

export default RealmEdit;