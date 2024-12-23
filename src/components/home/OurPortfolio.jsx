'use client'
import React, { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

// import SwiperCore, { Navigation } from 'swiper';
import nextIcon from '@/images/next.svg';
import prevIcon from '@/images/prev.svg';
import Image from 'next/image';
import port1 from '@/images/port1.png';


const OurPortfolio = () => {
  const swiperRef = useRef();

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="our-portfolio sec">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="port-sec text-center">
                        <h2 className='sec-title'>Our Portfolio</h2>
                    </div>
                    <div className="position-relative port-swiper-container">
                        <Swiper
                            // onBeforeInit={(swiper) => {
                            //     swiperRef.current = swiper;
                            // }}
                            // modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            className='port-swiper mt-4'
                            loop={true}
                            ref={swiperRef}
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
                        </Swiper>
                        <button 
                            className="custom-prev-button"
                            onClick={handlePrev}
                        >
                            <Image src={prevIcon} alt="Previous" />
                        </button>
                        <button 
                            className="custom-next-button"
                            onClick={handleNext}
                        >
                            <Image src={nextIcon} alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OurPortfolio;