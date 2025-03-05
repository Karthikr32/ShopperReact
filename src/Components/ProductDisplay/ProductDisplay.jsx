import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import stardull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
  const {product} = props;
  const {AddToCart} = useContext(ShopContext); 
  return (
    <div className='product-display'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="prouctDisplay-img">
          <img className='productDisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="product-old-price">${product.old_price}</div>
          <div className="product-new-price">${product.new_price}</div>
        </div>
        <div className="productDisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae odio in fugit velit perspiciatis, aliquam voluptates ab nisi obcaecati nostrum perferendis eum sequi dolores. Labore ea minima aspernatur rerum.
        </div>
        <div className="productDisplay-right-size">
          <h1>Select size</h1>
          <div className="product-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {AddToCart(product.id)}}>ADD TO CART</button>
        <p className='productDisplay-right-category'>
          <span>Category :</span>
          Women, T-Shirt, Crop Top
        </p>
        <p className='productDisplay-right-category'>
          <span>Tags :</span>
          Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
