import React from 'react'
import itemsdb from '../db/items.json'

const Items = () => {
    return (
        <div className='container'>
          <div className='row row-cols-1 row-cols-md-4 mx-4 my-5'>
            {
              itemsdb.map((item, index) => (
                <div key={index} className='col mb-4'>
                  <div className='card h-100'>
                    <img src={item.imgSrc} className='card-img-top' alt={item.name + "img"} />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.itemName}</h5>
                      <h6 className='card-subtitle mb-2 text-muted'>{item.price}</h6>
                      <a href={item.wpLink} className='btn btn-primary'>Buy Now</a>
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