import OrderContext from "./OrderContext";
import { useReducer } from "react";

const defaultOrderState = {
  date: new Date(),
  items: [],
  total: 0,
};

const orderReducer = (state, { type, payload }) => {
  if (type === "ADD_ITEM_TO_ORDER") {
    const updatedItemsAmount = state.total + payload.price * payload.amount;

    //Check if item already exists in state.items array
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === payload.id
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + payload.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(payload);
    }

    return {
      ...state,
      items: updatedItems,
      total: updatedItemsAmount,
    };
  }

  if (type === "REMOVE_ITEM_FROM_ORDER") {
    const id = payload;

    const itemIndex = state.items.findIndex((item) => item.id === id);

    const item = state.items[itemIndex];

    const updatedTotalAmount = state.total - item.price;

    let updatedItems;

    if (item.amount === 1) {
      updatedItems = state.items.filter((item) => item.id === id);
    } else {
      const updatedItem = { ...item, amount: item.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
      total: updatedTotalAmount,
    };
  }
};

const OrderContextProvider = ({ children }) => {
  //Order Reducer
  const [orderState, orderStateDispatcher] = useReducer(
    orderReducer,
    defaultOrderState
  );

  const addItemToOrderHandler = (item) => {
    orderStateDispatcher({ type: "ADD_ITEM_TO_ORDER", payload: item });
  };

  const removeItemFromOrderHandler = (id) => {
    orderStateDispatcher({ type: "REMOVE_ITEM_FROM_ORDER", payload: id });
  };

  const orderContext = {
    date: orderState.date,
    items: orderState.items,
    total: orderState.total,
    addItem: addItemToOrderHandler,
    removeItem: removeItemFromOrderHandler,
  };

  return (
    <OrderContext.Provider value={orderContext}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
