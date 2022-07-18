import { createReducer } from '@reduxjs/toolkit';

// Types
import { IOrderState } from './types';

// Actions
import { createOrder } from './order.actions';
import { IOrder } from "../../types/order";


const initialState: IOrderState = {
  orders: [],
  myOrders: [],
};

const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createOrder.fulfilled, (state, { payload }) => {
      state.myOrders.unshift(payload as IOrder);
    })
    .addDefaultCase((state) => state);
});

export default orderReducer;
