import React from 'react'
import Image from 'next/image'
import icc1 from '@/images/lock.svg'
import icc2 from '@/images/design.svg'
import icc3 from '@/images/italy.svg'

const Whychoose = () => {
  const whyChooseData = [
    {
      icon: icc1,
      title: 'Up to 10-year WARRANTY',
      description: 'Peace of mind for the long term.'
    },
    {
      icon: icc2,
      title: 'Free Interior Design',
      description: 'Expert design included with every project.'
    },
    {
      icon: icc3,
      title: 'Made in Italy',
      description: 'Italian craftsmanship at its finest.'
    }
  ];

  return (
    <section className='why-choose-sec sec'>
        <div className="container">
            <div className="row">  
                <div className="col-lg-12 col-12 text-center">
                    <h2 className='sec-title'>Why Choose <span>Turnkey</span></h2>
                </div>
            </div>
            <div className="row row-gap-25 mt-5">
                {whyChooseData.map((item, index) => (
                  <div className="col-lg-4 col-12" key={index}>
                      <div className="why-choose-item">
                          <Image src={item.icon} alt='Why Choose' />
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Whychoose