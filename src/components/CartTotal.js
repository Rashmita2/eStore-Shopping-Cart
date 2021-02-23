import React from 'react'
import './CartTotal.css'
function CartTotal() {
    return (
        <div className="CartTotal">
                <h3>Subtotal(5 items):
                <span className="price">$1000</span>
                </h3>
                <button className="btn1">Checkout</button>
            </div>

    )
}

export default CartTotal
