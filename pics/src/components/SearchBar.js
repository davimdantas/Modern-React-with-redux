import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log("event.target.value :", event.target.value);
  // }
  state = { term: "dd" };
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <p> {this.state.term} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
