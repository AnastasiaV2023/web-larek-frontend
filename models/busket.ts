import { IProduct, IBusket } from '../types/index';

export interface IBusketModel {
	getItemsCount(): number;
	getItems(): IBusket;
	addItem(product: IProduct): IBusket;
	removeItem(product: IProduct): IBusket;
	clearAll(): void;
}