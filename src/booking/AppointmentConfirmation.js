import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {Button, KeyValue } from "../common/Atoms";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 600px;
  margin-top: 5rem;
  padding: 2rem;
`;

export default function AppointmentConfirmation({offline = false}) {
  const status = offline ? 'Pending' : 'Confirmed';
  return (
    <Container>
      <KeyValue label="Appointment Status" value={status} />
      <KeyValue label="Clinic" value="SP Clinic, Sengkang" />
      <KeyValue label="Doctor" value="Dr Tan" />
      <KeyValue label="Date" value="15 June 2019" />
      <KeyValue label="Time" value="10:00 AM" />
      { !offline && <KeyValue label="Booking Reference" value="13467" /> }
      {
        (offline)
          ?
          <h5 style={{marginTop: '1rem'}}>
            It seems you don't have internet connection at the moment.
            Don't worry, we will book your appointment once you are back online
            and will send you notification of the appointment status.
          </h5>
          :
          <h5 style={{marginTop: '1rem'}}>
            Please reach the clinic 15 minutes before your scheduled appointment time.
          </h5>
      }
      <Row type="flex" justify="center">
        <Col md={12} xs={24} style={{marginTop: '1rem'}}>
          <Link to="/">
            <Button fluid>Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}