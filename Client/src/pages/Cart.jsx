import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Headers from '@/components/layout/Header'
import axios from 'axios'
import productApi from '@/api/product.api'

const Cart = () => {
    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await productApi.get(`/carts/${id}`)
                console.log(response.data)
            } catch (error) {
                
            }
        }
        if(id) fetchProduct()
    }, [])

    return (
        <div>
            {/* Your cart content */}
        </div>
    )
}

export default Cart
