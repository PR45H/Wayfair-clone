import productApi from '@/api/product.api'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import SectionTitle from '@/components/layout/SectionTitle'
import AddToCart from '@/components/product/AddToCart'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductRating from '@/components/product/ProductRating'
import React, { useEffect, useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const [products, setProducts] = useState(null)

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
        if (id) fetchProduct()
    }, [id])

    return (
        <>
            <Header />
            <div className="p-4 md:p-8">
                {products && (
                    <div className="flex flex-col md:flex-row border gap-4 p-4">
                        <div className="product_image md:w-[30%] ">
                            <img
                                src={products.image}
                                alt={products.name}
                                className="w-full object-contain h-[300px] md:h-[450px]"
                            />
                        </div>

                        <div className="flex flex-col gap-4 w-full md:w-[70%]">
                            <div className="product_title">
                                <SectionTitle title={products.title} />
                            </div>

                            <div className="star_rating flex flex-col sm:flex-row gap-3 items-center">
                                <ProductRating rating={products.rating.rate} />
                                <div>{products.rating.rate}</div>
                                <div className="text-[#7B189F] underline hover:no-underline font-semibold">
                                    {products.rating.count} Reviews
                                </div>
                            </div>

                            <div className="product_price">
                                <span className="font-semibold text-2xl flex items-center">
                                    <FaDollarSign /> {products.price}
                                </span>
                            </div>

                            <div className="product_description w-full md:w-[50%]">
                                <ProductAccordion
                                    title="Description"
                                    content={products.description}
                                    className="border"
                                />
                            </div>

                            <div className="add_to_cart">
                                <AddToCart/>
                            </div>
                        </div>

                    </div>
                )}
                <Footer />
            </div>
        </>
    )
}

export default ProductDetails