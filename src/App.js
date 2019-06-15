import React from 'react';
import Home from "./Home";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppointmentReview from './booking/AppointmentReview';
import AppointmentConfirmation from './booking/AppointmentConfirmation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Just for demo purpose, for real world application, you should be using some state management tools like redux.
    this.state = { appointment : {}};
    this.setAppDetails = this.setAppDetails.bind(this);
  }
  setAppDetails(details) {
    this.setState({appointment:details});
  }
  render() {
    return (
      <Router>
        <Route path="/" exact={true} render={() => <Home setAppDetails={this.setAppDetails} />} />
        <Route path="/apt-review" exact={true} render={() => <AppointmentReview {...this.state} />} />
        <Route path="/apt-confirm" exact={true} render={() => <AppointmentConfirmation {...this.state} />} />
      </Router>
    );
  }
}
