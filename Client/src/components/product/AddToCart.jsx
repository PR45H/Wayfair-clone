import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddToCart = ({id}) => {
    const [number, setNumber] = useState(1)
    const navigate = useNavigate()
    

    return (
        <>
            <div className='flex gap-4'>
                <div className="cart_calculation">
                    <div className="quantity flex">
                        <input
                            type="button"
                            defaultValue="-"
                            className='border-2 px-4 py-2 rounded-s-2xl hover:cursor-pointer hover:bg-[#7B189F] hover:bg-opacity-5'
                            onClick={() => {
                                if (number > 1) {
                                    setNumber(number - 1)
                                }
                            }}
                        />
                        <div className='border-2 px-4 py-2'>{number}</div>
                        <input
                            type="button"
                            defaultValue="+"
                            className='border-2 px-4 py-2 rounded-r-2xl hover:cursor-pointer hover:bg-[#7B189F] hover:bg-opacity-5'
                            onClick={() => setNumber(number + 1)}
                        />
                    </div>
                </div>
                <div className="add_to_cart_button border w-full ">
                    <div>
                        <button
                            className='bg-[#7B189F] text-white px-4 py-2 rounded-xl hover:bg-opacity-80 cursor-pointer w-full '
                            onClick={()=>window.open(`/cart/${id}`, "_blank")}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToCart