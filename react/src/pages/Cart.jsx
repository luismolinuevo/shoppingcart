import React from 'react';
import { addToCart, removeItem, clearCart } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
    const dispatch = useDispatch();  //this lets me use dispatch
    const items = useSelector(state => state.cart.items);   //gives me access to the array
    // const totalPrice = useSelector(state => state.cart.totalPrice);

    const handleAdd = (items) => {
        dispatch(addToCart(items));
    }
    const handleDelete = (items) => {
        dispatch(removeItem(items));
    }
    const handleCart = () => {
        dispatch(clearCart())
    }

  return (
    <div>
        {
            items.map(item => (
                <div>
                    <img src={item.image} alt="image" />
                    <div>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
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
