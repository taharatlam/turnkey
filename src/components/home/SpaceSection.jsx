import React from 'react'
import Image from 'next/image'
import icc1 from '@/images/icc1.png'
import ic1 from '@/images/icc1.svg'
import icc2 from '@/images/icc2.png'
import ic2 from '@/images/icc2.svg'
import icc3 from '@/images/icc3.png'
import ic3 from '@/images/icc3.svg'
import icc4 from '@/images/icc4.png'
import ic4 from '@/images/icc4.svg'
import icc5 from '@/images/icc5.png'
import ic5 from '@/images/icc5.svg'
import icc6 from '@/images/icc6.png'
import ic6 from '@/images/icc6.svg'
import call from '@/images/ph.svg'
import wh from '@/images/wh.svg'
import Link from 'next/link'


const spaceCardsData = [
  {
    imgSrc: icc1,
    iconSrc: ic1,
    title: 'Villa Renovations',
    description: 'Transform your villa into a luxurious oasis with our bespoke design and construction services.'
  },
  {
    imgSrc: icc2,
    iconSrc: ic2,
    title: 'Apartment Renovations',
    description: 'Modernize your apartment and maximize your living space with our innovative renovation solutions.'
  },
  {
    imgSrc: icc3,
    iconSrc: ic3,
    title: 'Interior Design',
    description: 'From concept to completion, our talented designers create interiors that reflect your unique style and personality.'
  },
  {
    imgSrc: icc4,
    iconSrc: ic4,
    title: 'Kitchen and Bathroom Remodeling',
    description: 'Upgrade your kitchen and bathroom with stylish, functional designs that enhance your daily life.'
  },
  {
    imgSrc: icc5,
    iconSrc: ic5,
    title: 'Custom Carpentry and Joinery',
    description: 'Add a touch of elegance with our handcrafted cabinetry, built-in wardrobes, and bespoke furniture.'
  },
  {
    imgSrc: icc6,
    iconSrc: ic6,
    title: 'Project Management',
    description: 'We oversee every detail of your renovation, ensuring a smooth and efficient process from start to finish.'
  }
];

const SpaceSection = () => {
  return (
    <section className='sec space-section dark-blue-bg'>
        <div className='container'>
            <div className='row'> 
                <div className='col-lg-12 col-12 text-center'>
                    <h2 className='sec-title white'>Creating Spaces You’ll Love.</h2>
                    <p className='sec-para white'>REDO provides a comprehensive range of renovation services in Dubai, including:</p>
                </div>
            </div>
            <div className='row row-gap-25 mt-4'>
                {spaceCardsData.map((card, index) => (
                  <div key={index} className='col-lg-4 col-md-6 col-12'>
                      <div className='space-card'>
                          <Image src={card.imgSrc} alt='space' />
                          <div className='space-card-con'>
                              <Image src={card.iconSrc} alt='space' />
                              <h3>{card.title}</h3>
                              <p>{card.description}</p>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
            <div className='row'>
                <div className='col-lg-12 col-12 text-center'>
                    <div className='get-started-container'>
                        <h2 className='sec-title white'>Get Started Today</h2>
                        <p className='sec-para white'>Ready to bring your dream home to life? Contact us for a free consultation and let's discuss your renovation project.</p>
                        <div className='get-started-btns'>
                            <Link href='/' className='call-btn'>
                                <Image src={call} alt='call' />
                                <span>Call Us <br /> <span className='fw-400'>+971 (4) 406-92-09</span></span>
                            </Link>
                            <Link href='/services' className='wh-btn'>
                                <Image src={wh} alt='call' />
                                <span>Message us in WhatsApp</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SpaceSection