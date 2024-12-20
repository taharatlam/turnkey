import React from 'react'
import Image from 'next/image'
import bannerImage from '@/images/banner.jpg'
import HomebannerForm from './HomebannerForm'
import tickIcon from '@/images/yellow-tick.svg'
const HomeBanner = () => {
  return (
    <div className="home-banner-wrapper">
        <div className="home-banner">
            <Image src={bannerImage} alt="Banner" />
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                    <div className="banner-content">
                        <h1>
                            Italian Quality <br className="d-none d-sm-block" />
                            <span>Home Renovation</span>
                        </h1>
                        <ul className="point-list">
                            <li>
                                <Image src={tickIcon} alt="Tick" />
                                <p>The price will not change 100%</p>
                            </li>
                            <li>
                                <Image src={tickIcon} alt="Tick" />
                                <p>The cost of the work is fixed in the contract and will not change.</p>
                            </li>
                            <li>
                                <Image src={tickIcon} alt="Tick" />
                                <p>Only you can change if you wish to add some new scope during process.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1 col-12">
                    <HomebannerForm />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner