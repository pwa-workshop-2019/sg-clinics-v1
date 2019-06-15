import React from 'react';
import {Button, Dropdown, Menu, Icon} from 'antd';
import {ItemContainer, Label} from '../common/Typography';


export default class ClinicsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.onClinicSelected = this.onClinicSelected.bind(this);
  }
  onClinicSelected(selectedItem) {
    const clinicName = selectedItem.domEvent.target.innerText;
    this.props.onChange(clinicName);
  }
  render() {
    const clinicName = this.props.value ? this.props.value : 'Select Clinic';
    const menu = (
      <Menu onClick={this.onClinicSelected}>
        <Menu.Item key="1">
          <Icon type="user"/>
          Dermatology Practice, Novena
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
    return (
      <ItemContainer>
        <Label>CLINIC</Label>
        <Dropdown overlay={menu} trigger={["click"]} >
          <Button style={{width: '100%', height: '40px'}}>
            {clinicName} <Icon type="down"/>
          </Button>
        </Dropdown>
      </ItemContainer>
    );
  }
}
