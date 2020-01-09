import React from 'react';

class ImageCard extends React.Component {
    state = {img_height: 0}
    
    getSpan = (ratio) => {
        // console.log('ratio :', ratio, Math.floor(ratio / 0.5));
        // return `span ${Math.floor(ratio / 0.5) ? Math.floor(ratio / 0.5) : 1}`;
        return `span ${Math.floor(this.state.img_height / 110) ? Math.floor(this.state.img_height / 110) : 1}`;
    };

    onImgLoad = ({target: image}) => {
        this.setState({img_height: image.offsetHeight})
    }

    render() {
        // const { description, urls, height, width } = this.props.image;
        const { description, urls } = this.props.image;

        return (
            // <div style={{ gridRowEnd: this.getSpan(Math.round(height / width * 100) / 100) }}>
            <div style={{ gridRowEnd: this.getSpan() }}>
                <img
                    onLoad={this.onImgLoad}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
};

export default ImageCard;