import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format"
import "./Checkout.css";
import Subtotal from '../Subtotal/Subtotal';
function Checkout() {
    const [{basket}] = useStateValue()
  return (
    <div className='checkout'>
        <div className="checkout_left">
        <img className="checkout_ad" src="https://cedcommerce.com/blog/wp-content/uploads/2023/02/benefits-of-running-ads-on-amazon-blog-banner.jpg" />

        {basket?.length ===0 ? (
            <div>
                <h2>Your shopping basket is empty</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quae maxime unde nam dignissimos expedita soluta quibusdam, laboriosam eius corporis autem inventore minima dolores. Amet incidunt similique ipsa culpa provident!</p>
            </div>
        ) : (
            <div>
                <h2 className='checkout_title'>Your Shopping Basket</h2>

                {basket.map(item =>(
                    <CheckoutProduct 
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                    />

                ))}
            </div>
        )}
        </div>
        {basket.length>0 && (
            <div className='checkout_right'>
                <Subtotal />
            </div>
        )

        }

      
    </div>
  )
}

export default Checkout
