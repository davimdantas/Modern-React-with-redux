import React from "react";
// import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class AppSeasons extends React.Component {
  state = { lat: null, error_message: "" };
  // 	constructor(props) {
  //     super(props);

  //     this.state = { lat: null, error_message: "" };
  //   }

  componentDidMount() {
    // console.log("componentDidMoun st :");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ error_message: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.error_message)
      return <SeasonDisplay lat={this.state.lat} />;
    else if (this.state.error_message)
      return <div>Erro: {this.state.error_message}</div>;
    else return <Spinner message="Please accept location request." />;
  }

  //   componentDidUpdate(change) {
  //     console.log("componentDidUpdate : ", change);
  //   }

  // We have to define a render method inside a class componetn
  render() {
    return (
      <div style={{ border: "10px solid red" }}>{this.renderContent()}</div>
    );
  }
}

export default AppSeasons;
// ReactDOM.render(<App />, document.querySelector("#root"));
