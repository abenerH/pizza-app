import OrderContext from "./OrderContext";
import { useReducer } from "react";

const defaultOrderState = {
  date: "",
  isActive: false,
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

    if (existingItem && existingItem.category === payload.category) {
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
    const {id, category} = payload;

    const itemIndex = state.items.findIndex((item) => item.id === id && item.category === category);

    const item = state.items[itemIndex];

    const updatedTotalAmount = state.total - item.price;

    let updatedItems;

    if (item.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== id || item.category !== category);
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

  const removeItemFromOrderHandler = (id, category) => {
    orderStateDispatcher({ type: "REMOVE_ITEM_FROM_ORDER", payload: {id, category} });
  };

  // This reducer method will set a date and isActive to true, when the order has been payed
  // const setOrderActive = () => { orderStateDispatcher({ type: "SET_ORDER_TO_ACTIVE"}); }

  const orderContext = {
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
