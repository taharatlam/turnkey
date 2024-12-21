'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation } from 'swiper';
import nextIcon from '@/images/next.svg';
import prevIcon from '@/images/prev.svg';
import Image from 'next/image';
import port1 from '@/images/port1.png';

SwiperCore.use([Navigation]);

const OurPortfolio = () => {
  return (
    <div className="our-portfolio sec">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="port-sec text-center">
                        <h2 className='sec-title'>Our Portfolio</h2>
                    </div>
                    <Swiper
                        // navigation={{
                        // nextEl: '.swiper-button-next',
                        // prevEl: '.swiper-button-prev',
                        // }}
                        spaceBetween={50}
                        slidesPerView={1}
                        className='port-swiper mt-4'
                    >
                        <SwiperSlide>
                            <div className="port-image">
                                <Image src={port1} alt="Portfolio 1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="port-image">
                                <Image src={port1} alt="Portfolio 2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="port-image">
                                <Image src={port1} alt="Portfolio 3" />
                            </div>
                        </SwiperSlide>
                        {/* Add more SwiperSlide components as needed */}
                    </Swiper>
                    {/* <div className="swiper-button-prev">
                        <Image src={prevIcon} alt="Previous" />
                    </div>
                    <div className="swiper-button-next">
                        <Image src={nextIcon} alt="Next" />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default OurPortfolio;