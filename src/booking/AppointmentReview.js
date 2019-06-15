import React from 'react';
import { Row, Col, Switch } from 'antd';
import styled from 'styled-components';
import { Label } from '../common/Typography';
import { Button} from "../common/Atoms"
import {Link} from "react-router-dom";
import {urlB64ToUint8Array} from "../utils/cryptoUtil";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 600px;
  margin-top: 5rem;
  padding: 2rem;
`;

const Header = styled.div`
 border-bottom: solid 1px #DEDEDE;
 font-size: 20px;
 line-height: 3rem;
 font-weight: 800;
 margin-bottom: 0.5rem;
`;

const vapidPublicKey = 'BJzh06IXJHkZmXUwg5I02lywJMJMxREr0EhCiYOI2iBnzly0KxERUvoFWlpGP9OycWBSboB77lrGI9HzjpHJ7tE';

export default class AppointmentReview extends React.Component {
  constructor(props) {
    super(props);
    this.state= {online: navigator.onLine, allowNotification: false, subscription: null };
    this.notifyClicked = this.notifyClicked.bind(this);
  }

  notifyClicked(checked) {
    this.setState({...this.state, allowNotification: checked});

    navigator.serviceWorker.ready.then(registration => {
      if (!registration.pushManager) {
        console.log(`push notifications are not supported yet by your browser`);
        return;
      }
      if(checked) {
        registration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlB64ToUint8Array(vapidPublicKey),
          })
          .then(subscription => {
            this.setState({...this.state, subscription: subscription});
            const jsonHeader = {'Content-Type': 'application/json'};
            fetch("/book", { method: 'POST', headers: jsonHeader,body: JSON.stringify(subscription) });
          })
          .catch(err => console.error("Push subscription error: ", err));
      }
    });
  }

  render() {
    const {online, allowNotification } = this.state;
    const canProceed = (online || allowNotification);
    return (
      <Container>
        <Header>Appointment Details</Header>
        <Row type="flex" align="center">
          <Col span={12}><Label>CLINIC</Label></Col>
          <Col span={12}>SP Clinic, Sengkang</Col>
          <Col span={12}><Label>DOCTOR</Label></Col>
          <Col span={12}>DR Tan</Col>
          <Col span={12}><Label>DATE</Label></Col>
          <Col span={12}>15-June-2019</Col>
          <Col span={12}><Label>TIME</Label></Col>
          <Col span={12}>10 AM</Col>
        </Row>
        <Row>
          {
            !online &&   <h5 style={{marginTop: '1rem'}}>
              It seems you are offline now.
              <br />Don't worry, We can book the appointment automatically when you are back online.<br />
              Do you wish to proceed and receive notification once the appointment is booked?
              <Switch checked={allowNotification} style={{marginLeft: '0.5rem'}} size="small" onChange={this.notifyClicked} />
            </h5>
          }
        </Row>
        <Row style={{marginTop: '1rem'}} gutter={24}>
          <Col sm={24} md={12} style={{marginBottom: '1rem'}}>
            <Link to="/apt-confirm">
              <Button primary fluid disabled={!canProceed}>Proceed</Button>
            </Link>
          </Col>
          <Col sm={24} md={12} style={{marginBottom: '1rem'}}>
            <Link to="/">
              <Button fluid>Cancel</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

