// jshint esversion:6
import { createSelector } from 'reselect';

// input selector
const selectOrders = state => state.orders;

// output selectors

export const selectVendor = createSelector(
    [selectOrders],
    orders => orders.vendor
)
export const selectButtonText = createSelector(
    [selectOrders],
    orders => orders.buttonText
);

export const selectQuantity1 = createSelector(
    [selectOrders],
    orders => orders.qty1
);

export const selectQuantity2 = createSelector(
    [selectOrders],
    orders => orders.qty2
);

export const selectQuantity3 = createSelector(
    [selectOrders],
    orders => orders.qty3
);

export const selectQuantity4 = createSelector(
    [selectOrders],
    orders => orders.qty4
);

export const selectQuantity5 = createSelector(
    [selectOrders],
    orders => orders.qty5
);