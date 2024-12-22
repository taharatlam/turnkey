import React from 'react'
import Image from 'next/image'
import refresh from '@/images/imgg.jpg'
import selectIcon from '@/images/drop.svg'
import arrowRightIcon from '@/images/black-arrow.svg'
import CountryCodes from '../CountryCodes'

const Refresh = () => {
  return (
    <section className='refresh-sec sec'>
        <Image src={refresh} alt='refresh' />
        <div className='container'>
            <div className='refresh-container'>  
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-12'>
                        <h2 className='sec-title'>Refresh, Renew,<br className='d-none d-sm-block' /> Redo Your Home!</h2>
                        <p className='sec-para'>
                            Expert Renovation Services in Dubai.
                        </p>
                        <p className='para'>
                            Ready to transform your space? Fill out the form and Let’s Get Started!
                        </p>
                    </div>
                    <div className='col-lg-6 col-12'>
                    <form>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="form-group">
                        <label htmlFor="full-name" className="label-text">Full Name</label>
                        <input type="text" id="full-name" placeholder="John Doe" />
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="form-group">
                        <label htmlFor="phone" className="label-text">Email</label>
                        <input type="email" id="phone" placeholder="john@example.com" />
                    </div>
                </div>
                <div className="col-lg-12 col-12">
                    <div className="form-group">
                        <label htmlFor="phone" className="label-text">When is the best time to contact you?</label>
                        <div className="select-wrap">
                            <select name="" id="">
                                <option value="morning">Please select a time</option>
                                <option value="afternoon">Afternoon</option>
                                <option value="evening">Evening</option>
                            </select>
                            <Image src={selectIcon} alt="Select Icon" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-12">
                    <div className="form-group">
                        <label htmlFor="phone" className="label-text">Select or search your area</label>
                        <div className="select-wrap">
                            <select name="" id="">
                                <option value="morning">Search area </option>
                                <option value="afternoon">Afternoon</option>
                                <option value="evening">Evening</option>
                            </select>
                            <Image src={selectIcon} alt="Select Icon" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-12">
                    <div className="form-group">
                        <label htmlFor="phone" className="label-text">Phone number</label>
                        <div className="phone-input-group">
                            <div className="country-code-select">
                                <CountryCodes />
                                <Image src={selectIcon} alt="Select Icon" />
                            </div>
                            <input type="tel" id="phone" placeholder="50 123 4567" />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="submit-btn main-btn wide mt-3">
                        <span>Submit</span>
                        <Image src={arrowRightIcon} alt="Arrow Right" />
                    </button>
                </div>
            </div>
        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                
            </div>
        </div>
    </section>
  )
}

export default Refresh