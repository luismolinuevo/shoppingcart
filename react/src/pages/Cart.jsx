import React from 'react';
import { addToCart, removeItem, clearCart } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

export default function Cart() {
    const dispatch = useDispatch();  //this lets me use dispatch
    const items = useSelector(state => state.cart.items);   //gives me access to the array
    const totalCost = useSelector(state => state.cart.totalCost.toFixed(2));


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
        <section className="pt-10 md:px-20 bg-bgcolor">
            <div className="px-5 sm:px-15">
                <div>
                    <h1 className="text-center text-3xl">Shopping Cart</h1>
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

                    {
                        items.length >= 1

                            ?

                            <div className='flex justify-between items-center pt-4'>

                                <button className="whitespace-nowrap p-1 bg-blue-500" onClick={() => handleClear()}>Clear Cart</button>

                                <div className="w-2/6 flex justify-end">
                                    <div className='w-full'>
                                        <div className=' flex justify-between pb-2'>
                                            <p className=''>Subtotal</p>
                                            <p>${totalCost}</p>
                                        </div>
                                        <div>
                                            <button className='w-full h-10 border-x-2 bg-blue-500'>Checkout</button>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            :

                            <div className=' pt-8 text-center '>
                                <h1 className='text-3xl'>Shopping Cart is Empty</h1>
                                <Link to="/" className='text-xl text-blue-500'>Continue Shopping</Link>
                            </div>
                    }



                </div>
            </div>
        </section>


    )
}

//whitespace-nowrap fix the issue where the world will have a new line after every word
