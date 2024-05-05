import React from 'react'
import itemsdb from '../db/items.json'
import bag from '../assets/images/bag.svg'


const Items = () => {
    return (
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-4 mx-4 my-5'>
            {
              itemsdb.map((item, index) => (
                <div key={index} className='col mb-4' >
                  <div className='card h-100 ' style={{background:"#ffd102", textAlign: 'left' }}>
                    <img src={bag} alt="bag icon" style={{width:"40px" , margin:' 5px 0 0 5px'}} />
                    <img src={item.imgSrc} className='card-img-top' alt={item.name + "img"} />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.itemName}</h5>
                      <p className='card-title'>{item.description}</p>
                      <h5 style={{textAlign:'right'}} className='card-subtitle mb-2 text-muted'>{item.price}</h5>
                      <a href={item.wpLink} className='btn btn-primary' style={{background:"#7ab84a" , color:"#152f1d" , width:"100%" , marginTop:"10px"}}>Buy Now</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )
}

export default Items