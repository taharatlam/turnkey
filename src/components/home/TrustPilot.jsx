'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import trustPilotLogo from '@/images/trust.svg'
import starIcon from '@/images/stars.svg'

const TrustPilot = () => {
  return (
    <section className='trust-pilot sec gray-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='trust-pilot-content text-center'>
                        <h3 className='trust-pilot-title'>Excellent</h3>
                        <p className='trust-pilot-rating'>4.8</p>
                        <Image src={starIcon} alt='Star Icon' />
                        <p className='trust-pilot-para'>Based on <Link href='https://www.trustpilot.com/review/redodubai.com'>456 reviews</Link></p>
                        <Image src={trustPilotLogo} alt='TrustPilot Logo' />
                    </div>
                </div>
            </div>
        </div>
        <Swiper
            centeredSlides={true}
            slidesPerView={4}
            initialSlide={4} // Start from the 4th index
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            className='trust-pilot-swiper'
        >
            <SwiperSlide>
                <div className='trust-card'>
                    <Image src={starIcon} alt='TrustPilot Logo' />
                    <h3>Best on the market</h3>
                    <p>I love this product because the support is great. Please ...I love this product because the support is great. Please ...I love this product because the support is great. Please</p>
                    <h4>John Doe</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='trust-card'>
                    <Image src={starIcon} alt='TrustPilot Logo' />
                    <h3>Best on the market</h3>
                    <p>I love this product because the support is great. Please ...I love this product because the support is great. Please ...I love this product because the support is great. Please</p>
                    <h4>John Doe</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='trust-card'>
                    <Image src={starIcon} alt='TrustPilot Logo' />
                    <h3>Best on the market</h3>
                    <p>I love this product because the support is great. Please ...I love this product because the support is great. Please ...I love this product because the support is great. Please</p>
                    <h4>John Doe</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='trust-card'>
                    <Image src={starIcon} alt='TrustPilot Logo' />
                    <h3>Best on the market</h3>
                    <p>I love this product because the support is great. Please ...I love this product because the support is great. Please ...I love this product because the support is great. Please</p>
                    <h4>John Doe</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='trust-card'>
                    <Image src={starIcon} alt='TrustPilot Logo' />
                    <h3>Best on the market</h3>
                    <p>I love this product because the support is great. Please ...I love this product because the support is great. Please ...I love this product because the support is great. Please</p>
                    <h4>John Doe</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='trust-card'>
                    <Image src={starIcon} alt='TrustPilot Logo' />
                    <h3>Best on the market</h3>
                    <p>I love this product because the support is great. Please ...I love this product because the support is great. Please ...I love this product because the support is great. Please</p>
                    <h4>John Doe</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='trust-card'>
                    <Image src={starIcon} alt='TrustPilot Logo' />
                    <h3>Best on the market</h3>
                    <p>I love this product because the support is great. Please ...I love this product because the support is great. Please ...I love this product because the support is great. Please</p>
                    <h4>John Doe</h4>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='trust-card'>
                    <Image src={starIcon} alt='TrustPilot Logo' />
                    <h3>Best on the market</h3>
                    <p>I love this product because the support is great. Please ...I love this product because the support is great. Please ...I love this product because the support is great. Please</p>
                    <h4>John Doe</h4>
                </div>
            </SwiperSlide>
          
        </Swiper>
    </section>
  )
}

export default TrustPilot