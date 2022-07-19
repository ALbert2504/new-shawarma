import { IOrder, IOrderDetailsData } from '../../types/order';

interface IOrderState {
  orders: IOrder[];
  myOrders: IOrder[];
  orderSummary: IOrderDetailsData;
}
