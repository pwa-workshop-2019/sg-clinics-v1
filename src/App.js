import React from 'react';
import Home from "./Home";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppointmentReview from './booking/AppointmentReview';
import AppointmentConfirmation from './booking/AppointmentConfirmation';

function App() {
  return (
    <Router>
      <Route path="/" exact={true} component={Home} />
      <Route path="/apt-review" exact={true} component={AppointmentReview} />
      <Route path="/apt-confirm" exact={true} component={AppointmentConfirmation} />
    </Router>
  );
}

export default App;
