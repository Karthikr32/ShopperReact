import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

function CartItems() {
  const {all_products, cartItem, RemoveItem, getTotalCartAmt} = useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((item) => {
        if(cartItem[item.id] > 0) {
        return  <div key={item.id}>
                  <div className="cartItems-format cartItems-format-main">
                    <img src={item.image} alt="" className='cartIcon' />
                    <p>{item.name}</p>
                    <p>${item.new_price}</p>
                    <button className='cartItems-quantity'>{cartItem[item.id]}</button>
                    <p>${item.new_price * cartItem[item.id]}</p>
                    <img className='removeIcon' src={remove_icon} onClick={() => {RemoveItem(item.id)}} alt="" />
                  </div>
                  <hr />
                </div>
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Grand Total</h1>
          <div>
            <div className="cartItems-totalItems">
              <p>Subtotal</p>
              <p>${getTotalCartAmt()}</p>
            </div>
            <hr />
            <div className="cartItems-totalItems">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-totalItems">
              <h3>Total</h3>
              <h3>${getTotalCartAmt()}</h3>
            </div>
          </div>
          <button>Proceed to Pay</button>
        </div>
        <div className="cartItems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartItems-promobox">
            <input type="text" name="" id="" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
