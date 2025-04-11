import { IProduct } from '../types/index';

export interface IProductModel {
	fetchProducts(): Promise<IProduct[]>;
	getProducts(): Promise<IProduct[]>;
	getProductById(id: string): IProduct;
}