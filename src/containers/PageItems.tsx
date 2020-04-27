import * as React from 'react';
import { Connection } from 'exredux';
import { Loading } from '../components/Loading';
import { Failed } from '../components/Failed';
import { ProductItem } from '../components/ProductItem';
import { PageItemsProps } from './PageItemsProps';

@Connection(PageItemsProps)
export class PageItems extends React.Component<PageItemsProps> {
  render() {
    const { productItem } = this.props;
    if (productItem.isLoading) {
      return <Loading />;
    }
    if (productItem.isFailed) {
      return <Failed />;
    }
    if (productItem.isCompleted) {
      return <ProductItem product={productItem.response.data} />;
    }
    return null;
  }
}
