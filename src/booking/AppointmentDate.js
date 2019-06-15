import React from 'react';
import { SingleDatePicker } from 'react-dates';
import {ItemContainer, Label} from '../common/Typography';

export default class AppointmentDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false};
    this.dateSelected = this.dateSelected.bind(this);
    this.focusChanged = this.focusChanged.bind(this);
  }

  dateSelected(date) {
    this.props.onChange(date);
  }

  focusChanged({focused}) {
    this.setState({ focused });
  }

  render() {
    return (
      <ItemContainer>
        <Label>DATE</Label>
        <SingleDatePicker
          date={this.props.value}
          onDateChange={this.dateSelected}
          focused={this.state.focused}
          onFocusChange={this.focusChanged}
          small
          numberOfMonths={1}
          readOnly={true}
          block={true}
          openDirection="up"
          id="appointmentDate"
        />
      </ItemContainer>
    );
  }
}

