import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Reducers from './components/redux/Reducers';
import Store from './components/redux/Store';
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore } from "redux";

// const Store=createStore(Reducers,composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={Store}>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </Provider>
);

