import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    searchTerm: ""
  };
  api_key = "99023fc8900e7478d1c3929686384d48cd9370df95616daf325b2b945e611bfc";
  api = "https://api.unsplash.com/";
  onSearchSubmit = async term => {
    // this.setState({ searchTerm: term });
    const response = await axios.get(this.api + "search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID " + this.api_key
      }
    });
    console.log("response :", response.data.results);
    // .then(response => console.log("response :", response.data.results));
  };

  render() {
    return (
      <div>
        <div className="ui container " style={{ marginTop: "10px" }}>
          {/* <p> App : {this.state.searchTerm}</p> */}
          <SearchBar onFSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
