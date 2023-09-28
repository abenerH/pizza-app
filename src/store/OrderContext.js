import { createContext } from "react";

const OrderContext = createContext({
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id, category) => {},
});

export default OrderContext;
