import { http } from 'exredux';
import { IProductsResult } from '../interfaces/IProductsResult';
import { IProductResult } from '../interfaces/IProductResult';
import config from '../../config';

const API_URL = config.API_URL;

export class ProductListRepository {
  static ENDPOINT_GET_ALL = `${API_URL}/api/unknown`;
  static ENDPOINT_GET_PRODUCT = `${API_URL}/api/unknown/{productId}`;

  static getProducts() {
    return http.get<IProductsResult>(this.ENDPOINT_GET_ALL);
  }

  static getProduct(productId: number) {
    return http.get<IProductResult>(
      this.ENDPOINT_GET_PRODUCT.replace('{productId}', productId.toString()),
    );
  }
}
