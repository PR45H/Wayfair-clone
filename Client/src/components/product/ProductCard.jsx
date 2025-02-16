import { AlertRoot, Card } from '@chakra-ui/react'
import { Alert } from "@chakra-ui/react"
import React from 'react'
import { useNavigate } from 'react-router-dom'
import productApi from '../../api/product.api'

const ProductCard = ({ product }) => {
    // console.log(product)

    const navigate = useNavigate()

    const goToProduct = async (title, id) => {
        console.log("Go to product " + title)
        try {

            const response = await productApi.get(`/products/${id}`)
            console.log(response.data)

            if (response.data) {
                navigate(`/products/${title}`)
            }
        } catch (error) {
            console.log(error)
            AlertRoot({
                status: "error",
                description: "Error while fetching product",
                title: "Error"

            })

        }
    }

        return (
            <Card.Root maxW="sm" overflow="hidden" className="hover:shadow-lg  transition-shadow cursor-pointer" onClick={() => goToProduct(product.title, product.id)}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain p-4"
                />
                <Card.Body gap="2" className='hover:underline'>
                    <Card.Title className="text-lg font-semibold truncate " >
                        {product.title}
                    </Card.Title>

                </Card.Body>
                <Card.Footer gap="2" className="flex flex-col justify-between">
                    <Card.Description className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                    </Card.Description>
                    <h2 className="text-2xl font-mono text-red-800 mt-2">
                        ${product.price}
                    </h2>

                </Card.Footer>
            </Card.Root>
        )
}

    export default ProductCard