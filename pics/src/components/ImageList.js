import "./ImageList.css";
import React from "react";

class ImageList extends React.Component {
  getSpan = () => {
    return "span 2";
  };
  renderList() {
    return this.props.images.map(({ id, urls, description }) => {
      return (
        <img
          key={id}
          src={urls.small}
          style={{ gridRowEnd: this.getSpan }}
          alt={description}
        />
      );
    });
  }
  render() {
    return <div className="image-list">{this.renderList()}</div>;
  }
}

export default ImageList;
