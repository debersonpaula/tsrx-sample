import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  pageHeader: {
    backgroundColor: '#2196f3',
    color: '#fff',
    padding: '16px'
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Header extends React.Component {
  render() {
    return <div className={classes.pageHeader}>{this.props.children}</div>;
  }
}
