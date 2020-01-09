import "./ImageList.css";
import ImageCard from "./ImageCard"
import React from "react";

class ImageList extends React.Component {
  
  renderList() {
    return this.props.images.map((image) => {
    // console.log('image :', image);
      return (
        <ImageCard key={image.id} image={image} />
          // <img
          //   key={id}
          //   alt={description}
          //   src={urls.regular}
          //   style={{ gridRowEnd: this.getSpan(Math.round(height/width*100)/100) }}
          // />
      );
    });
  }
  render() {
    return <div className="image-list">{this.renderList()}</div>;
  }
}

export default ImageList;
