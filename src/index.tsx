import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from 'reducer/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CookiesProvider>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistStore(store)}>
              <App />
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </CookiesProvider>
    </HelmetProvider>
  </React.StrictMode>,
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
