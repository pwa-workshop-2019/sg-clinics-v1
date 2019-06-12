import React from 'react';
import {Button, Dropdown, Menu, Icon} from 'antd';
import {ItemContainer, Label} from "../common/Typography";

const menu = (
  <Menu onClick={() => {
  }}>
    <Menu.Item key="1">
      <Icon type="user"/>
      Dr Lim
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user"/>
      Dr Tony
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user"/>
      Dr Ram
    </Menu.Item>
  </Menu>
);

export default function DoctorsDropdown(props) {
  return (
    <ItemContainer>
      <Label>DOCTOR</Label>
      <Dropdown overlay={menu}>
        <Button style={{width: '100%', height: '40px'}}>
          Select Your Doctor <Icon type="down"/>
        </Button>
      </Dropdown>
    </ItemContainer>
  );
}