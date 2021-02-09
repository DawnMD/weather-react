import React, { Component } from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

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
  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>;
    } else if (!this.state.errMsg && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else {
      return <Loader>Fetching location...</Loader>;
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
