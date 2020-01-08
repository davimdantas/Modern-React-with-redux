import "./ImageList.css";
import React from "react";

class ImageList extends React.Component {
  getSpan = (ratio) => {
  console.log('ratio :', ratio ,  Math.floor(ratio/0.5));
    return `span ${Math.floor(ratio/0.5) ? Math.floor(ratio/0.5) : 1}`;
  };

  renderList() {
    return this.props.images.map(({ id, urls, description, width, height }) => {
      return (
          <img
            key={id}
            src={urls.small}
            style={{ gridRowEnd: this.getSpan(Math.round(height/width*100)/100) }}
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
