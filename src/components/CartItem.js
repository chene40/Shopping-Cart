import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { removeItem } from '../redux/slice/cartSlice'
import { useDispatch } from 'react-redux'
import { increaseAmount, decreaseAmount } from '../redux/slice/cartSlice'

const CartItem = ({id, img, title, price, amount}) => {

  const dispatch = useDispatch()

  const remove = () => { dispatch(removeItem(id)) }

  const increase = () => { dispatch(increaseAmount({id})) }

  const decrease = () => {
    if (amount === 1){ 
      remove()
      return
    }
    dispatch(decreaseAmount({id}))
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'> {price} </h4>
        <button className='remove-btn' onClick={remove}> remove </button>
      </div>
      <div>
        <button className='amount-btn' onClick={increase}> 
          <ChevronUp />
        </button>
        <p className="amount"> {amount} </p>
        <button className='amount-btn' onClick={decrease}> 
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem