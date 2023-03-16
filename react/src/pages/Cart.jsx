import React from 'react';
import { addToCart, removeItem, clearCart } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
    const dispatch = useDispatch();  //this lets me use dispatch
    const items = useSelector(state => state.cart.items);   //gives me access to the array
    const totalCost = useSelector(state => state.cart.totalCost);
    // const totalPrice = useSelector(state => state.cart.totalPrice);

    const handleAdd = (items) => {
        dispatch(addToCart(items));
    }
    const handleDelete = (items) => {
        dispatch(removeItem(items));
    }
    const handleClear = () => {
        dispatch(clearCart())
    }

  return (
    <div>
        <h1>Shopping Cart</h1>
        <div>
            {items.length >= 1 ? <p>${totalCost.toFixed(2)}</p> : <p>$0</p>}
            <button onClick={() => handleClear}></button>
        </div>
        {
            items.map(item => (
                <div>
                    <img src={item.image} alt="image" />
                    <div>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price.toFixed(2)}</p>
                        <p>Qty: {item.count}</p>
                        <div>
                            <button onClick={() => handleAdd(item)}>+</button>
                            <button onClick={() => handleDelete(item.id)}>-</button>
                        </div>
                    </div>
                    
                    
                </div>
            ))
        }

    </div>
  )
}
