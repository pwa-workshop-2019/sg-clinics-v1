import React from 'react';
import { Row, Col } from 'antd';
import AppointmentDetails from './booking/AppointmentDetails';
import ImageXs from './images/steth-xs.jpg';
import ImageSm from './images/steth-sm.jpg';
import ImageMd from './images/steth-md.jpg';
import ImageLg from './images/steth-lg.jpg';

export default function Home(props) {
  return (
    <div>
      <img
        alt="clinic"
        width="100%"
        src="./images/steth-xs.jpg"
        srcSet={`${ImageXs} 400w, ${ImageSm} 775w,${ImageMd} 1550w, ${ImageLg} 3100w`}
        sizes="100vw"
      />
      <Row type="flex" justify="center">
        <Col sm={{span: 12, offset: 0}} xs={{span: 20, offset: 1}}>
          <AppointmentDetails setAppDetails={props.setAppDetails}/>
        </Col>
      </Row>
    </div>
  );
}