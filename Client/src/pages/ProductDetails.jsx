import productApi from '@/api/product.api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    // console.log(id)
    const [products, setProducts] = useState(null)


    // will check id and fetch product details
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await productApi.get(`/products/${id}`)
                console.log(response.data)
                setProducts(response.data)

            } catch (error) {
                console.error(error)

            }
        }

        if (id) {
            fetchProduct()
        }
    }, [id])

    return (
        <>
            <div>
                {products && (
                    <div>
                        <h1>{products.title}</h1>
                        <img src={products.image} alt={products.name} className='h-[450px]'/>
                        <p>{products.description}</p>
                        <p>{products.price}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails