import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory } from 'history';

import { reducer as formReducer } from 'redux-form';

import postsReducer from './reducers/posts_reducer';

import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';
import PostsNew from './containers/posts_new';

// import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  // key: reducer
  posts: postsReducer,
  form: formReducer
});

// IMPORT INFORMATION FROM RAILS
const root = document.getElementById("root");
const initialState = { posts: JSON.parse(root.dataset.posts) };

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={createHistory}>
      <div className="thin-container">
        <Switch>
          <Route path="/react_blog" exact component={PostsIndex} />
          <Route path="/react_blog/posts/new" exact component={PostsNew} />
          <Route path="/react_blog/posts/:id" component={PostsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

