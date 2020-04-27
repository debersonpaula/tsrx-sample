import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  failed: {
    width: 500,
    textAlign: 'center'
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Failed extends React.Component {
  render() {
    return (
      <div className={classes.failed}>
        <p>Failed to request</p>
      </div>
    );
  }
}
