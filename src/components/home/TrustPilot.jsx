'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import trustPilotLogo from '@/images/trust.svg'
import starIcon from '@/images/stars.svg'

const TrustPilot = () => {
    const reviews = [
        {
          id: 1,
          rating: 5,
          title: "Villa and Pool Renovation Perfection",
          description:
            "Turnkey is the best in Dubai! They renovated our villa and pool, making everything look brand new. The communication was perfect throughout, and our home feels like a luxury resort. THANKS!!",
          author: "Amira R.",
        },
        {
          id: 2,
          rating: 5,
          title: "Stylish Transformation for Airbnb",
          description:
            "Absolutely thrilled with the renovation! They turned our old flat in Marina into a stylish space perfect for Airbnb. The team was incredibly professional, and their attention to detail was spot on. Highly recommend!",
          author: "Emily B.",
        },
        {
          id: 3,
          rating: 5,
          title: "Great Home Renovation Experience",
          description:
            "Turnkey Projects is the best! They transformed our house into a beautiful home. The entire process was smooth, and the quality of the work was outstanding. I would recommend them to anyone looking for a renovation in Dubai.",
          author: "Sanjay O.",
        },
        {
          id: 4,
          rating: 5,
          title: "Perfect from Start to Finish",
          description:
            "From the initial consultation to the final handover, everything was perfect. The team was friendly and professional, and they really cared about delivering a high-quality result. We love our new home!",
          author: "Ali M.",
        },
        {
          id: 5,
          rating: 5,
          title: "Stunning Results!",
          description:
            "This company is amazing! They took care of everything, from getting the permits to the final touches. Our home looks stunning now.",
          author: "Priya K.",
        },
        {
          id: 6,
          rating: 5,
          title: "Professional and High-Quality Renovation",
          description:
            "I am very pleased with the renovation work done by Turnkey Projects. They were professional, timely, and used high-quality materials. I would highly recommend them to anyone looking for a reliable renovation company.",
          author: "Emma L.",
        },
        {
          id: 7,
          rating: 5,
          title: "The best company in Dubai",
          description:
            "These guys really blew me away. They took our place and completely transformed it into something beyond what we ever imagined. The team was friendly, super professional, and you could tell they cared about every little detail.",
          author: "Stefan N.",
        },
        {
          id: 8,
          rating: 5,
          title: "Ideas Brought to Life",
          description:
            "Turnkey Projects did an amazing job from start to finish. The team took our ideas and truly brought them to life in a way we never thought possible.",
          author: "Hassan E.",
        },
      ];
    

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
            loop={true}
            initialSlide={4}
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
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
            {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <div className='trust-card'>
                        <Image src={starIcon} alt='TrustPilot Logo' />
                        <h3>{review.title}</h3>
                        <p>{review.description}</p>
                        <h4>{review.author}</h4>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default TrustPilot