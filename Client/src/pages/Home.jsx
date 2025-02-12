import HeroBanner from '@/components/layout/HeroBanner'
import SectionTitle from '@/components/layout/SectionTitle'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <HeroBanner />
                </div>

                <div className="container px-4 flex border items-center gap-2 hover:gap-3 cursor-pointer w-fit">
                    <SectionTitle title={"deals of the day"} />
                    <FaArrowRight />
                </div>
            </div>

        </>
    )
}

export default Home