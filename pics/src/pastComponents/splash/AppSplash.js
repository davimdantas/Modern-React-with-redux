import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class AppSplash extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos?page=1&per_page=20", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
    console.log("response.data.results :", response.data.results);
  };

  render() {
    return (
      <div>
        <div className="ui container " style={{ marginTop: "10px" }}>
          <SearchBar onFormSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default AppSplash;
