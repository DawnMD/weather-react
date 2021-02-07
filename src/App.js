import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    //initialising state
    this.state = { lat: null, errMsg: null };
    //updating state based on a function
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errMsg}
      </div>
    );
  }
}

export default App;
