'use client'
import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'next/image'
import icc1 from '@/images/ar.svg'
import downArrowIcon from '@/images/down.svg'

const FaqSec = () => {
  const [showAll, setShowAll] = useState(false);

  const faqData = [
    {
      question: "What does your renovation service cost?",
      answer:
        "Our renovation service costs vary depending on the size and scope of the project. To get an accurate estimate, please use our cost calculator for a detailed quote tailored to your needs.",
    },
    {
      question: "Will I have a dedicated project manager?",
      answer:
        "Yes, every project is assigned a dedicated project manager who ensures smooth communication, daily updates and oversees all aspects of your renovation from start to finish.",
    },
    {
      question: "What quality are the materials you use?",
      answer:
        "We use high-quality materials to guarantee durability and reliability. You have the option to choose from standard materials or opt for premium selections from Italy for a more luxurious finish.",
    },
    {
      question: "How long will my renovation take?",
      answer:
        "The duration of your renovation depends on the project's complexity and size. Use our cost calculator to get a preliminary time estimate based on your specific requirements. During the initial consultation, we will provide a more detailed timeline and keep you updated throughout the process.",
    },
    {
      question: "Do you handle all permits and permissions required for renovation?",
      answer:
        "Yes, we take care of all necessary permits and permissions. Our team is well-versed in local regulations and will handle the paperwork to ensure a smooth start to your project.",
    },
    {
      question: "Can I live in my home during the renovation?",
      answer:
        "It depends on the extent of the renovation. For minor renovations, staying in your home might be feasible. However, for extensive projects, we recommend arranging alternative accommodations for your comfort and safety.",
    },
    {
      question: "What if I want to make changes to the design after the renovation has started?",
      answer:
        "Changes can be made, but it’s important to understand they may affect the timeline and cost. We encourage you to finalize all design choices before construction begins. If changes are necessary, our project manager will work with you to accommodate them as best as possible.",
    },
  ];

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 4);

  return (
    <section className='faq-sec sec gray-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-12'>
                    <h2 className='sec-title'>Frequently Asked Questions</h2>
                    <Accordion defaultActiveKey="0" className='mt-5 acc'>
                        {visibleFaqs.map((faq, index) => (
                          <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>
                              <span>{faq.question}</span>
                              <span className='faq-icon'>
                                <Image src={icc1} alt='Faq' />
                              </span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-12 text-center mt-4">
                    <button onClick={() => setShowAll(!showAll)} className="main-btn border-btn center">
                        <span>{showAll ? 'Show Less' : 'See More'}</span>
                        <Image 
                          src={downArrowIcon} 
                          alt="Arrow Right"
                          style={{ transform: showAll ? 'rotate(180deg)' : 'none' }}
                        />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FaqSec