import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    // searchTerm: ""
    images: []
  };

  onSearchSubmit = async term => {
    // this.setState({ searchTerm: term });
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
    console.log("response.data.results :", response.data.results);
    // .then(response => console.log("response :", response.data.results));
  };

  render() {
    return (
      <div>
        <div className="ui container " style={{ marginTop: "10px" }}>
          {/* <p> App : {this.state.searchTerm}</p> */}
          <SearchBar onFSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
