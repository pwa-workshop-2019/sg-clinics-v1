import React from 'react';
import {Button, Dropdown, Menu, Icon} from 'antd';
import {ItemContainer, Label} from '../common/Typography';


export default class DoctorsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.onDoctorSelected = this.onDoctorSelected.bind(this);
  }
  onDoctorSelected(selectedItem) {
    const doctorName = selectedItem.domEvent.target.innerText;
    this.props.onChange(doctorName);
  }
  render() {
    const doctorName = this.props.value ? this.props.value : 'Select Doctor';
    const menu = (
      <Menu onClick={this.onDoctorSelected}>
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
    return (
      <ItemContainer>
        <Label>CLINIC</Label>
        <Dropdown overlay={menu} trigger={["click"]} >
          <Button style={{width: '100%', height: '40px'}}>
            {doctorName} <Icon type="down"/>
          </Button>
        </Dropdown>
      </ItemContainer>
    );
  }
}
