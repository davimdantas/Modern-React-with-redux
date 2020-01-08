import React from "react";

class SearchBar extends React.Component {
  state = { term: "cachorro" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              value={this.state.term}
              onChange={current_value => this.setState({ term: current_value.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
