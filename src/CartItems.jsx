import React from 'react'
import './CartItems'

const CartItems = ({ id, name, price, qty, updateQty }) => {
    
    // alternative way to updating the state for add and remove

    // const addOne = () => {
    //     updateQty(id,qty +1)
    // }

    // const removeOne = () => {
    //     updateQty(id, qty -1)
    // }
    return (
        <div className='CartItem'>
            <div>{name}</div>
            <div>
                ${price} </div>
            <div><button onClick={()=>updateQty(id, qty -1)} disabled = {qty <=1}>-</button>{qty} <button onClick={()=>updateQty(id,qty +1)}>+</button></div>
            <div>Total: ${price * qty}</div>
        </div>
    ) 
}

export default CartItems
