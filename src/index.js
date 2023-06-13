import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from 'components/App';
import './index.css';

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>
  </React.StrictMode>
);
