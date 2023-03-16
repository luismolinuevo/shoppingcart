import React from 'react';
import { addItem, removeItem, clearCart } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
    const dispatch = useDispatch();  //this lets me use dispatch
    const items = useSelector(state => state.cart.items);   //gives me access to the array
    // const totalPrice = useSelector(state => state.cart.totalPrice);

    const handleAdd = (items) => {
        dispatch(addItem(items));
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
            items.map((item) => (
                <div>
                    <p>{item.name}</p>
                </div>
            ))
        }
    </div>
  )
}
