import * as React from 'react';
import { Provider } from 'exredux';
import { modelStore } from './service/modelStore';
import { Dashboard } from './containers/Dashboard';
import { HashRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Provider models={modelStore}>
          <Dashboard />
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
