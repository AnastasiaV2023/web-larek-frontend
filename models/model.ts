import { IBusketModel } from './busket';
import { IOrderModel } from './order';
import { IProductModel } from './product';

export interface IModel {
	busketModel: IBusketModel
	orderModel: IOrderModel
	productModel: IProductModel
}

export interface IModelConstructor {
	new(): IModel;
}