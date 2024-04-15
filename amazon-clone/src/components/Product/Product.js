import React from 'react'
import './product.css'
function Product({id, title, images, price, rating}) {
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
      <button>Add to basket</button>
      
    </div>
  )
}

export default Product
