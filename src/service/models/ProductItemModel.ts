import { Action, BaseHttpModel } from 'exredux';
import { ProductListRepository } from '../repository/ProductListRepository';
import { IProductResult } from '../interfaces/IProductResult';

export class ProductItemModel extends BaseHttpModel<IProductResult> {
  @Action
  public getProduct(productId: number) {
    this.request(ProductListRepository.getProduct(productId));
  }
}
