import { Inject } from 'exredux';
import { ProductListModel } from '../service/models/ProductListModel';
export class PageProductsProps {
  @Inject
  productList: ProductListModel;
}
