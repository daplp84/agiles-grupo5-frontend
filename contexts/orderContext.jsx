import React, { createContext } from 'react';
import { useState } from 'react';
import { getOrder, createOrder } from '../service/order';

const OrderContext = createContext();

export default OrderContext;

export const OrderContextProvider = (props) => {

   const [order, setOrder] = useState({state:'uninitialized', products:[]});
   const [products, setProducts] = useState([]);
   const [currentProduct, setCurrentProduct] = useState({});
   const setCurrentOrder = (userId, barId) => {
      if(order.state === undefined || order.state === 'uninitialized'){
         setOrder(createOrder(userId, barId));
      }
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
      checkOrderState();
      setCurrentProduct({});
   }

   const checkOrderState = () => {
      if(products.length > 0)
      {
         order.state = 'pending';
      }else{
         order.state = 'uninitialized';
      }
   }
   
   const deleteProduct = (product) => {
      const index = products.findIndex(item => item.id === product.id && item.state === 'Pending');
      products.splice(index, 1)
      checkOrderState();
   } 

   const setStateRequest = () => {
      products.map(item => item.state = 'Requested');
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
            setStateRequest: (product) => setStateRequest(product),
        }}>
         {props.children}
      </OrderContext.Provider>
   );
}