3 курс
Васюк Анастасия Андреевна 

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

```
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
	items: string[]; items — массив идентификаторов товаров (тип string[]). Это упрощённый подход, где вместо хранения целых объектов товаров хранятся только их id.
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

Проект построен на паттерне MVP (Model-View-Presenter), который представляет собой модификацию классического MVC, специально адаптированную для построения пользовательских интерфейсов.

Ключевые компоненты MVP:

Модель (Model) - отвечает за хранение и обработку данных

Представление (View) - реализует визуализацию данных и обработку пользовательских действий

Посредник (Presenter) - координирует взаимодействие между Model и View

Взаимодействие компонентов
Инициализация приложения происходит в точке входа, где создаются экземпляры View и Model, которые затем передаются в Presenter. Presenter выполняет связывание компонентов, например:

В методе presenter.init():

Получает данные о товарах через Product.getProducts

Инициирует создание карточек товаров через view.createProductCard

Основные бизнес-сущности
В системе определены следующие ключевые типы данных (расположены в src/types/index.ts):

IProduct - описание товара

IBusket - коллекция товаров

IOrder - информация о заказе

Слой представления (View)
Компоненты пользовательского интерфейса включают:

Каталог товаров с карточками продукции

Серию модальных окон:

Детализация товара

Просмотр корзины

Выбор способа оплаты

Ввод контактных данных

Подтверждение успешного оформления заказа

Слой данных (Models)
1. Модель корзины (BusketModel)

Управление содержимым корзины:

Получение количества товаров (getItemsCount)

Добавление/удаление позиций (addItem, removeItem)

Полная очистка (clearAll)

2. Модель заказов (OrderModel)

Обработка данных заказа:

Валидация контактных данных (isCorrectContacts)

Установка способа доставки (setDeliveryData)

Оформление заказа (makeOrder)

3. Модель товаров (ProductModel)

Работа с каталогом продукции:

Загрузка данных (fetchProducts)

Поиск по идентификатору (getProductById)

Слой-посредник (Presenter)
Обеспечивает координацию между View и Models, обрабатывая бизнес-логику приложения.

Работа с API
Для унифицированного взаимодействия с сервером реализован класс Api (расположен в src/components/base/api.ts), предоставляющий:

Базовый конструктор с настройкой endpoint и заголовков

Методы для выполнения запросов (get, post)

Внутренний механизм обработки ответов (handleResponse)