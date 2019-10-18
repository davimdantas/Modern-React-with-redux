import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log("event.target.value :", event.target.value);
  // }
  state = { term: "cachorro" };

  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log("Term:  :", this.state.term);
  // }
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFSubmit(this.state.term);
    // console.log("Term:  :", this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* <form onSubmit={this.onFormSubmit.bind(this)} className="ui form"> */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/* <p> {this.state.term} </p> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
