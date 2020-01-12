import React, { Component } from 'react';
import { connect } from 'react-redux';


class SongDetail extends Component {
    render() {
        console.log('this.props :', this.props);
        if (!this.props.song) {
            return (
                <div>
                    Select a song.
                </div>
            )
        }
        return (
            <div>
                <h3> Details for:</h3>
                <p>
                    Title:{this.props.song.title}
                    <br />
                    Duration: {this.props.song.duration}
                </p>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log('state :', state);
    return { song: state.selectedSongReducer }
}


export default connect(mapStateToProps)(SongDetail);

