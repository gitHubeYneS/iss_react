import React, {
  Component
} from 'react';
import axios from 'axios';
import './App.css';

import Position from "./components/Position.js";
import Time from "./components/Time.js";
import People from "./components/People.js";
import Map from "./components/Map.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      lng: 0,
      lat: 0,
      people: []
    };
  }

  componentWillMount() {
    axios.get(`http://api.open-notify.org/iss-now.json`)
      .then(res => {
        const {
          data
        } = res;

        this.setState({
          time: data.timestamp,
          lat: data.iss_position.latitude,
          lng: data.iss_position.longitude
        });
    });

    axios.get(`http://api.open-notify.org/astros.json`)
      .then(res => {
        const {
          data
        } = res;

        this.setState({
          people: data.people
        });
      });
  }

  componentDidMount() {
    this.interval = setInterval(() => axios.get(`http://api.open-notify.org/iss-now.json`)
      .then(res => {
        const {
          data
        } = res;

        this.setState({
          time: data.timestamp,
          lat: data.iss_position.latitude,
          lng: data.iss_position.longitude
        });
      }), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return ( 
    <div className="App">
      <Position {...this.state} />
      <Time {...this.state} />
      <Map 
        {...this.state}
        containerElement={<div style={{ height: `400px`, width: `55%`, marginTop: `10px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <People {...this.state} />
    </div>
    );
  }
}

export default App;