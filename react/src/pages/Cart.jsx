import React, { useState } from 'react';
import { addToCart, removeItem, clearCart } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
    const dispatch = useDispatch();  //this lets me use dispatch
    const [totalPrice, setTotalPrice] = useState(0);
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
        <section className="pt-10 md:px-20">
            <div className="px-5 sm:px-15">
                <div>
                    <h1 className="text-center text-3xl">Shopping Cart</h1>
                    {/* <div>
                        {items.length >= 1 ? <p>${totalCost.toFixed(2)}</p> : <p>$0</p>}
                        <button onClick={() => handleClear}></button>
                    </div> */}
                    {
                        items.map(item => (
                            <div className=' flex border-b border-black py-8 flex-col md:flex-row'>
                                <div className="flex">
                                    <img src={item.image} alt="image" className="w-32 md:w-60" />
                                    <div className="pl-4">
                                        <p className='text-xl sm:text-2xl'>{item.name}</p>
                                        <p className='text-lg sm:text-xl'>{item.category}</p>
                                        <p className='text-md sm:text-lg'>${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="w-full md:flex items-center md:justify-center md:flex-col">
                                    <div className='hidden md:block'>
                                        <p className='text-lg'>Quantity</p>
                                    </div>
                                    <div className='h-full flex items-center md:justify-center pt-4 md:p-0'>
                                        <div className='flex border-x-2 border black p-1 md:p-2'>
                                            <button className=' text-md md:text-xl p-1' onClick={() => handleAdd(item)}>+</button>
                                            <p className='text-md md:text-xl p-1'>{item.count}</p>
                                            <button className='text-md md:text-xl p-1' onClick={() => handleDelete(item.id)}>-</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:block'>
                                    <p className='text-lg'>Total</p>
                                    <p className='h-full flex items-center'>${item.total.toFixed(2)}</p>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </section>


    )
}
