'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../../../node_modules/swiper/swiper-bundle.min.css'
import Image from 'next/image'
import partner1 from '@/images/logo1.png'
import partner2 from '@/images/logo2.png'
import partner3 from '@/images/logo3.png'
import partner4 from '@/images/logo4.png'
import partner5 from '@/images/logo5.png'
import partner6 from '@/images/logo6.png'

const Partners = () => {
    const partners = [
        { id: 1, name: 'Partner 1', image: partner1 },
        { id: 2, name: 'Partner 2', image: partner2 },
        { id: 3, name: 'Partner 3', image: partner3 },
        { id: 4, name: 'Partner 4', image: partner4 },
        { id: 5, name: 'Partner 5', image: partner5 },
        { id: 6, name: 'Partner 6', image: partner6 },
    ]
  return (
    <section className='partners-sec sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h2 className='sec-title'>Trust by Partnership</h2>
                    <p className='sec-para'>Building strong Relationships through Collaboration</p>
                </div>
            </div>
            <Swiper
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
                pagination={false}
                navigation={false}
                className='mt-4'
            >
                {partners.map((partner) => (
                    <SwiperSlide key={partner.id}>
                        <div className='partner-logo'>
                            <Image src={partner.image} alt={partner.name} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Partners