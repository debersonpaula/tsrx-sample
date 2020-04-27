import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Wrapper extends React.Component {
  render() {
    return <div className={classes.wrapper}>{this.props.children}</div>;
  }
}
