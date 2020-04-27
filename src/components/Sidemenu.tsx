import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import { Link } from 'react-router-dom';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  sidemenu: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '32px',
    margin: 0,
    '& li a': {
      textDecoration: 'none',
      color: '#fff',
      '&:hover': {
        textDecoration: 'underline',
      }
    }
  }
});
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Sidemenu extends React.Component {
  render() {
    return (
      <ul className={classes.sidemenu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    );
  }
}
