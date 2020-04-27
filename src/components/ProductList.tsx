import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import { IProductsResult } from '../service/interfaces/IProductsResult';
import { Link } from 'react-router-dom';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle({
  table: {
    width: '100%',

    '& td': {
      padding: '8px 32px'
    },
    '& tbody tr': {
      '&:hover': {
        backgroundColor: '#ddd'
      }
    }
  },
  box: {
    height: 32,
    width: 64
  }
});
// ---------------------------------------------------------------------
// --- PROPS -------------------------------------------------------
// ---------------------------------------------------------------------
interface Props {
  products: IProductsResult;
}
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class ProductList extends React.Component<Props> {
  render() {
    const { products } = this.props;
    return (
      <table className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {products.data.map((item, index) => (
            <tr key={index}>
              <td>
                {item.id}
              </td>
              <td>{item.name}</td>
              <td>
                <div className={classes.box} style={{ backgroundColor: item.color }} />
              </td>
              <td>
                <Link to={`/item/${item.id}`}>See detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
