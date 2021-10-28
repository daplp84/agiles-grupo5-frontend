import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import { getOrder } from '../service/order';

const OrderContext = createContext();

export default OrderContext;

export const OrderContextProvider = (props) => {

   const [order, setOrder] = useState({});
   const [products, setProducts] = useState([]);
   

   const setCurrentOrder = (userId, barId) => {
      const order = getOrder(userId, barId);
      setOrder(order);
      setProducts(order.products);
   };

   const changeProductQuantity = (orderProduct, newQuantity) => {
      const index = products.findIndex(item => item.id === orderProduct.id && item.state === 'Pending'); 
      products[index].quantity = newQuantity;
   }
   
   
   return (
      <OrderContext.Provider
         value = {{
            currentOrder: order,
            setCurrentOrder: (userId, barId) => setCurrentOrder(userId, barId),
            products: products,
            changeProductQuantity: (orderProduct, newQuantity) => changeProductQuantity(orderProduct, newQuantity),
            addProduct: (product, newQuantity) => addProduct(product, newQuantity),
        }}>
         {props.children}
      </OrderContext.Provider>
   );
}