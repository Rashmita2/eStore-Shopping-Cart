import React from 'react'
import './CartItems.css'
import ItemDescription from './ItemDescription'

function CartItems({ items, setCartItems }) {
    const changeItemQuantity = (e, index) => {
        //pass in the index and change the quantity
        //update the items 
        console.log(e.target.value);
        console.log("index is", index);
        const newItems = [...items]
        newItems[index].quantity = e.target.value;
        setCartItems(newItems);
    }
    return (
        <div className="CartItems">
                <h1> Shopping Cart</h1>
                <hr></hr>
            <div className="ItemsDescription">
                   {items.map((item, index) => 
                    <ItemDescription 
                        index={index}
                        item={item}
                        key={index}
                        changeItemQuantity= {changeItemQuantity}
                    />
                    )}
            </div>

        </div>
    )
}

export default CartItems
