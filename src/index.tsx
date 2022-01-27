import React from 'react';
import ReactDOM from 'react-dom';
import { CroodsProvider } from 'croods';
import App from './App';

ReactDOM.render(
  <CroodsProvider
    baseUrl="https://dog.ceo/api/breed/beagle"
    parseResponse={(response: any) => response.data.message}
    debugActions
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CroodsProvider>,
  document.getElementById('root'),
);
