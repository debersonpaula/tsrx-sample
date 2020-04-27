import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  content: {
    padding: '32px'
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Content extends React.Component {
  render() {
    return <div className={classes.content}>{this.props.children}</div>;
  }
}
