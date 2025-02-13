import { Card } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cartSlice'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <Card.Root maxW="sm" overflow="hidden" className="hover:shadow-lg transition-shadow cursor-pointer">
            <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain p-4"
            />
            <Card.Body gap="2">
                <Card.Title className="text-lg font-semibold truncate">
                    {product.title}
                </Card.Title>

            </Card.Body>
            <Card.Footer gap="2" className="flex flex-col justify-between">
                <Card.Description className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                </Card.Description>
                <h2 className="text-xl font-medium text-red-800 mt-2">
                    ${product.price}
                </h2>
            </Card.Footer>
        </Card.Root>
    )
}

export default ProductCard