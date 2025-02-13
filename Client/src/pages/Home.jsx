import React, { useEffect, useState } from 'react'
import productApi from '@/api/product.api'
import HeroBanner from '@/components/layout/HeroBanner'
import SectionTitle from '@/components/layout/SectionTitle'
import ProductCard from '@/components/product/ProductCard'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await productApi.get('/products?limit=4')
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

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <>
            <div>
                <div>
                    <HeroBanner />
                </div>

                <div className="container px-4 flex border items-center w-full mx-auto gap-4">
                    <div className='w-[50%] flex flex-col gap-4'>
                        <div className='flex items-center gap-2 hover:gap-3 cursor-pointer'>
                            <SectionTitle title={"deals of the day"} />
                            <FaArrowRight />
                        </div>

                        <div className='grid grid-cols-3 justify-evenly gap-4'>
                            {products.slice(0,3).map(product => (
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
                            <FaArrowRight/>
                        </div>

                        <div>
                            {products[3] && (
                                <ProductCard product={products[3]} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home