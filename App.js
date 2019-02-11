import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Dogs from  './dogs';
import reducer from './reducers';

const App = () => {
  const middleware = applyMiddleware(thunk);
  const store = createStore(reducer, middleware);
  return (
      <Provider store={store}>
        <Dogs />
      </Provider>
    );
}

export default App;