import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
// import loadGreeting from './redux/actions';
import store from './redux/configureStore';

// store.dispatch(loadGreeting());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // document.getElementById('root'),
);
