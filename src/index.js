import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import 'modern-normalize/modern-normalize.css';
import App from './App';
import store from './redux/store';
import './index.css';


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  // </React.StrictMode>
  document.getElementById('root'),
);

