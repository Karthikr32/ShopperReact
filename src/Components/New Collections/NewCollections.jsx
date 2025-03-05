import React from 'react'
import './NewCollection.css';
import new_collections from '../Assets/new_collections';
import Item from '../Items/Item';

function NewCollections() {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {new_collections.map((item, index) => {
          return <Item key={index} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
