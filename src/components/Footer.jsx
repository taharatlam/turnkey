import Link from 'next/link'
import React from 'react'
import logo from '@/images/logo.png';
import Image from 'next/image';
import facebook from '@/images/facebook.svg';
import instagram from '@/images/instagram.svg';
import linkedin from '@/images/linkedin.svg';
import whatsapp from '@/images/whatsapp.svg';
import phone from '@/images/phone.svg';
import wh from '@/images/whh.svg';
import email from '@/images/email.svg';

const Footer = () => {
  return (
    <footer className='main-footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-12">
                    <Link href="/" className='ft-logo'>
                        <Image src={logo} alt='Logo' />
                    </Link>
                    <p className='ft-desc'>
                        Leading renovation and fit-out company in Dubai
                        offering bespoke designs, project management, and
                        high-quality Italian craftsmanship.
                    </p>
                    <ul className='soc-links'>
                        <li>
                            <Link href="/">
                                <Image src={facebook} alt='Facebook' />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image src={instagram} alt='Instagram' />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image src={linkedin} alt='Linkedin' />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image src={whatsapp} alt='Whatsapp' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2 offset-lg-1 col-6">
                    <h3 className='ft-title'>Quick Links</h3>
                    <ul className='ft-links'>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Cost Calculator</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-6">
                    <h3 className='ft-title'>Location & Time</h3>
                    <ul className='ft-links'>
                        <li>
                            <span>Address:</span>
                            Office 2504 - Churchill Towers Business Bay - Dubai - UAE
                        </li>
                        <li>
                            <span>Hours:</span>
                            Mon - Fri: 9am - 5pm
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-6">
                    <h3 className='ft-title'>Get in Touch</h3>
                    <ul className='ft-links con-links'>
                        <li>
                            <Link href="/">
                                <Image src={wh} alt='Phone' />
                                <span>Message us on WhatsApp</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div className='tp'>  
                                    <Image src={phone} alt='Phone' />
                                    <span>Phone</span>
                                </div>
                                <span>+971 4 557 9950</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <div className='tp'>  
                                    <Image src={email} alt='Phone' />
                                    <span>Email</span>
                                </div>
                                <span>hello@turnkeyrenovations.ae</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='ft-btm'>
                        <p className='copy-right'>
                            All rights reserved – © 2024 Turnkey Renovation
                        </p>
                        <ul className='ft-btm-links'>
                            <li>
                                <Link href="/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/">Terms of Use</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer