import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '@/assets/hero_section/closetMaid_storage.jpg'
import banner2 from '@/assets/hero_section/MOEN_bathroom_fixtures.jpg'
import banner3 from '@/assets/hero_section/wayfair_reward.webp'
import banner4 from '@/assets/hero_section/usca_livingroomsale_desktop.mp4'

const HeroBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    const banners = [
        { src: banner1, alt: 'closetMaid_storage' },
        { src: banner2, alt: 'MOEN_bathroom_fixtures' },
        { src: banner3, alt: 'wayfair_rewards' },
        { src: banner4, alt: 'usca_livingroomsale'}
    ]

    return (
        <div className="w-svw pb-8 pt-6">
            <Slider {...settings} className="w-full">
                {banners.map((banner, i) => (
                    <div key={i} >
                        {banner.src.endsWith('.mp4') ? (
                            <video 
                                autoPlay 
                                loop 
                                muted 
                                src={banner.src}
                            />
                        ) : (
                            <img 
                                src={banner.src} 
                                alt={banner.alt} 
                            />
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default HeroBanner