import React from 'react'
import { RatingGroup } from "@chakra-ui/react"

const ProductRating = ({ rating }) => {
    return (
        <div>
            <RatingGroup.Root readOnly count={5} defaultValue={rating} size="sm">
                <RatingGroup.HiddenInput />
                <RatingGroup.Control>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <RatingGroup.Item key={index} index={index + 1}>
                            <RatingGroup.ItemIndicator />
                        </RatingGroup.Item>
                    ))}
                </RatingGroup.Control>
            </RatingGroup.Root>
        </div>
    )
}

export default ProductRating