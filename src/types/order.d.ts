import {OrderModel, UserModel} from "../models";

interface IOrderDetailsData {
  size: string;
  exceptions: string[];
}

interface IOrder {
  order: OrderModel,
  creator: UserModel,
}
