'use client'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'next/image'
import icc1 from '@/images/ar.svg'
import downArrowIcon from '@/images/down.svg'

const FaqSec = () => {
  const faqData = [
    {
      question: "Is interior design free?",
      answer: "<p>Yes, from the moment you sign the contract. If already paid, it will be deducted from the final renovation cost.</p>"
    },
    {
      question: "What does your service cost?",
      answer: "<p>Answer to question 2.</p>"
    },
    {
      question: "Will I have a dedicated project manager?",
      answer: "<p>Answer to question 2.</p>"
    },
    {
      question: "What quality are the materials you use?",
      answer: "<p>Answer to question 2.</p>"
    },
  ];

  return (
    <section className='faq-sec sec gray-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-12'>
                    <h2 className='sec-title'>Frequently Asked Questions</h2>
                    <Accordion defaultActiveKey="0" className='mt-5 acc'>
                        {faqData.map((faq, index) => (
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
                    <a href="/contact" className="main-btn border-btn center">
                        <span>See More</span>
                        <Image src={downArrowIcon} alt="Arrow Right" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FaqSec