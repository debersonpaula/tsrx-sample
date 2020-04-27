import * as React from 'react';
import { Connection } from 'exredux';
import { Loading } from '../components/Loading';
import { ProductList } from '../components/ProductList';
import { Failed } from '../components/Failed';
import { PageProductsProps } from './PageProductsProps';

@Connection(PageProductsProps)
export class PageProducts extends React.Component<PageProductsProps> {
  componentDidMount() {
    const { productList } = this.props;
    productList.getProducts();
  }

  render() {
    const { productList } = this.props;
    if (productList.isLoading) {
      return <Loading />;
    }
    if (productList.isFailed) {
      return <Failed />;
    }
    if (productList.isCompleted) {
      return <ProductList products={productList.response.data} />;
    }
    return null;
  }
}
