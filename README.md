# 3 курс
# Васюк Анастасия Андреевна
# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```
или

yarn build
```
export interface IProduct {
	id: string; id — уникальный идентификатор товара (тип string).
	description: string;  description — описание товара (тип string).
	image: string; image — ссылка на изображение товара (тип string).
	title: string; title — название товара (тип string).
	category: string; category — категория товара (тип string).
	price: number | null; price — цена товара (тип number или null, если цена не указана).
}

export interface IBasket {
	items: string[]; items — массив идентификаторов товаров (тип string[]). 
	total: number; total — общая сумма заказа (тип number).
}

export type PaymentMethod = 'cash' | 'card'; 'cash' — оплата наличными,'card' — оплата картой.

export interface IOrder {
	payment: PaymentMethod; payment — способ оплаты (тип PaymentMethod).
	email: string; email — электронная почта пользователя (тип string).
	phone: string; phone — телефон пользователя (тип string).
	address: string; address — адрес доставки (тип string).
	items: string[]; items — массив идентификаторов товаров (тип string[]).
	total: number; total — общая сумма заказа (тип number).

}

export type OrderForm = Omit<IOrder, 'total' | 'items'>;

Этот тип создаётся с помощью утилиты Omit. Он исключает свойства total и items из интерфейса IOrder. Таким образом, OrderForm содержит только те поля, которые нужны для формы заказа:

payment — способ оплаты.

email — электронная почта.

phone — телефон.

address — адрес.


export interface IOrderResult {
	id: string; id — уникальный идентификатор заказа (тип string).
	total: number; total — общая сумма заказа (тип number).

}
