import React, { Component } from 'react';
import EventDashboard from '../../Features/event/EventDashboard/EventDashboard'
import NavBar from '../../Features/NavBar/NavBar'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;


