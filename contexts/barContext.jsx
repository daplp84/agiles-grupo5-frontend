import React, { createContext } from 'react';
import { useState } from 'react';
import { getBar } from '../service/bar';

const BarContext = createContext();

export default BarContext;

export const BarContextProvider = (props) => {

   const [bar, setBar] = useState({});
   const [products, setProducts] = useState([]);
   
   const setCurrentBar = (barId) => {
      const bar = getBar(barId);
      setBar(bar);
      setProducts(bar.products);
   };

   const setFilteredProducts = (category) => {
      const filtered = bar.products.filter(item => {
         return item.category === category;
      });
      setProducts(filtered);
   }

   const removeFilter = () => {
      setProducts(bar.products);
   }

   const searchProduct = (searchProduct) => {
      const filtered = bar.products.filter(item => {
        return item.name.toLowerCase().includes(searchProduct.toLowerCase());
      });
      setProducts(filtered);
   }
   
   return (
      <BarContext.Provider
         value = {{
            currentBar: bar,
            setCurrentBar: (barId) => setCurrentBar(barId),
            products: products,
            setProductsFilter: (categoryId) => setFilteredProducts(categoryId),
            cleanFilter: () => removeFilter(),
            searchProduct: (value) => searchProduct(value),
         }}
      >
         {props.children}
      </BarContext.Provider>
   );
}