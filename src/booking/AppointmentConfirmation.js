import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {Button, KeyValue } from "../common/Atoms";
import {Link} from "react-router-dom";
import {urlB64ToUint8Array} from "../utils/cryptoUtil";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 600px;
  margin-top: 5rem;
  padding: 2rem;
`;

 const vapidPublicKey = 'BJzh06IXJHkZmXUwg5I02lywJMJMxREr0EhCiYOI2iBnzly0KxERUvoFWlpGP9OycWBSboB77lrGI9HzjpHJ7tE';


export default class AppointmentConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {subscribed: false};
    this.notifyClicked = this.notifyClicked.bind(this);
  }
  notifyClicked() {
    console.log('subscribing for push notification');
    navigator.serviceWorker.ready.then(registration => {
      if (!registration.pushManager) {
        alert("Push Unsupported");
        return
      }
      console.log(`vapid public key${vapidPublicKey}`);
      registration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlB64ToUint8Array(vapidPublicKey),
        })
        .then(subscription => fetch("/subscribe",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(subscription)
          }
          ))
        .then(res => this.setState({subscribed: true}))
        .catch(err => console.error("Push subscription error: ", err))
    });

  }
  render() {
    const {offline = true} = this.props;
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
            <div>
              <h5 style={{marginTop: '1rem'}}>
                It seems you don't have internet connection at the moment.
                Don't worry, we will book your appointment once you are back online
                and will send you notification of the appointment status.
              </h5>
              <Button onClick={this.notifyClicked}>Nofify Me</Button>
            </div>
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
}

