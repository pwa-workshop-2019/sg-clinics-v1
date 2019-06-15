import React from 'react';
import { SingleDatePicker } from 'react-dates';
import * as moment from 'moment';
import {ItemContainer, Label} from '../common/Typography';

export default class AppointmentDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: moment(), focused: false};
    this.dateSelected = this.dateSelected.bind(this);
    this.focusChanged = this.focusChanged.bind(this);
  }

  dateSelected(date) {
    this.setState({ ...this.state, date });
  }

  focusChanged({focused}) {
    this.setState({ ...this.state, focused })
  }

  render() {
    return (
      <ItemContainer>
        <Label>DATE</Label>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={this.dateSelected}
          focused={this.state.focused}
          onFocusChange={this.focusChanged}
          small
          numberOfMonths={1}
          readOnly={true}
          block={true}
          openDirection="up"
          id="appointmentDate"
          style={{width: '100%' }}
        />
      </ItemContainer>
    );
  }
}

