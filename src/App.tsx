import 'antd/dist/antd.less';
import { Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
import ptBR from 'antd/lib/locale/pt_BR';

import './config/ReactotronConfig';

import Routes from './routes';

// import { store, persistor } from './store';

import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    // <ConfigProvider locale={ptBR}>
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
    // </ConfigProvider>
    // </PersistGate>
    // </Provider>
  );
}

export default App;
