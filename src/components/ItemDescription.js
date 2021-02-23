import React from 'react'
import key from './items/keyboard.jpg'
import './ItemDescription.css'

const ItemDescription = ({ item }) => {
    return (
        <div className="ItemDescription">
                <div className="CartItem-image">
                <img src={process.env.PUBLIC_URL + './items/' + item.image} alt=" " />
                </div>

                <div className="CartItem-info">
                        <div className="info-title">
                            <h2>{item.title}</h2>
                        </div>

                        <div className="info-stock">
                            {item.stock}
                        </div>

                        <div className="item-actions">
                                <div className="item-quantity">
                                    <select value={item.quantity}>
                                        <option value="1">Qty:1</option>
                                        <option value="2">Qty:2</option>
                                        <option value="3">Qty:3</option>
                                        <option value="4">Qty:4</option>
                                        <option value="5">Qty:5</option>
                                    </select>
                                </div>
                                <div className="item-actions-divider">|</div>
                                <div className="item-delete">
                                    Delete
                                </div>
                        </div>
                </div>

                <div className="CartItem-price">
                    <h3>{item.price}</h3>
                </div>
        </div>
    )
}

export default ItemDescription
