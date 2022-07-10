import React from 'react'
import CartItem from './CartItem'
import { openModal } from '../redux/slice/modalSlice'
import { useSelector, useDispatch } from 'react-redux'

const CartContainer = () => {

    const dispatch = useDispatch()

    const { cartItems, totalCost, totalAmount } = useSelector(store => store.cart)

    if (totalAmount < 1){
        return (
            <section className='cart'>
                <header>
                    <h2> Your bag </h2>
                    <h4 className='empty-cart'> is currently empty </h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map(item => <CartItem key={item.id} {...item}/>)}
            </div>
            <footer>
                <hr/>
                <div className='cart-total'>
                    <h4> 
                        Total <span> ${totalCost.toFixed(2)} </span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={() => dispatch(openModal())}> Clear cart </button>
            </footer>
        </section>
    )
}

export default CartContainer