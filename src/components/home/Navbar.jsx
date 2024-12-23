import React from 'react'
import Image from 'next/image'
import logo from '@/images/logo.png'
import Link from 'next/link'
import phoneIcon from '@/images/phone.svg'
import whatsappIcon from '@/images/whatsapp.png'
import clockIcon from '@/images/clock.svg'

const Navbar = () => {
  return (
    <nav className="main-nav">
        <div className="container">
            <div className="nav-inner">
                <div className="l-part">
                    <Link href="/" className="logo">
                        <Image src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="r-part">
                    <ul className="nav-links">
                    <li>
                <Link href="tel:+97145579950">
                    <Image src={phoneIcon} alt="Phone" />
                    <span>+971 4 557 9950</span>
                </Link>
            </li>
            <li>
                <Link href="https://api.whatsapp.com/send?phone=97145579950&text=Hello%2C%20I%27m%20interested%20in%20renovating%20my%20home%20with%20Turnkey%20Renovations.%20Can%20we%20please%20schedule%20a%20viewing%20of%20my%20property%3F" target='_blank'>
                    <Image src={whatsappIcon} alt="Whatsapp" />
                    <span>Message us in WhatsApp</span>
                </Link>
            </li>
            <li>
                <div className="non-clickable">
                    <Image src={clockIcon} alt="Clock" />
                    <span>Mon-Friday, 9AM - 5PM</span>
                </div>
            </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar