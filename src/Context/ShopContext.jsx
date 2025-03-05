import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const GetDefaultCart = () => {
  let cart = {};
  for(let i = 0; i < all_products.length+1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {

  const [cartItem, setCartItem] = useState(GetDefaultCart());
  

  const AddToCart = (id) => {
    setCartItem((prev) => ({
      ...prev, 
      [id]:prev[id] + 1
    }));
  }

  const RemoveItem = (id) => {
    setCartItem((prev) => ({
      ...prev, 
      [id]:prev[id] - 1
    }));
  }

  const getTotalCartAmt = () => {
    let TotalAmnt = 0;
    for(let item in cartItem) {
      if(cartItem[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item))
        TotalAmnt += itemInfo.new_price * cartItem[item];
      }
    }
    return TotalAmnt;
  }

  const getTotalCartItems = () => {
    let totalItems = 0;
    for(let item in cartItem) {
      if(cartItem[item] > 0) {
        totalItems += cartItem[item]
      }
    }
    return totalItems;
  }

  const contextValue = {all_products, cartItem, AddToCart, RemoveItem, getTotalCartAmt, getTotalCartItems};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;