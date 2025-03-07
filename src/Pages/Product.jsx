import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/DescriptionBox/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

function Product() {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((item) => item.id === Number(productId))
  return (
    <div>
      <Breadcrum product = {product} />
      <ProductDisplay product = {product} />
      <Description />
      <RelatedProducts />
    </div>
  )
}

export default Product
