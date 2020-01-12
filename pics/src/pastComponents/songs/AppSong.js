import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import reducers from './reducers';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail'
import SearchBar from './components/SearchBar'

class AppSong extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SearchBar />
        <div className="ui container grid">
          <div className="ui row">
            <div className="column eight wide">
              <SongList />
            </div>
            <div className="column four wide">
              <SongDetail />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default AppSong;