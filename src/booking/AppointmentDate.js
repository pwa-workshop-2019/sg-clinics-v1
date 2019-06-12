import React from 'react';
import {DatePicker} from 'antd';
import {ItemContainer, Label} from '../common/Typography';

export default function AppointmentDate(props) {
  return (
    <ItemContainer>
      <Label>DATE</Label>
      <DatePicker size="large" style={{width: '100%'}}/>
    </ItemContainer>
  );
}