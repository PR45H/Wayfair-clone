import React, { useEffect, useState } from 'react'
import productApi from '@/api/product.api'
import HeroBanner from '@/components/layout/HeroBanner'
import SectionTitle from '@/components/layout/SectionTitle'
import ProductCard from '@/components/product/ProductCard'
import { FaArrowRight } from 'react-icons/fa'
import {
    Skeleton,
    SkeletonCircle,
    SkeletonText,
} from "@/components/ui/skeleton"

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await productApi.get('/products?limit=6')
                setProducts(response.data)
            } catch (error) {
                setError('Failed to fetch products')
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    // Create skeleton loading effect
    if (loading) return (
        <div className='w-[50%] flex flex-col gap-4 m-auto p-8'>
            <div className='flex gap-4 items-center'>
                <SkeletonCircle size="10" />
                <SkeletonText noOfLines={2} />
            </div>
            <div>
                <Skeleton height="200px" />
            </div>
        </div>)
    if (error) return <div>{error}</div>

    return (
        <>
            <div>
                <div className='hero_section'>
                    <HeroBanner />
                </div>

                <div className="container px-4 flex border items-center w-full mx-auto gap-4">
                    <div className='w-[50%] flex flex-col gap-4'>
                        <div className='flex items-center gap-2 hover:gap-3 cursor-pointer'>
                            <SectionTitle title={"deals of the day"} />
                            <FaArrowRight />
                        </div>
                        {/* Product Card  */}
                        <div className='grid grid-cols-3 justify-evenly gap-4'>
                            {products.slice(0, 3).map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='w-[50%] flex flex-col gap-4'>
                        <div className='flex items-center gap-2 hover:gap-3 cursor-pointer'>
                            <SectionTitle title={"view all"} />
                            <FaArrowRight />
                        </div>

                        <div className='grid grid-cols-3 justify-evenly gap-4'>
                            {products.slice(3, 7).map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home