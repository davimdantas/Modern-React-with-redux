import "./SongDetail.css";
import React, { Component } from 'react';
import { connect } from 'react-redux';



class SongDetail extends Component {
    render() {
        if (!this.props.song) {
            return (
                <div>
                    Select a song.
                </div>
            )
        }
        const song = this.props.song;
        return (

            <div >
                <div className="ui fluid card" id="song_detail">
                    <div className="image" >
                        <img
                            src={song.artist.picture_medium}
                            alt={song.artist.name}
                        />
                        <audio className='audio_player' controls autoPlay src={song.preview}></audio>
                    </div>
                    <div className="content">
                        <a className="header">{song.artist.name}</a>
                        <div className="meta">
                            <span className="date">{song.album.title}</span>
                        </div>
                        <div className="description">
                            {song.title}
                        </div>
                    </div>
                    <div className="extra content">
                        <a>
                            <i className="clock icon"></i>
                            {Math.floor(song.duration / 60)}:{song.duration % 60 ? song.duration % 60 : '00'}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { song: state.selectedSongReducer }
}


export default connect(mapStateToProps)(SongDetail);

