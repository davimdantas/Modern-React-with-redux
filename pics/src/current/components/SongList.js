import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => (
            <div className="item" key={song.id}>
                <div className="right floated content">
                    <img className="ui image right floated "
                        src={song.album.cover}
                        alt={song.title}
                    />
                    <button
                        onClick={() => {
                            this.props.selectSong(song)
                        }}
                        className="ui button primary"
                    >
                        Select
                    </button>
                </div>
                <div className="content">
                    <h4>
                        {song.title}
                    </h4>
                </div>
            </div >
        ))
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
    };
}

export default connect(mapStateToProps, { selectSong })(SongList);