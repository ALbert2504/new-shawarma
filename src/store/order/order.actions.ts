import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

// Action Types
import { CREATE_ORDER } from './order.actionTypes';

// Types
import { IOrder } from '../../types/order';

// Services
import { Order, Auth } from '../../services';

// Models
import { OrderModel } from '../../models';

export const createOrder = createAsyncThunk<IOrder | void, OrderModel>(
  CREATE_ORDER,
  async (data: OrderModel, { rejectWithValue }) => {
    try {
      if (!Auth.userId) {
        throw new Error('No logged in user');
      }

      return await Order.createOrder(data, Auth.userId);
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
      rejectWithValue(e.message);
    }
  },
);
