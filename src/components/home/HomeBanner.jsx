import React from 'react'
import Image from 'next/image'
import bannerImage from '@/images/banner.jpg'
import HomebannerForm from './HomebannerForm'
import tickIcon from '@/images/yellow-tick.svg'
import phoneIcon from '@/images/phone.svg'
import whatsappIcon from '@/images/whh.svg'
import clockIcon from '@/images/clock.svg'
import Link from 'next/link'
import Navbar from './Navbar'

const HomeBanner = () => {
  return (
    <>
        <ul className="nav-links mob">
            <li>
                <Link href="/">
                    <Image src={phoneIcon} alt="Phone" />
                    <span>+971 4 557 9950</span>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image src={whatsappIcon} alt="Whatsapp" />
                    <span>Message us in WhatsApp</span>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image src={clockIcon} alt="Clock" />
                    <span>Mon-Friday, 9AM - 5PM</span>
                </Link>
            </li>
        </ul>
        <div className="home-banner-wrapper">
            <div className="home-banner">
                <Navbar />
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
    </>
  )
}

export default HomeBanner