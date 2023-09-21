import { createContext } from "react";

const OrderContext = createContext({
  date: new Date(),
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default OrderContext;
