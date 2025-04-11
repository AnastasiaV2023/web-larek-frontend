﻿import { IView } from '../view/view';
import { IModel } from '../models/model';

export interface IPresenter {
	init(): void;
}

export interface IPresenterConstructor {
	new(view: IView, model: IModel): IPresenter;
}