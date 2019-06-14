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
        console.log(`push notifications are not supported yet by your browser`);
        return
      }
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
    const online = navigator.onLine;
    const status = online ? 'Confirmed' : 'Pending';
    return (
      <Container>
        <KeyValue label="Appointment Status" value={status} />
        <KeyValue label="Clinic" value="SP Clinic, Sengkang" />
        <KeyValue label="Doctor" value="Dr Tan" />
        <KeyValue label="Date" value="15 June 2019" />
        <KeyValue label="Time" value="10:00 AM" />
        { online && <KeyValue label="Booking Reference" value="13467" /> }
        {
          (online)
            ?
            <h5 style={{marginTop: '1rem'}}>
              Please reach the clinic 15 minutes before your scheduled appointment time.
            </h5>
            :
            <div>
              <h5 style={{marginTop: '1rem'}}>
                You will receive notification once your appointment is booked.
              </h5>
            </div>
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

