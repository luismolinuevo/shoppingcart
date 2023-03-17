import React, {useState} from 'react';
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
        <section className="pt-10 px-20">
            <div className="px-10 sm:px-15">
                <div>
                    <h1 className="text-center text-3xl">Shopping Cart</h1>
                    {/* <div>
                        {items.length >= 1 ? <p>${totalCost.toFixed(2)}</p> : <p>$0</p>}
                        <button onClick={() => handleClear}></button>
                    </div> */}
                    {
                        items.map(item => (
                            <div className=' flex border-b border-black py-8'>
                                <div className=" flex">
                                    <img src={item.image} alt="image" />
                                    <div className="pl-4">
                                        <p className='text-2xl'>{item.name}</p>
                                        <p className='text-xl'>{item.category}</p>
                                        <p className='text-lg'>${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="w-full flex items-center flex-col">
                                    <div>
                                        <p className='text-lg'>Quantity</p>
                                    </div>
                                    <div className='h-full flex items-center justify-center '>
                                        <div className=' flex border-x-2  border black p-2'>
                                        <button className='text-xl p-1' onClick={() => handleAdd(item)}>+</button>
                                        <p className='text-xl p-1'>{item.count}</p>
                                        <button className='text-xl p-1' onClick={() => handleDelete(item.id)}>-</button>
                                        </div>
                                      
                                    </div>
                                </div>
                                <div>
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
