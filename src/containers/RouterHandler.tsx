import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Connection } from 'exredux';
import { RouterHandlerProps } from './RouterHandlerProps';

type Props = RouteComponentProps & RouterHandlerProps;

@Connection(RouterHandlerProps)
class RouterHandler extends React.Component<Props> {
  render() {
    return <React.Fragment />;
  }

  componentDidMount() {
    const { history, router } = this.props;
    router.routeChange(history.location.pathname);

    history.listen((location) => {
      router.routeChange(history.location.pathname);
    });
  }
}

export default withRouter(RouterHandler);
