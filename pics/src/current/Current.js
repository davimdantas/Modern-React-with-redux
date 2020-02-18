import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import PostList from './components/PostList';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

class Current extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="ui container">
          <PostList />
        </div>
      </Provider>
    );
  }
}

export default Current;