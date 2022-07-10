import React from 'react'
import '../index.css'

import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const { amount } = useSelector(store => store.cart)

    return(
        <nav>
            <div className='nav-center'>
                <h3>Shopping Cart</h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">0</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar