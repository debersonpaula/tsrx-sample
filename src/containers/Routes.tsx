import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageHome } from './PageHome';
import { PageProducts } from './PageProducts';
import { PageContact } from './PageContact';
import { PageItems } from './PageItems';
import RouterHandler from './RouterHandler';

export class Routes extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <RouterHandler />
        <Switch>
          <Route exact={true} path="/" component={PageHome} />
          <Route exact={true} path="/products" component={PageProducts} />
          <Route exact={true} path="/item/:id" component={PageItems} />
          <Route exact={true} path="/contact" component={PageContact} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}
