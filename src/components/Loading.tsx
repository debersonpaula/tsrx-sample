import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  '@keyframes lds-ripple': {
    '0%': {
      top: 28,
      left: 28,
      width: 0,
      height: 0,
      opacity: 1
    },
    '100%': {
      top: '-1px',
      left: '-1px',
      width: 58,
      height: 58,
      opacity: 0
    }
  },
  ldsRipple: {
    display: 'inline-block',
    position: 'relative',
    width: 64,
    height: 64,
    '& div': {
      position: 'absolute',
      border: '4px solid #000',
      opacity: 1,
      borderRadius: '50%',
      animation: 'lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      '&:nth-child(2)': {
        animationDelay: '-0.5s'
      }
    }
  },
  loading: {
    width: 500,
    textAlign: 'center'
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Loading extends React.Component {
  render() {
    return (
      <div className={classes.loading}>
        <p>Loading</p>
        <div className={classes.ldsRipple}>
          <div />
          <div />
        </div>
      </div>
    );
  }
}
