import React from 'react'
import './food.css'
import IMG1 from '../../assets/food.jpeg'
import IMG2 from '../../assets/food2.jpeg'
import IMG3 from '../../assets/food3.jpeg'

const food = () => {
  return (
    <section id='food'>
    <h5>Menu del día</h5>
    <h2>Food</h2>
    <div className="container food_container">
      <article className='food__item'>
        <div className='food_item-image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>Este es el menú del día</h3>
        <div className="food_item-cta">

        <a href="https://github.com" className='btn' target='_blank'>Pedido</a>
        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      {/* art2 */}
      <article className='food__item'>
        <div className='food_item-image'>
          <img src={IMG2} alt="" />
        </div>
        <h3>Este es el menú del día</h3>
        <div className="food_item-cta">

        <a href="https://github.com" className='btn' target='_blank'>Pedido</a>
        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Comprar</a>
        </div>
      </article>
      {/* art3 */}
      <article className='food__item'>
        <div className='food_item-image'>
          <img src={IMG3} alt="" />
        </div>
        <h3>Este es el menú del día</h3>
        <div className="food_item-cta">

        <a href="https://github.com" className='btn' target='_blank'>Pedido</a>
        <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
    </div>
    </section>
  )
}

export default food