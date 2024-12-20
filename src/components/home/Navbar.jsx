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
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar