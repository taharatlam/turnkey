import React from 'react'
import Image from 'next/image'
import formTopImage from '@/images/form-bottom.svg'
import selectIcon from '@/images/drop.svg'
import arrowRightIcon from '@/images/black-arrow.svg'
import CountryCodes from '../CountryCodes'

const HomebannerForm = () => {
  return (
    <div className="home-banner-form">
        <div className="form-top">
            <h2>JOIN US NOW</h2>
            <p>The cost of the work is fixed in the contract and will not change.</p>
        </div>
        <Image src={formTopImage} alt="Form Top" />
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
  )
}

export default HomebannerForm