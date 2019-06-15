import React from 'react';
import Media from 'react-media';
import styled from 'styled-components';
import ClinicsDropdown from './ClinicsDropdown';
import DoctorsDropdown from "./DoctorsDropdown";
import AppointmentDate from "./AppointmentDate";
import ActionPanel from "./ActionPanel";

const DesktopContainer = styled.div`
  position: fixed;
  top: 120px;
  padding: 3rem;
  padding-top: 0;
  background-color: #fff;
  width: 50%;
  max-width: 400px;
`;

export default class AppointmentDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { doctor: '', clinic: '', date: null};
    this.setClinic = this.setClinic.bind(this);
    this.setDoctor = this.setDoctor.bind(this);
    this.setDate = this.setDate.bind(this);
    this.updateAppointmentDetails = this.updateAppointmentDetails.bind(this);
  }

  setClinic(clinic) {
    this.setState({...this.state, clinic});
  }
  setDoctor(doctor) {
    this.setState({...this.state, doctor});
  }
  setDate(date) {
    this.setState({...this.state, date});
  }
  updateAppointmentDetails() {
    this.props.setAppDetails(this.state);
  }
  canProceed() {
    const {clinic, doctor, date} = this.state;
    return clinic && doctor && date;
  }

  renderChildren() {
    return (
      <React.Fragment>
        <ClinicsDropdown value={this.state.clinic} onChange={this.setClinic}/>
        <DoctorsDropdown value={this.state.doctor} onChange={this.setDoctor}/>
        <AppointmentDate value={this.state.date} onChange={this.setDate}/>
        <ActionPanel canProceed={this.canProceed()} onProceed={this.updateAppointmentDetails} />
      </React.Fragment>
    );
  }

  render() {
    return(
      <Media query={{ minWidth: 775 }}>
        {matches =>
          matches ? (
            <DesktopContainer>
              {this.renderChildren()}
            </DesktopContainer>
          ) : (
            <div>
              {this.renderChildren()}
            </div>
          )
        }
      </Media>
    );
  }
}
