import React from 'react';
import {Button, Dropdown, Menu, Icon} from 'antd';
import {ItemContainer, Label} from '../common/Typography';


const menu = (
  <Menu onClick={() => {
  }}>
    <Menu.Item key="1">
      <Icon type="user"/>
      Dermatology Practice, Novina
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user"/>
      My Family Practice, Sengkang
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user"/>
      Child Speciality Clinic, Tampines
    </Menu.Item>
  </Menu>
);

export default function ClinicsDropdown(props) {
  return (
    <ItemContainer>
      <Label>CLINIC</Label>
      <Dropdown overlay={menu}>
        <Button style={{width: '100%', height: '40px'}}>
          Select Clinic <Icon type="down"/>
        </Button>
      </Dropdown>
    </ItemContainer>
  );
}