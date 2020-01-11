import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'
import youtube from './api/youtube'

class Current extends React.Component {

  state = { videos: [], selectedVideo: '' };

  componentDidMount() {
    this.onTermSubmit('Ramem')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container" >
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">

          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>

          <div className="five wide column ">
            <VideoList videos={this.state.videos} onVideoClick={this.onVideoSelect} />
          </div>

        </div>
      </div>
    );
  }
}

export default Current;