import React from 'react'
import './CartItems.css'
import ItemDescription from './ItemDescription'

function CartItems({ items }) {
    return (
        <div className="CartItems">
                <h1> Shopping Cart</h1>
                <hr></hr>
            <div className="ItemsDescription">
                   {items.map((item, index) => 
                    <ItemDescription 
                        item={item}
                        key={index}
                    />
                    )}
            </div>

        </div>
    )
}

export default CartItems
