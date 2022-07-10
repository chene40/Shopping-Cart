import React from 'react'
import CartItem from './CartItem'
import { clearCart } from '../redux/slice/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const CartContainer = () => {

    const dispatch = useDispatch()

    const { cartItems, totalCost, totalAmount } = useSelector(store => store.cart)

    if (totalAmount < 1){
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
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
                        total <span> ${totalCost.toFixed(2)} </span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={() => dispatch(clearCart())}> clear cart </button>
            </footer>
        </section>
    )
}

export default CartContainer