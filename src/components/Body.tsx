import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  flexbody: {
    display: 'flex',
    flexGrow: 1
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Body extends React.Component {
  render() {
    return <div className={classes.flexbody}>{this.props.children}</div>;
  }
}
