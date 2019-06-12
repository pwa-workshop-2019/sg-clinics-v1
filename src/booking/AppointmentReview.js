import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { Label } from '../common/Typography';
import { Button} from "../common/Atoms"
import {Link} from "react-router-dom";

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

export default function AppointmentReview(props) {
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
      <Row style={{marginTop: '1rem'}} gutter={24}>
        <Col sm={24} md={12} style={{marginBottom: '1rem'}}>
          <Link to="/apt-confirm">
          <Button primary fluid>Proceed</Button>
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