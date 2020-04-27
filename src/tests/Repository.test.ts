import './mocks/http';
import { ProductListRepository } from '../service/repository/ProductListRepository';
import mockProductList from './mocks/productList';
import mockProductItem from './mocks/productItem';

describe('ProductListRepository', () => {
  // -------------------------------------------------------
  it('test getProducts call', (done) => {
    const request = ProductListRepository.getProducts();

    request.then((response) => {
      expect(response.data).toEqual(mockProductList);
      done();
    });
  });
  // -------------------------------------------------------
  it('test getProduct(1) call', (done) => {
    const request = ProductListRepository.getProduct(1);

    request.then((response) => {
      expect(response.data).toEqual(mockProductItem);
      done();
    });
  });
  // -------------------------------------------------------
});
