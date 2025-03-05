import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropDown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext);

  return (
    <div className='shopCategory'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shop-category-indexSlot">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropDown_icon} alt="" />
        </div>
      </div>

      <div className="shop-category-products">
        {all_products.map((item, index) => {
          if(props.category === item.category) {
            return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadMore">
        Expore More
      </div>
    </div>
  )
}

export default ShopCategory
