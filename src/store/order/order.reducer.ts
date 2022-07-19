import { createReducer } from '@reduxjs/toolkit';

// Types
import { IOrderState } from './types';

// Actions
import { createOrder, updateOrderSummary } from './order.actions';
import { IOrder } from "../../types/order";


const initialState: IOrderState = {
  orders: [],
  myOrders: [],
  orderSummary: {
    size: 'Մեծ',
    exceptions: [],
  },
};

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createOrder.fulfilled, (state, { payload }) => {
      state.myOrders.unshift(payload as IOrder);
    })
    .addCase(updateOrderSummary, (state, { payload }) => {
      state.orderSummary = payload;
    })
    .addDefaultCase((state) => state);
});

export default orderReducer;
