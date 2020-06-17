import React, { useState } from 'react' 
import CartItems from './CartItems'
import './Cart.css'
import './CartItems'
 


const Cart = ({ initialItems }) => {
    const [items, setItems] = useState(initialItems)

    const updateQty = (id,newQty) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return {...item, qty: newQty}
            }
            return item;
        })
        setItems(newItems)  
    }
      
    const grandTotal = items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0).toFixed(3)
     
 
    return ( 
        
        <div className='Cart'>
            <h1 className='Cart-title'>Shopping Cart</h1>
            <div className='Cart-items'>
                {items.map(item => (
                
                    <CartItems key={item.id} {...item} updateQty={updateQty}/>
            ))}
            </div>
            <h2 className='Cart-total'>Grand Total: ${grandTotal}</h2>
        </div>
    )
}

export default Cart
