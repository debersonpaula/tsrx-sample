import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import { IProductResult } from '../service/interfaces/IProductResult';
import { Link } from 'react-router-dom';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  table: {
    width: '100%',

    '& td': {
      padding: '8px 32px',
    },
    '& tbody tr': {
      '&:hover': {
        backgroundColor: '#ddd',
      },
    },
  },
  box: {
    height: 32,
    width: 64,
  },
});
// ---------------------------------------------------------------------
// --- PROPS -------------------------------------------------------
// ---------------------------------------------------------------------
interface Props {
  product: IProductResult;
}
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class ProductItem extends React.Component<Props> {
  render() {
    const { product } = this.props;
    return (
      <div>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{product.data.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{product.data.name}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{product.data.year}</td>
            </tr>
            <tr>
              <td>Pan Tone Code</td>
              <td>{product.data.pantone_value}</td>
            </tr>
            <tr>
              <td>Color code</td>
              <td>{product.data.color}</td>
            </tr>
            <tr>
              <td>Color sample</td>
              <td>
                <div
                  className={classes.box}
                  style={{ backgroundColor: product.data.color }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <hr />

        <Link to="/products">Products</Link>
      </div>
    );
  }
}
