import { Card } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    const goToProduct = () => {
        console.log("Go to product")
        navigate('/product')
    }

    return (
        <Card.Root maxW="sm" overflow="hidden" className="hover:shadow-lg  transition-shadow cursor-pointer" onClick={goToProduct}>
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