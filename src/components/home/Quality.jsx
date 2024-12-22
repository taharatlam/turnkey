import React from 'react'
import Image from 'next/image'
import qualityImg from '@/images/img11.png'
import tick from '@/images/y-tick.svg'
import Link from 'next/link'

const Quality = () => {
  return (
    <section className='quality-sec sec gray-bg'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-12 text-center'>
                    <p className='sec-para'>12 years of experience</p>
                    <h2 className='sec-title'>European quality<br className='d-none d-sm-block' /> management</h2>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-6 col-12'>
                    <div className='quality-img'>
                        <Image src={qualityImg} className='w-100' alt='quality' />
                    </div>
                </div>
                <div className='col-lg-6 col-12'>
                    <div className='quality-content'>
                        <p className='sec-para'>
                            We work in the construction market not only in Dubai but also in many European countries, which allows us to provide our clients with European quality management and supervision. We are always ready to anwser your questions and help you realize any construction and renovation ideas of your villa.
                        </p>
                        <ul className='quality-list'>
                            <li>
                                <Image src={tick} alt='quality' />
                                <span>High Engineering Skills</span>
                            </li>
                            <li>
                                <Image src={tick} alt='quality' />
                                <span>Every Project - with drawings</span>
                            </li>
                            <li>
                                <Image src={tick} alt='quality' />
                                <span>Permit documentation</span>
                            </li>
                            <li>
                                <Image src={tick} alt='quality' />
                                <span>Extended License</span>
                            </li>
                        </ul>
                        <Link href='/' className='main-btn wide mt-4'>
                            <span>Get a Quote</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Quality