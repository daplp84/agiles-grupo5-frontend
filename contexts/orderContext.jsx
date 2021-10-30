import React, { createContext } from 'react';
import { useState } from 'react';
import { getOrder } from '../service/order';

const OrderContext = createContext();

export default OrderContext;

export const OrderContextProvider = (props) => {

   const [order, setOrder] = useState({});
   const [products, setProducts] = useState([]);
   const [currentProduct, setCurrentProduct] = useState({});
   const setCurrentOrder = (userId, barId) => {
      const order = getOrder(userId, barId);
      setOrder(order);
      setProducts(order.products);
   };

   const changeProductQuantity = (orderProduct, newQuantity) => {
      const index = products.findIndex(item => item.id === orderProduct.id && item.state === 'Pending'); 
      products[index].quantity = newQuantity;
   }

   const addProduct = (product, newQuantity) => {
      product.state = 'Pending';
      product.quantity = newQuantity;
      products.push(product);
   }

   const setCurrentOrderProduct = (product) => {
      const index = products.findIndex(item => item.id === product.id && item.state === 'Pending'); 
      setCurrentProduct(index > -1 ? products[index] : product);
   }

   const resetCurrentOrderProduct = () => {
      setCurrentProduct({});
   }
   
   const deleteProduct = (product) => {
      const index = products.findIndex(item => item.id === product.id && item.state === 'Pending');
      products.splice(index, 1)
   } 

   return (
      <OrderContext.Provider
         value = {{
            currentOrder: order,
            setCurrentOrder: (userId, barId) => setCurrentOrder(userId, barId),
            products: products,
            changeProductQuantity: (orderProduct, newQuantity) => changeProductQuantity(orderProduct, newQuantity),
            addProduct: (product, newQuantity) => addProduct(product, newQuantity),
            currentOrderProduct: currentProduct,
            setCurrentOrderProduct: (product) => setCurrentOrderProduct(product),
            resetCurrentOrderProduct: () => resetCurrentOrderProduct(),
            deleteProduct: (product) => deleteProduct(product),
        }}>
         {props.children}
      </OrderContext.Provider>
   );
}