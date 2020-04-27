import { Inject } from 'exredux';
import { ProductItemModel } from '../service/models/ProductItemModel';
export class PageItemsProps {
  @Inject
  productItem: ProductItemModel;
}
