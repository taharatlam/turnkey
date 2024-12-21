import React from 'react'
import Image from 'next/image'
import icc1 from '@/images/chat.svg'
import selectIcon from '@/images/drop.svg'
import CountryCodes from '../CountryCodes'
import arrowRightIcon from '@/images/black-arrow.svg'
import img1 from '@/images/img1.jpg'

const LeaveYourContact = () => {
  return (
    <div className='leave-your-contact-sec'>
        <div className='container'>
            <div className='lv-wrapper'>
                <Image src={img1} alt='Leave Your Contact' />
                <div className='row row-gap-25 align-items-center'>
                    <div className='col-lg-6 col-12'>
                        <Image src={icc1} alt='Leave Your Contact' />
                        <h2 className='sec-title white'>Leave your contact and get</h2>
                        <p className='para white'>
                            Leave your contact details to stay informed about our latest updates, offers, and services. We’ll ensure you never miss out!
                        </p>
                    </div>
                    <div className='col-lg-5 offset-lg-1 col-12'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='name' className='label-text'>First Name</label>
                                <input type='text' placeholder='John Doe' />
                            </div>
                         
                            <div className='form-group'>
                                <label htmlFor='phone' className='label-text'>Phone number</label>
                                <div className="phone-input-group">
                                    <div className="country-code-select">
                                        <CountryCodes />
                                        <Image src={selectIcon} alt="Select Icon" />
                                    </div>
                                    <input type="tel" id="phone" placeholder="50 123 4567" />
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="submit-btn main-btn wide mt-3 circ">
                                    <span>Send Request</span>
                                    <Image src={arrowRightIcon} alt="Arrow Right" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LeaveYourContact