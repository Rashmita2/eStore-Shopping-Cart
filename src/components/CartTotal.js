import React from 'react'
import './CartTotal.css'
function CartTotal({ items }) {
    const TotalAmount = () => {
       //set total price to 0 and loop all the items, add it with quantity and return it.
        let total = 0;
        items.forEach((item) => {
                total += (item.price * item.quantity)
        })
        return total;
    }
    return (
        <div className="CartTotal">
                <h3>Subtotal({items.length} items):
                <span className="price">{TotalAmount()}</span>
                </h3>
                <button className="btn1">Checkout</button>
            </div>

    )
}
export default CartTotal
