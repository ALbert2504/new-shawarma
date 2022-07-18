import { getDatabase, ref, set, get, push, child } from 'firebase/database';
import moment from 'moment';

// Models
import { OrderModel } from '../models';

// Types
import { IOrder } from '../types/order';

// Constants
import { defaultDateFormat } from '../constants';

import Api from './Api';
import UserService from './User';

const db = getDatabase();

class Order extends Api {
  static async createOrder(order: OrderModel, userId: string) {
    try {
      const path = `orders/${moment().format(defaultDateFormat)}`;
      const orderList = ref(db, path);
      const newOrderRef = push(orderList);
      const creator = await UserService.getUser(userId);

      const newOrder = {
        ...order,
        creator,
      };

      await set(newOrderRef, newOrder);

      if (!newOrderRef.key) {
        throw new Error('No order created.');
      }

      return await this.getOrder(newOrderRef.key);
    } catch (e) {
      super.catchError(e);
    }
  }

  static async getOrder(orderId: string): Promise<IOrder | void> {
    try {
      const orderRef = ref(db);
      const snapshot = await get(child(orderRef, `orders/${orderId}`));

      return snapshot.val();
    } catch (e) {
      super.catchError(e);
    }
  }
}

export default Order;
