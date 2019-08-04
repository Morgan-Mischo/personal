import React from 'react';
import './App.css';
import routes from './routes'; 

import { HashRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import { PersistGate } from "redux-persist/integration/react";

import { store } from './redux/store'; 
import { persistor } from './redux/store'; 

function App() {
  return (
    <Provider store = {store}>
      <PersistGate loading = {null} persistor = {persistor}>
        <HashRouter>{routes}</HashRouter>
      </PersistGate>
    </Provider>
    );
}

export default App;
