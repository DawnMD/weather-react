import React, { Component } from "react";

class App extends Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
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
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>;
    } else if (!this.state.errMsg && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default App;
