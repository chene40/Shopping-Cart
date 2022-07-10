import React from 'react'
import { closeModal } from '../redux/slice/modalSlice'
import { clearCart } from '../redux/slice/cartSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {

    const dispatch = useDispatch()

    const confirm = () => {
        dispatch(clearCart())
        dispatch(closeModal())
    }

    const cancel = () => { dispatch(closeModal()) }

    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4> Remove all items from your shopping cart? </h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn' onClick={confirm}> Confirm </button>
                    <button type='button' className='btn clear-btn' onClick={cancel}> Cancel </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal