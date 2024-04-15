import React from 'react'
import img from '../../images/banner.jpg'
import './home.css'
import Product from '../Product/Product'
function Home() {
  return (
    <div className='home'>
      <img  className="home_img" src={img} alt="" />
       
    
       {/*product*/}
       <div className="home_row">
        <Product
          id='1'
          title="The Lean Startup :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestiae, officiis quidem excepturi consequatur minus. "
          price={11.96}
          rating={5}
          images="https://images-na.ssl-images-amazon.com/images/I/61BFOf9Ap-L._AC_UL600_SR600,600_.jpg"
          />
          <Product
            id='2'
            title="The Lean Startup :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestiae, officiis quidem excepturi consequatur minus. "
            price={11.96}
            rating={5}
            images="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_UF894,1000_QL80_.jpg"
            />

       </div>
       <div className="home_row">
          <Product
            id='3'
            title="The Lean Startup :Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
            price={11.96}
            rating={5}
            images="https://m.media-amazon.com/images/I/61rpv46LHiL.jpg"
            />
          <Product
            id='4'
            title="The Lean Startup :Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
            price={11.96}
            rating={5}
            images="https://5.imimg.com/data5/DP/RC/AC/SELLER-12479946/amazon-echo-smart-speaker-with-alexa-powered-by-dolby-black-500x500.jpg"
            />
          <Product
            id='5'
            title="The Lean Startup :Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
            price={11.96}
            rating={5}
            images="https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_SL1500_.jpg"
            />

       </div>
       <div className="home_row last">
          <Product
                id='6'
                title="The Lean Startup :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestiae, officiis quidem excepturi consequatur minus.lorem dolor sit amet consectetur adipisicing elit."
                price={11.96}
                rating={5}
                images="https://m.media-amazon.com/images/I/61QSUZYl+dL._AC_UF894,1000_QL80_.jpg"
            />
        </div>
       
    </div>
  )
}

export default Home
