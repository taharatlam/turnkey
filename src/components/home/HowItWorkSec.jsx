import React from 'react'
import phoneIcon from '@/images/phone-icon.svg'
import meetingIcon from '@/images/meeting.svg'
import measurementIcon from '@/images/measurement.svg'
import executionIcon from '@/images/execution.svg'
import fileHandoverIcon from '@/images/final-handover.svg'
import Image from 'next/image'
import downArrowIcon from '@/images/down.svg'

const HowItWorkSec = () => {

    const howItWorkList = [
        {
            id: 1,
            icon: phoneIcon,
            title: 'Contact',
            description: 'Please leave your contact information and wait for a call from our call center operator, or feel free to contact us in a way that is most convenient for you.'
        },
        {
            id: 2,
            icon: meetingIcon,
            title: 'Meeting',
            description: 'We will schedule a meeting with you to discuss your renovation needs and goals.'
        },
        {
            id: 3,
            icon: measurementIcon,
            title: 'Measurement',
            description: 'Our team will visit your property to take measurements and assess the scope of the work.'
        },
        {
            id: 4,
            icon: executionIcon,
            title: 'Execution',
            description: 'We will start the renovation work according to the plan and schedule.'
        },
        {
            id: 5,
            icon: fileHandoverIcon,
            title: 'File Handover',
            description: 'We will provide you with all the necessary documents and files after the completion of the work.'
        }
    ]

  return (
    <section className="how-it-work-sec sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-12 text-center">
                    <h2 className="sec-title">How it works</h2>
                    <p className="sec-para">
                        Your Renovation Journey Begins Here
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="how-it-work-list">
                        {howItWorkList.map((item, index) => (
                            <li className="how-it-work-item" key={index}>
                                <div className="l-part">
                                    <h3>0{index + 1}</h3>
                                </div>
                                <div className="r-part">
                                    <div className="top-part">
                                        <Image src={item.icon} alt="How it works" />
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="bottom-part">
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
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

export default HowItWorkSec