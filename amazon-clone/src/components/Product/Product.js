import React from 'react'
import './product.css'
import { useStateValue } from '../StateProvider'
function Product({id, title, images, price, rating}) {
  
  const [{basket},dispatch] = useStateValue();
  
  const addToBasket = ()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:images,
        price:price,
        rating:rating,
      },
    })

   }
  
  return (
   <div className='product'> 
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(rating)
            .fill()
            .map((_)=>{
              <p>*</p>
            })
          }
      </div>
      
      </div>
      <img src={images} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
      
    </div>
  )
}

export default Product
